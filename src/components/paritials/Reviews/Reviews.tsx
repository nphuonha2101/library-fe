import { IBookReview } from "../../../interfaces/IBookReview";
import { getAntiForgeryToken, getStoredToken } from "../../../services/csrfTokenService";
import { ReviewItem } from "./ReviewItem";
import { useEffect, useState } from "react";

export const Reviews = ({ bookId }: { bookId: number }) => {
    const [reviews, setReviews] = useState<IBookReview[]>([]);
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const rating = avgRating.toFixed(1);

    const isLogin = true;

    const numberOfReviews = reviews.length;

    // fetch reviews
    useEffect(() => {
        fetch(`https://localhost:7259/api/v1/book-reviews/book/${bookId}`)

            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setReviews(data));
    }, [bookId]);

    // submit review
    const submitReview = async (e: React.FormEvent<HTMLFormElement>) => {
        const form = document.getElementById("reviewForm") as HTMLFormElement;
        e.preventDefault();
        const formData = new FormData(form);
        formData.append("bookId", bookId.toString());
        formData.append("userId", "1");

        const token = getStoredToken() || await getAntiForgeryToken();

        fetch(`https://localhost:7259/api/v1/book-reviews`, {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRF-TOKEN": token
            },
            credentials: "include"
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setReviews([...reviews, data]);
                form.reset();
            })
            .catch(error => console.error("There was a problem with your fetch operation:", error));
    };




    return (
        <div className="w-full rounded-xl p-4 shadow-md mt-4">
            <div className="w-full grid gap-4">
                <div className="grid-cols-3 max-w-xs">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{numberOfReviews} đánh giá</a>
                    </div>
                </div>
                <div className="w-full p-3 max-h-svh overflow-y-auto">
                    {
                        reviews.map((review, index) => (
                            <ReviewItem key={index} data={review} />
                        ))
                    }
                </div>
                {isLogin ? (
                    <div className="w-full">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Viết đánh giá của bạn</h2>
                        <form id="reviewForm" onSubmit={submitReview}>
                            <div className="flex items-center gap-7 mt-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor="review-title">Tiêu đề đánh giá:</label>
                                <input className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="review-title" id="review-title" placeholder="Nhập tiêu đề đánh giá" />
                                <select className="w-24 p-2 mt-1 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="rating" id="rating">
                                    <option value="1">1 sao</option>
                                    <option value="2">2 sao</option>
                                    <option value="3">3 sao</option>
                                    <option value="4">4 sao</option>
                                    <option value="5">5 sao</option>
                                </select>
                            </div>
                            <label className="mt-6 block text-sm font-medium text-gray-700 dark:text-white" htmlFor="review">Đánh giá của bạn:</label>
                            <textarea className="w-full h-24 p-2 mt-1 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="review" id="review" placeholder="Nhập đánh giá của bạn"></textarea>


                            <button className="w-full p-2 mt-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="submit">Gửi đánh giá</button>
                        </form>
                    </div>
                ) : <p className="text-center">Bạn cần đăng nhập để đánh giá!</p>}
            </div>
        </div>
    );
}