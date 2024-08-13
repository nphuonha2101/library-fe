
import React from 'react';

export const Cart = () => {
    return (
        <div>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        <div className="flex items-center lg:order-2">
                            <a href="#"
                               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
                                in</a>
                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                             id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                       aria-current="page">HOME</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">PAGE</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">BLOG</a>
                                </li>

                                <li>
                                    <a href="#"
                                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                <div
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div
                                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="h-20 w-20 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                                 alt="imac image"/>
                                            <img className="hidden h-20 w-20 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                                                 alt="imac image"/>
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <button type="button" id="decrement-button"
                                                        data-input-counter-decrement="counter-input"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                    </svg>
                                                </button>
                                                <input type="text" id="counter-input" data-input-counter
                                                       className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                       placeholder="" value="2" required/>
                                                <button type="button" id="increment-button"
                                                        data-input-counter-increment="counter-input"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M9 1v16M1 9h16"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#"
                                               className="text-base font-medium text-gray-900 hover:underline dark:text-white">Beginning
                                                Programming With Java For Dummies – 4Th Edition</a>

                                            <div className="flex items-center gap-4">
                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                    </svg>
                                                    Add to Favorites
                                                </button>

                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M6 18 17.94 6M18 18 6.06 6"/>
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div
                                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="h-20 w-20 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                                                 alt="imac image"/>
                                            <img className="hidden h-20 w-20 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                                                 alt="imac image"/>
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <button type="button" id="decrement-button-2"
                                                        data-input-counter-decrement="counter-input-2"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                    </svg>
                                                </button>
                                                <input type="text" id="counter-input-2" data-input-counter
                                                       className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                       placeholder="" value="1" required/>
                                                <button type="button" id="increment-button-2"
                                                        data-input-counter-increment="counter-input-2"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M9 1v16M1 9h16"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#"
                                               className="text-base font-medium text-gray-900 hover:underline dark:text-white">Php,
                                                Mysql, Javascript & Html5 All-In-One For Dummies</a>

                                            <div className="flex items-center gap-4">
                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                    </svg>
                                                    Add to Favorites
                                                </button>

                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M6 18 17.94 6M18 18 6.06 6"/>
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div
                                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="h-20 w-20 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                                                 alt="imac image"/>
                                            <img className="hidden h-20 w-20 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                                                 alt="imac image"/>
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <button type="button" id="decrement-button-3"
                                                        data-input-counter-decrement="counter-input-3"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                    </svg>
                                                </button>
                                                <input type="text" id="counter-input-3" data-input-counter
                                                       className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                       placeholder="" value="1" required/>
                                                <button type="button" id="increment-button-3"
                                                        data-input-counter-increment="counter-input-3"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M9 1v16M1 9h16"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#"
                                               className="text-base font-medium text-gray-900 hover:underline dark:text-white">Giáo
                                                Trình Thuật Toán (Introduction To Algorithms )</a>

                                            <div className="flex items-center gap-4">
                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                    </svg>
                                                    Add to Favorites
                                                </button>

                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M6 18 17.94 6M18 18 6.06 6"/>
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div
                                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="shrink-0 md:order-1">
                                            <img className="h-20 w-20 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                                                 alt="imac image"/>
                                            <img className="hidden h-20 w-20 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                                                 alt="imac image"/>
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <button type="button" id="decrement-button-4"
                                                        data-input-counter-decrement="counter-input-4"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                    </svg>
                                                </button>
                                                <input type="text" id="counter-input-4" data-input-counter
                                                       className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                       placeholder="" value="1" required/>
                                                <button type="button" id="increment-button-4"
                                                        data-input-counter-increment="counter-input-4"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M9 1v16M1 9h16"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#"
                                               className="text-base font-medium text-gray-900 hover:underline dark:text-white">Laravel
                                                5 Cookbook Enhance Your Amazing Applications</a>

                                            <div className="flex items-center gap-4">
                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                    </svg>
                                                    Add to Favorites
                                                </button>

                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M6 18 17.94 6M18 18 6.06 6"/>
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                    <div
                                        className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                        <a href="#" className="w-20 shrink-0 md:order-1">
                                            <img className="h-20 w-20 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                                                 alt="imac image"/>
                                            <img className="hidden h-20 w-20 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                                                 alt="imac image"/>
                                        </a>

                                        <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                                            <div className="flex items-center">
                                                <button type="button" id="decrement-button-5"
                                                        data-input-counter-decrement="counter-input-5"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                                                    </svg>
                                                </button>
                                                <input type="text" id="counter-input-5" data-input-counter
                                                       className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                       placeholder="" value="3" required/>
                                                <button type="button" id="increment-button-5"
                                                        data-input-counter-increment="counter-input-5"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                         fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M9 1v16M1 9h16"/>
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>

                                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                            <a href="#"
                                               className="text-base font-medium text-gray-900 hover:underline dark:text-white">Pro
                                                ASP.NET MVC 5</a>

                                            <div className="flex items-center gap-4">
                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                                                    </svg>
                                                    Add to Favorites
                                                </button>

                                                <button type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                    <svg className="me-1.5 h-5 w-5" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M6 18 17.94 6M18 18 6.06 6"/>
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden xl:mt-8 xl:block">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">People also
                                    Read</h3>
                                <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                                    <div
                                        className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                        <a href="#" className="overflow-hidden rounded">
                                            <img className="mx-auto h-44 w-44 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                                 alt="imac image"/>
                                            <img className="mx-auto hidden h-44 w-44 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                                                 alt="imac image"/>
                                        </a>
                                        <div>
                                            <a href="#"
                                               className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">TRONG
                                                THẲM SÂU CỦA BÍ ẨN</a>

                                        </div>
                                        <div className="mt-6 flex items-center gap-2.5">
                                            <button data-tooltip-target="favourites-tooltip-1" type="button"
                                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                                <svg className="h-5 w-5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                                                </svg>
                                            </button>
                                            <div id="favourites-tooltip-1" role="tooltip"
                                                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                                                Add to favourites
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                            <button type="button"
                                                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                                                </svg>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                        <a href="#" className="overflow-hidden rounded">
                                            <img className="mx-auto h-44 w-44 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                                                 alt="imac image"/>
                                            <img className="mx-auto hidden h-44 w-44 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                                                 alt="imac image"/>
                                        </a>
                                        <div>
                                            <a href="#"
                                               className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">KIẾN
                                                THÚC VUI VỀ CƠ THỂ CON NGƯỜI</a>


                                        </div>

                                        <div className="mt-6 flex items-center gap-2.5">
                                            <button data-tooltip-target="favourites-tooltip-2" type="button"
                                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                                <svg className="h-5 w-5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                                                </svg>
                                            </button>
                                            <div id="favourites-tooltip-2" role="tooltip"
                                                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                                                Add to favourites
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                            <button type="button"
                                                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                                                </svg>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                        <a href="#" className="overflow-hidden rounded">
                                            <img className="mx-auto h-44 w-44 dark:hidden"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                                                 alt="imac image"/>
                                            <img className="mx-auto hidden h-44 w-44 dark:block"
                                                 src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                                                 alt="imac image"/>
                                        </a>
                                        <div>
                                            <a href="#"
                                               className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                                                NHỮNG ĐIỀU KỲ DIỆU VỀ TRÁI ĐẤT VÀ SỰ SỐNG</a>
                                        </div>

                                        <div className="mt-6 flex items-center gap-2.5">
                                            <button data-tooltip-target="favourites-tooltip-3" type="button"
                                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                                <svg className="h-5 w-5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                                                </svg>
                                            </button>
                                            <div id="favourites-tooltip-3" role="tooltip"
                                                 className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                                                Add to favourites
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>

                                            <button type="button"
                                                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                                                </svg>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div
                                className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <a href="#"
                                   className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed
                                    to Checkout</a>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <a href="#" title=""
                                       className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
