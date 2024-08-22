import { Link, NavLink, useNavigate } from "react-router-dom";
import { SearchModal } from "./SearchModal";
import { useEffect, useState } from "react";
import { removeItem, getObject } from "../../../utils/localStorageUtil.ts";
import { IUser } from "../../../interfaces/IUser.ts";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";
import { ILoan } from "../../../interfaces/ILoan.ts";
import { resetLoan } from "../../../redux/loanSlice.ts";


export const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const loan = useSelector((state: RootState) => state.loan?.loan as ILoan);
    const dispatch = useDispatch();


    useEffect(() => {
        const userString = getObject("user");

        if (userString) {
            const user: IUser = userString as IUser;
            setUserFullName(user.fullName);
            setUserEmail(user.email);

            if (user.isAdmin) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        } else {
            setIsLogin(false);
        }

        setIsLogin(true);
    }, []);


    const navigate = useNavigate();

    const [searchModalOpen, setSearchModalOpen] = useState(false);


    const handleCloseSearchModal = (isOpen: boolean) => {
        setSearchModalOpen(isOpen);
        console.log("Close search modal" + isOpen);
    }

    const handleOpenSearchModal = () => {
        setSearchModalOpen(true);
        console.log("Open search modal");
    }

    const handleLogout = () => {
        removeItem("token");
        removeItem("user");
        dispatch(resetLoan());
        navigate("/login");
        setIsLogin(false);
        setIsAdmin(false);
    }

    return (
        <>
            <header className="absolute w-full top-0 left-0">
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eLib</span>
                        </a>

                        <div className="flex md:order-2">
                            {isLogin && <Link to="/cart" className="me-6 flex items-center space-x-2 text-sm text-gray-900 dark:text-white">
                                <div className="relative">
                                    <CiShoppingCart className="text-2xl text-gray-900 dark:text-white" />
                                    <span className="absolute -top-2 -end-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1">{loan && loan.loanDetails ? loan.loanDetails.length : 0}</span>

                                </div>
                            </Link>}

                            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className="relative hidden md:block">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input onClick={handleOpenSearchModal} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm ..." />
                            </div>

                            {isLogin ? (
                                <>
                                    {/* // User Menu */}
                                    < button type="button" className="mx-4 flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="user photo" />
                                    </button>
                                    {/* // User menu dropdown */}
                                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                        <div className="px-4 py-3">
                                            <span className="block text-sm text-gray-900 dark:text-white">{userFullName}</span>
                                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userEmail}</span>
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            {isAdmin && (
                                                <li>
                                                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Quản trị</Link>
                                                </li>
                                            )}

                                            <li>
                                                <Link to="/loans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Lịch sử đặt</Link>
                                            </li>
                                            <li>
                                                <button onClick={handleLogout} className="w-full block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-200 dark:hover:text-white">Đăng xuất</button  >
                                            </li>
                                        </ul>
                                    </div>
                                    {/* // End user menu */}
                                </>
                            ) : (
                                <>
                                    {/* // Auth buttons */}
                                    <div className="flex content-center items-center space-x-4 ms-5">
                                        <Link to="/login" className="m-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:text-white">Đăng nhập </Link>
                                        <Link to="/register" className="text-sm text-gray-900 dark:text-white hover:underline">Đăng ký</Link>
                                    </div>
                                    {/* // End auth buttons */}
                                </>
                            )}

                            < button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tìm kiếm..." />
                            </div>
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-600" : "text-gray-600"
                                    }
                                >
                                    Trang chủ
                                </NavLink>
                                <NavLink
                                    to="/books"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-600" : "text-gray-600"
                                    }
                                >
                                    Sách
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "text-blue-600" : "text-gray-600"
                                    }
                                >
                                    Về chúng tôi
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header >

            <SearchModal isOpen={searchModalOpen} handleClose={handleCloseSearchModal} />
        </>
    );
};