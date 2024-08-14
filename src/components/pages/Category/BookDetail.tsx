// import { useParams } from 'react-router-dom';
// import { useFetchBooks } from '../../../hooks/useFetchBooks';

export const BookDetail = () => {
    // const { id } = useParams();
    // const { books, error, loading } = useFetchBooks(`https://freetestapi.com/api/v1/books/${id}`);
    //
    // if (loading) return <p className="text-2xl">Loading...</p>;
    // if (error) return <div className="text-2xl">Error: {error.message}</div>;
    //
    // const book = books.find(book => book.id === id);
    // if (!book) return <div className="text-2xl">Book not found</div>;

    return (
        <div className="container mt-20 mb-10">
            <div className="grid grid-cols-2 gap-6 max-w-7xl ">
                <div className="flex object-cover w-96">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1721314157041-4d7a484822fa?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="cover"/>
                </div>

                <div className="text-left">
                    <div className="">
                        <h1 className="font-bold text-3xl">
                            Những ngôi sao trên cao
                        </h1>
                    </div>

                    <div className="">
                        <p className="text-gray-500 text-lg mt-2">
                            Tác giả: Nguyễn Nhật Ánh
                        </p>
                    </div>


                    <div className="">
                        <p className="text-gray-500 text-lg mt-2">
                            Mô tả
                        </p>
                    </div>

                    <div className="">
                        <p className="text-lg mt-2">
                            Số lượng trong kho: 10
                        </p>
                    </div>


                    <div className="mt-4">
                        <button type="button" className="bg-orange-600 text-white p-2 rounded-full mr-2 w-10 ">-
                        </button>
                        <input
                            type="number"
                            className="w-16 h-10 text-center text-orange-600"
                            value={"0"}
                            readOnly
                        />
                        <button type="button" className="bg-orange-600 text-white p-2 rounded-full ml-2 w-10">+</button>

                        <button type="button" className="bg-blue-500 text-white p-2 ml-2">Thêm vào giỏ hàng
                        </button>

                    </div>

                    <div>
                        <button type="button" className="bg-blue-500 text-white p-2 mt-4 w-full">Mượn ngay</button>
                    </div>

                </div>
            </div>
        </div>

    );
};