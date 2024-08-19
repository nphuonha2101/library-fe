import{IBookItem} from "../../../interfaces/IBookItem.ts";
import React, { useState } from 'react';
export const Cart = () => {
    const [cartItems, setCartItems] = useState<IBookItem[]>([
        {
            id: 1,
            title: 'Những ngôi sao trên cao',
            isbn: '123456789',
            description: 'Một câu chuyện đầy cảm xúc và nhân văn.',
            importedDate: '2023-07-15',
            quantity: 2,
            bookImage: 'https://plus.unsplash.com/premium_photo-1721314157041-4d7a484822fa?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            authors: [{ fullName: 'Nguyễn Nhật Ánh', dob: '1955-06-04', description: 'Nhà văn Việt Nam nổi tiếng.' }],
            categories: [{ id: 1, name: 'Văn học', description: 'Sách văn học và tiểu thuyết.' }]
        },
        {
            id: 2,
            title: 'Mắt biếc',
            isbn: '987654321',
            description: 'Một câu chuyện tình yêu đầy lãng mạn và bi thương.',
            importedDate: '2023-08-01',
            quantity: 1,
            bookImage: 'https://plus.unsplash.com/premium_photo-1681312567123-c4a72f9f2ef1?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            authors: [{ fullName: 'Nguyễn Nhật Ánh', dob: '1955-06-04', description: 'Nhà văn Việt Nam nổi tiếng.' }],
            categories: [{ id: 2, name: 'Tiểu thuyết', description: 'Tiểu thuyết tình cảm.' }]
        }
    ]);

    const handleQuantityChange = (id: number, quantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };
    return (

        <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl bg-white p-5 rounded-lg shadow-lg">
                <table className="w-full border-collapse">
                    <thead>
                    <tr>
                        <th className="border-b-2 p-3 text-left bg-gray-200">Delete</th>
                        <th className="border-b-2 p-3 text-left bg-gray-200">Image</th>
                        <th className="border-b-2 p-3 text-left bg-gray-200">Book Name</th>
                        <th className="border-b-2 p-3 text-left bg-gray-200">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <button
                                    className="bg-gray-200 p-2 rounded"
                                    onClick={() => handleRemove(item.id as number)}
                                >
                                    X
                                </button>
                            </td>
                            <td>
                                <img src={item.bookImage} alt={item.title} className="w-12 h-12"/>
                            </td>
                            <td>{item.title}</td>
                            <td className="flex items-center">
                                <button
                                    className="bg-gray-200 p-2 rounded"
                                    onClick={() => handleQuantityChange(item.id as number, -1)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    className="bg-gray-200 p-2 rounded"
                                    onClick={() => handleQuantityChange(item.id as number, 1)}
                                >
                                    +
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="mt-5">
                    <button className="bg-blue-500 text-white px-5 py-2 mt-2 rounded">Checkout</button>
                </div>
            </div>
        </div>
    )
}
