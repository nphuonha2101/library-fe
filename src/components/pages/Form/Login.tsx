import { useDispatch } from "react-redux";
import { getAntiForgeryToken, getStoredToken } from "../../../services/csrfTokenService.ts";
import { saveString, saveObject } from "../../../utils/localStorageUtil.ts";
import { useNavigate } from "react-router-dom";
import { setLoan } from "../../../redux/loanSlice.ts";
import { ILoan } from "../../../interfaces/ILoan.ts";
import { IUser } from "../../../interfaces/IUser.ts";
import { toast } from "react-toastify";


export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("usernameOrEmail", (document.getElementById("email") as HTMLInputElement).value);
        formData.append("password", (document.getElementById("password") as HTMLInputElement).value);
        console.log(formData);
        const token = getStoredToken() || await getAntiForgeryToken();
        console.log("CSRF Token:", token);
        fetch("https://localhost:7259/login", {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRF-TOKEN": token
            },
            credentials: "include",
        }).then((response) => {
            if (response.ok) {
                console.log("Login success");
                response.json().then((data) => {
                    const user: IUser = data.user as IUser;
                    console.log(data);
                    saveString("token", data.token);
                    saveObject("user", data.user);

                    const loan: ILoan = {
                        user: user,
                        loanDetails: [],
                    }
                    dispatch(setLoan(loan));
                    navigate("/");
                });


            } else {
                console.log("Login failed", response.status, response.statusText);
                toast.error("Đăng nhập thất bại");
            }
        }).catch((error) => {
            console.error("Network error:", error);
            toast.error("Đã có lỗi xảy ra");
        })
    }


    return (
        <div className="w-full">
            <div className="h-full">
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full" />
                    </div>
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                        <form className="max-w-sm" id="loginForm">
                            <div className="mb-5">
                                <label htmlFor="email"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                                <input type="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@email.com" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password"
                                    className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật
                                    khẩu</label>
                                <input type="password" id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required />
                            </div>

                            <button type="submit"
                                onClick={handleLogin}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng
                                nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}