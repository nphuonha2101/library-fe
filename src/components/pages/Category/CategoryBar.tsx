import './Category.scss';
import { CategoryBarButton } from "./CategoryBarButton.tsx";
import { useEffect, useState } from "react";
import { DiYii } from "react-icons/di";
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../../interfaces/ICategory.ts";

export const CategoryBar = ({containerTitle}: {
    containerTitle: string;
}) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // fetch categories
    useEffect(() => {
        fetch("https://localhost:7259/api/v1/categories")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setCategories(data))
            .catch((error) => {
                console.error('Fetch error:', error);
                setError('Failed to fetch categories');
            });
    }, []);

    const handleCategoryClick = (categoryId: number) => {
        navigate(`/books/category/${categoryId}`);
    };

    return (
        <div>
            <div className="text-3xl font-bold mb-0 capitalize ">
                <h2 className="flex items-center space-x-2">
                    <DiYii className="text-blue-600" />
                    <span className="text-sky-950">{containerTitle} </span>
                    <DiYii className="text-blue-600" />
                </h2>n
            </div>
            <div className="flex text-center w-full">
                <div className="overflow-hidden flex-grow">
                    <div className="flex flex-nowrap overflow-x-auto scroll-smooth category-bar">
                        <div className="flex space-x-6 justify-center my-20">
                            {error ? (
                                <div>{error}</div>
                            ) : (
                                categories.map((category, index) => (
                                    <CategoryBarButton
                                        key={index}
                                        name={category.name}
                                        icon={<FaBookOpen />}
                                        onClick={() => handleCategoryClick(category.id!)}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};