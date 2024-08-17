
import {BsCartFill} from "react-icons/bs";
import {BiSolidBookAlt, BiSolidUser} from "react-icons/bi";
import {DiAptana} from "react-icons/di";
import {LuLogOut} from "react-icons/lu";
import {Link} from "react-router-dom";

export const Admin = () => {
    return (
        <>
            <aside id="logo-sidebar"
                   className="fixed border-2 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={''}
                                  className="flex p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <BiSolidBookAlt className="text-2xl"/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý sách</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}
                                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <BiSolidUser className="text-2xl"/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý người dùng</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}
                                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <BsCartFill className="text-2xl"/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý muượn sách</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}
                                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <LuLogOut className="text-2xl"/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Đăng xuất</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}
                                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <DiAptana className="text-2xl"/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Cài đặt</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="p-4 md:ms-64 md:me-10 md:w-full">
                <table id="default-table" className="w-full">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-center">Id</th>
                        <th className="px-4 py-2 text-center">Title</th>
                        <th className="px-4 py-2 text-center">Isbn</th>
                        <th className="px-4 py-2 text-center">Mô tả</th>
                        <th className="px-4 py-2 text-center" data-type="date" data-format="YYYY/DD/MM">Ngày nhập</th>
                        <th className="px-4 py-2 text-center">Số lượng</th>
                        <th className="px-4 py-2 text-center">Hình ảnh</th>
                        <th className="px-4 py-2 text-center">Thể loại</th>
                        <th className="px-4 py-2 text-center">Tác giả</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-2 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">111</td>
                        <td className="px-4 py-2 text-center">Toi thay hoa vang tren co xanh</td>
                        <td className="px-4 py-2 text-center">1110293898</td>
                        <td className="px-4 py-2 text-center">Sach rat y nghĩa</td>
                        <td className="px-4 py-2 text-center">22/11/2024</td>
                        <td className="px-4 py-2 text-center">20</td>
                        <td className="px-4 py-2 text-center"><img className="w-9 h-9" src="https://sachweb.com//Upload/sach/Bia1_Nguoixuacanhtinh.jpg"/></td>
                        <td className="px-4 py-2 text-center">Truyện tranh</td>
                        <td className="px-4 py-2 text-center">Nguyen Nhat Anh</td>
                        <td className="px-4 py-2">
                            <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Chỉnh
                                sửa
                            </button>
                            <div id="crud-modal" aria-hidden="true"
                                 className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div
                                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Thêm sách mới
                                            </h3>
                                            <button type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-toggle="crud-modal">
                                                <svg className="w-3 h-3" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Xóa
                            </button>


                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>


        </>
    )
}