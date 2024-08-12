import {Link} from "react-router-dom";

export const Register = () => {
    return (
        <div className="h-screen">
        <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full"/>
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
                               placeholder="name@company.com"/>
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
                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300"> Tôi chap
                                nhận
                                các <a className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                       href="#"> điều khoản và điều kiện</a></label>
                        </div>
                    </div>
                    <button type="submit"
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