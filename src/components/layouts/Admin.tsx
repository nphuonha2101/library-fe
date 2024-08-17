
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
                                        <form className="p-4 md:p-5">
                                            <div className="grid gap-4 mb-4 grid-cols-2">
                                                <div className="col-span-2">
                                                    <label htmlFor="name"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên
                                                        sách</label>
                                                    <input type="text" name="name" id="name"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                           placeholder="Nhập tên sách"/>
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="price"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số
                                                        lượng</label>
                                                    <input type="number" name="price" id="price"
                                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                           placeholder="1"/>
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="category"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thể
                                                        loại</label>
                                                    <select id="category"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                        <option>Chọn thể loại</option>
                                                        <option value="PC">PC</option>
                                                        <option value="GA">Gaming/Console</option>
                                                        <option value="PH">Phones</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-2">
                                                    <label htmlFor="description"
                                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô
                                                        tả</label>
                                                    <textarea id="description"
                                                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                              placeholder="Nhập mô tả ở đây"></textarea>
                                                </div>
                                            </div>
                                            <button type="submit"
                                                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor"
                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                          clip-rule="evenodd"></path>
                                                </svg>
                                                Thêm sách mới
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Xóa
                            </button>

                            <div id="popup-modal"
                                 className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <button type="button"
                                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-hide="popup-modal">
                                            <svg className="w-3 h-3" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                        <div className="p-4 md:p-5 text-center">
                                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                      stroke-linejoin="round" stroke-width="2"
                                                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Bạn
                                                chắc chắn muốn xóa không?</h3>
                                            <button data-modal-hide="popup-modal" type="button"
                                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                                Có
                                            </button>
                                            <button data-modal-hide="popup-modal" type="button"
                                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Không

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>


        </>
    )
}