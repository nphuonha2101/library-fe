import React from 'react';

export const About = () => {
    return (
        <div className="absolute w-full left-0">


            <section className="bg-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Chào Mừng Đến Với Hệ Thống Quản Lý Thư Viện
                        Của Chúng Tôi</h1>
                    <p className="text-lg text-gray-700 mb-10">Sứ mệnh của chúng tôi là tạo điều kiện thuận lợi cho việc
                        quản lý tài nguyên thư viện một cách dễ dàng và hiệu quả cho cả thủ thư và thành viên. Khám phá
                        nhiều tính năng giúp điều này trở nên khả thi.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Những Gì Chúng Tôi Cung Cấp</h2>
                    <div className="flex justify-around flex-wrap">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 mx-4 mb-8 text-left">
                            <i className="fas fa-book text-blue-600 text-4xl mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tìm Kiếm Sách Toàn Diện</h3>
                            <p className="text-gray-600">Nhanh chóng tìm kiếm các cuốn sách bạn cần với khả năng tìm kiếm nâng cao của chúng tôi. Lọc theo tác giả, thể loại, ngày xuất bản và nhiều tiêu chí khác.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 mx-4 mb-8 text-left">
                            <i className="fas fa-handshake text-blue-600 text-4xl mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hệ Thống Mượn Sách Thân Thiện</h3>
                            <p className="text-gray-600">Dễ dàng quản lý các khoản mượn và trả sách với hệ thống mượn sách trực quan của chúng tôi. Theo dõi ngày đáo hạn và gia hạn sách chỉ với vài cú nhấp chuột.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/3 mx-4 mb-8 text-left">
                            <i className="fas fa-chart-bar text-blue-600 text-4xl mb-4"></i>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Báo Cáo & Phân Tích Chi Tiết</h3>
                            <p className="text-gray-600">Tạo báo cáo chi tiết về sự lưu thông sách, hoạt động của người dùng và trạng thái tồn kho. Luôn được cập nhật với các phân tích mới nhất.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Gặp Gỡ Đội Ngũ Phát Triển Hệ Thống</h2>
                    <div className="flex justify-around flex-wrap">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/4 mx-4 mb-8">
                            <img src="https://placehold.co/200x200" alt="Alex Johnson" className="w-full h-auto rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Nguyễn Phương Nhã</h3>
                            <p className="text-gray-600">Quản Lý Dự Án</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/4 mx-4 mb-8">
                            <img src="https://placehold.co/200x200" alt="Sophia Lee" className="w-full h-auto rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Đoàn Quốc Đăng</h3>
                            <p className="text-gray-600">Trưởng Nhóm Phát Triển</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/4 mx-4 mb-8">
                            <img src="https://placehold.co/200x200" alt="Michael Brown" className="w-full h-auto rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Lại Thị Bích Phượng</h3>
                            <p className="text-gray-600">Thiết Kế UI/UX</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-1/4 mx-4 mb-8">
                            <img src="https://placehold.co/200x200" alt="Emma Davis" className="w-full h-auto rounded-full mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Nguyễn Đức Phúc</h3>
                            <p className="text-gray-600">Đảm Bảo Chất Lượng</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

