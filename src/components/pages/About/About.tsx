import React from 'react';

export const About = () => {
    return (
        <div className="absolute w-full left-0 bg-gray-100 text-gray-800">
            <div className="relative w-full h-[320px]" id="home">
                <div className="absolute inset-0 opacity-70">
                    <img src="https://cafefcdn.com/203337114487263232/2023/7/20/298906574101590302134476847005733038478640968n-16898915637541351616271-1689866422690-16898664227691326815476.jpg" alt="Hình nền" className="object-cover object-center w-full h-full" />
                </div>
                <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Thư viện ABC</h1>
                        <p className="font-regular text-xl mb-8 mt-4">Giải pháp toàn diện cho dịch vụ quản lý thư viện</p>
                        <a href="#contactUs" className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200">Liên hệ</a>
                    </div>
                </div>
            </div>
            <section className="py-10" id="services">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dịch vụ của chúng tôi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://lawnet.vn/uploads/image/2023/09/16/102843474.jpg" alt="Quản lý sách" className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Quản lý sách</h3>
                                <p className="text-gray-700 text-base">Dịch vụ quản lý sách của chúng tôi giúp theo dõi và quản lý toàn bộ tài liệu trong thư viện một cách dễ dàng.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://ussh.vnu.edu.vn/uploads/ussh/sinh-vien/2020_10/ai7i7109-20201015124536454.jpg" alt="Quản lý độc giả" className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Quản lý độc giả</h3>
                                <p className="text-gray-700 text-base">Dịch vụ này cung cấp các công cụ để quản lý và theo dõi hoạt động của độc giả, từ mượn sách đến trả sách.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="https://eurorack.vn/vnt_upload/news/04_2023/thiet-ke-ke-thu-vien.jpg" alt="Quản lý kho" className="w-full h-64 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">Quản lý kho</h3>
                                <p className="text-gray-700 text-base">Chúng tôi cung cấp giải pháp quản lý kho sách hiệu quả, giúp dễ dàng kiểm kê và tổ chức các tài liệu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Về chúng tôi</h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                Thư viện ABC là nơi cung cấp các dịch vụ quản lý thư viện chất lượng cao. Chúng tôi cung cấp các công cụ để quản lý sách, độc giả, và kho tài liệu một cách hiệu quả. Cam kết của chúng tôi là đem lại trải nghiệm tốt nhất cho khách hàng thông qua dịch vụ chất lượng, giá cả hợp lý và hỗ trợ tận tình.
                            </p>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="Về chúng tôi" className="rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20" id="contactUs">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Liên hệ chúng tôi</h2>
                        <p className="text-lg text-gray-600 mb-8">Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, xin vui lòng liên hệ với chúng tôi qua các thông tin dưới đây.</p>
                        <div className="text-left">
                            <p className="text-lg text-gray-800 mb-4"><strong>Email:</strong> abc@library.com</p>
                            <p className="text-lg text-gray-800 mb-4"><strong>Số điện thoại:</strong> +123 456 789</p>
                            <p className="text-lg text-gray-800"><strong>Địa chỉ:</strong> 123 Đường ABC, Thành phố XYZ</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );

};

