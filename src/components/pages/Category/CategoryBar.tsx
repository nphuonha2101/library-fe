import {HiOutlineBookOpen} from "react-icons/hi";
import {AiOutlineBook} from "react-icons/ai";
import {FaBook, FaBookDead} from "react-icons/fa";
import './Category.scss';
import {CategoryBarButton} from "./CategoryBarButton.tsx";
import {useState} from "react";
import {CategoryList} from "./CategoryList.tsx";
import {DiYii} from "react-icons/di";

export const CategoryBar = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);4
    
    const categories = [
        {icon: <HiOutlineBookOpen/>, label: 'Self Help'},
        {icon: <AiOutlineBook/>, label: 'Tiểu thuyết'},
        {icon: <AiOutlineBook/>, label: 'Trinh thám'},
        {icon: <AiOutlineBook/>, label: 'Hài kịch'},
        {icon: <FaBook/>, label: 'Truyện ngắn'},
        {icon: <FaBook/>, label: 'Hoạt hình'},
        {icon: <FaBookDead/>, label: 'Khoa học viễn tưởng'},
    ];
    return (
        <div>
            <div className="text-3xl font-bold mb-0 capitalize ">
                <h2 className="flex items-center space-x-2">
                    <DiYii className="text-orange-600"/>
                    <span className="text-sky-950">Lựa chọn thể loại sách sách</span>
                    <DiYii className="text-orange-600"/>
                </h2>
            </div>
            <div className="flex text-center w-full">
                <div className="overflow-hidden flex-grow">
                    <div className="flex flex-nowrap overflow-x-auto scroll-smooth category-bar">
                        <div className="flex space-x-6 justify-center my-20">
                            {categories.map((category, index) => (
                                <CategoryBarButton key={index}
                                                   icon={category.icon}
                                                   label={category.label}
                                                   onClick={() => setSelectedCategory(category.label)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {selectedCategory && <CategoryList category={selectedCategory}/>}
            </div>
        </div>
    )
}