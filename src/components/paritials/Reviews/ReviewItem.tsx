import { IBookReview } from "../../../interfaces/IBookReview";

export const ReviewItem = ({ data }: { data: IBookReview }) => {
    return (
        <>
            <article className="md:gap-8 md:grid md:grid-cols-3 w-full my-3 border border-1 p-3 rounded duration-500 transition-shadow hover:shadow-md">
                <div className="w-full">
                    <div className="flex items-center mb-6">
                        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                        <div className="ms-4 font-medium dark:text-white">
                            <p>{data.user.fullName}</p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <p>{data.user.email}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-2 mt-6 md:mt-0">
                    <div className="flex items-start justify-between mb-5">
                        <div className="pe-4">
                            <footer>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Đã đánh giá vào lúc: {data.createdAt}</p>
                            </footer>
                            <h4 className="text-xl text-start w-fit font-bold text-gray-900 dark:text-white">{data.title ? data.title : "Không có tiêu đề"}</h4>
                        </div>
                        <p className="h-6 rounded-50 justify-center bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5">{data.rating}
                            <svg className="ms-1 w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </p>
                    </div>
                    <p className="text-start mb-2 text-gray-500 dark:text-gray-400">{data.review}</p>
                </div>
            </article>
        </>
    );
}