import { IBookReview } from "../../../interfaces/IBookReview";

export const ReviewItem = ({ data }: { data: IBookReview }) => {
    return (
        <>
            <article className="md:gap-8 md:grid md:grid-cols-3">
                <div>
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
                    <div className="flex items-start mb-5">
                        <div className="pe-4">
                            <footer>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Đã đánh giá vào lúc: {data.createdAt}</p>
                            </footer>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">{data.title ? data.title : "Không có tiêu đề"}</h4>
                        </div>
                        <p className="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">{data.rating}</p>
                    </div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{data.review}</p>
                </div>
            </article>
        </>
    );
}