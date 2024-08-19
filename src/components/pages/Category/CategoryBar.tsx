
import './Category.scss';
import {CategoryBarButton} from "./CategoryBarButton.tsx";
import {useEffect, useState} from "react";
import {DiYii} from "react-icons/di";

import {FaBookOpen} from "react-icons/fa";
import {Link} from "react-router-dom";

export const CategoryBar = () => {
    const [categories, setCategories] = useState<[]>([]);


    // fetch categories
    useEffect(() => {
        fetch("https://localhost:7259/api/v1/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }, []);

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
                                                   label={category.name}
                                                   icon=<FaBookOpen/>
                                                   onClick={() => <Link to={"/books/category/" + category.id} }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}