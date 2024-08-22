import { Link, useNavigate } from "react-router-dom";
import { getAntiForgeryToken, getStoredToken } from "../../../services/csrfTokenService.ts";
import { toast } from "react-toastify";
// import {getAntiForgeryToken, getStoredToken} from "../../../services/csrfTokenService.ts";

export const Register = () => {
    const navigate = useNavigate();
    const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // const form = document.getElementById("loginForm") as HTMLFormElement;
        e.preventDefault();
        const formData = new FormData();

        formData.append("fullName", (document.getElementById("fullName") as HTMLInputElement).value);
        formData.append("username", (document.getElementById("username") as HTMLInputElement).value);
        formData.append("email", (document.getElementById("email") as HTMLInputElement).value);
        formData.append("address", (document.getElementById("address") as HTMLInputElement).value);
        formData.append("password", (document.getElementById("password") as HTMLInputElement).value);
        formData.append("dob", (document.getElementById("dob") as HTMLInputElement).value);

        const token = getStoredToken() || await getAntiForgeryToken();
        console.log("CSRF Token:", token);
        fetch("https://localhost:7259/register", {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRF-TOKEN": token
            },
            credentials: "include",
        }).then((response) => {
            if (response.ok) {
                console.log("Register success");
                navigate("/login");
            } else {
                console.log("Register failed", response.status, response.statusText);
                toast.error("Đăng ký thất bại");
            }
        }).catch((error) => {
            console.error("Network error:", error);
            toast.error("Đã có lỗi xảy ra");
        })
    }



    return (
        <div className="h-screen">
            <div className="h-full">
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" />
                    </div>
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input type="email" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="username"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Username
                                </label>
                                <input type="username" name="username" id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="fullName"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Họ và tên
                                </label>
                                <input type="text" name="fullName" id="fullName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="address"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa
                                    chỉ
                                </label>
                                <input type="text" name="address" id="address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="dob"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày
                                    sinh
                                </label>
                                <input type="date" name="dob" id="dob"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="" />
                            </div>

                            <div>
                                <label htmlFor="password"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                                    khẩu</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập
                                    lại mật khẩu</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300"> Tôi chấp
                                        nhận
                                        các <a className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#"> điều khoản và điều kiện</a></label>
                                </div>
                            </div>
                            <button type="submit"
                                onClick={handleSignup}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng
                                ký tài khoản
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Đã có tài khoản? <Link to={"/login"}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng
                                    nhập ngay</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}