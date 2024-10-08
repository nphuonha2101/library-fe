import { BsCartFill } from "react-icons/bs";
import { BiSolidBookAlt, BiSolidUser } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ILayout } from "../../interfaces/ILayout.ts";
import { getObject, removeItem } from "../../utils/localStorageUtil.ts";
import { useDispatch } from "react-redux";
import { resetLoan } from "../../redux/loanSlice.ts";
import { IUser } from "../../interfaces/IUser.ts";

export const Admin: React.FC<ILayout> = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = getObject("user") as IUser;

    const handleLogout = () => {
        removeItem("token");
        removeItem("user");
        dispatch(resetLoan());
        navigate("/login");

    }

    return (
        <>
            <aside id="logo-sidebar"
                className="fixed border-2 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <Link to="/" className="flex items-center ps-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7"
                            alt="Flowbite Logo" />
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">eLib</span>
                    </Link>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to="/admin/books"
                                className={({ isActive }) =>
                                    isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group' :
                                        'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                                }>
                                <BiSolidBookAlt className="text-2xl" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý sách</span>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/admin/authors'}
                                className={({ isActive }) =>
                                    isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group' :
                                        'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                                }>
                                <BiSolidUser className="text-2xl" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý tác giả</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/admin/loans'}
                                className={({ isActive }) =>
                                    isActive ? 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group' :
                                        'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                                }>
                                <BsCartFill className="text-2xl" />
                                <span className="flex-1 ms-3 whitespace-nowrap">Quản lý mượn sách</span>
                            </NavLink>
                        </li>
                        <li>
                            <div className="bg-white border rounded p-3 shadow-md" >
                                <p className="font-semibold">{user.fullName}</p>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <button
                                    onClick={handleLogout}
                                    className="mt-4 w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <LuLogOut className="text-2xl" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Đăng xuất</span>
                                </button>
                            </div>

                        </li>

                    </ul>
                </div>
            </aside>
            <div className="p-4 md:ms-32 md:me-10 md:w-full">
                {children}
            </div>


        </>
    )
}