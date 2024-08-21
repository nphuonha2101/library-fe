import {BsCartFill} from "react-icons/bs";
import {BiSolidBookAlt, BiSolidUser} from "react-icons/bi";
import {DiAptana} from "react-icons/di";
import {LuLogOut} from "react-icons/lu";
import {Link} from "react-router-dom";
import {ILayout} from "../../interfaces/ILayout.ts";

export const Admin: React.FC<ILayout> = ({children}) => {
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
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý tác giả</span>
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
                {children}
            </div>


        </>
    )
}