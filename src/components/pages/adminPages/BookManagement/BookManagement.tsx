import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { IBookItem } from '../../../../interfaces/IBookItem';
import { DataTable } from '../../../paritials/DataTable/DataTable.tsx';
import { Modal } from "flowbite-react";
import { ICategory } from "../../../../interfaces/ICategory.ts";
import { IAuthor } from "../../../../interfaces/IAuthor.ts";
import { getAntiForgeryToken, getStoredToken } from '../../../../services/csrfTokenService.ts';
import { useTitle } from '../../../../hooks/useTitle.ts';
// import { CustomElement } from "../../../../interfaces/CustomElement.ts";
import { TinyMCEEditor } from '../../../paritials/TinyMCEEditor/TinyMceEditor.tsx';
import { getString } from '../../../../utils/localStorageUtil.ts';
import { toast } from 'react-toastify';

export const BookManagement: React.FC = () => {
    const [data, setData] = useState<IBookItem[]>([]);
    const [selectedRow, setSelectedRow] = useState<IBookItem | null>(null);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [authors, setAuthors] = useState<IAuthor[]>([]);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // const [value, setValue] = useState<CustomElement[]>([]);
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [editorContent, setEditorContent] = useState("");

    useTitle("Quản lý sách");

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
            });
    }, []);

    useEffect(() => {
        fetch("https://localhost:7259/api/v1/authors")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setAuthors(data))
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    useEffect(() => {
        fetch("https://localhost:7259/api/v1/books")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    const handleEditorChange = useCallback((content: string) => {
        setEditorContent(content);
    }, []);


    const addBook = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = document.getElementById("addBookForm") as HTMLFormElement;
        const formData = new FormData(form);
        if (selectedFile) {
            formData.append('file-upload', selectedFile);
        }

        formData.append("description", editorContent);

        const token = getStoredToken() || await getAntiForgeryToken();

        fetch(`https://localhost:7259/api/v1/books`, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': token,
                'Authorization': `Bearer ${getString('token')}`,
            },
            credentials: "include",
        }).then((response) => {

            if (!response.ok) {
                toast.error('Có lỗi xảy ra khi thêm sách');
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
            .then((data) => {
                console.log('Add book:', data);
                setAddModalOpen(false);
                setData((prevData) => [...prevData, data]);
                toast.success('Thêm sách thành công')
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });

    };



    const handleEdit = (row: IBookItem) => {
        setSelectedRow(row);
        setEditModalOpen(true);
    };

    const handleDelete = (row: IBookItem) => {
        setSelectedRow(row);
        setDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        const token = getStoredToken() || await getAntiForgeryToken();
        fetch(`https://localhost:7259/api/v1/books/${selectedRow?.id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': token.toString(),
                'Authorization': `Bearer ${getString('token')}`,
            },
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Delete book:', data);
                setData((prevData) => prevData.filter(book => book.id !== data.id));
                setDeleteModalOpen(false);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    // const handleEditorSave = (content: CustomElement[]) => {
    //     setValue(content);
    // };

    // const onSave = (content: CustomElement[]) => {
    //     console.log('Content saved:', content);
    // };

    const editBook = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = document.getElementById("editBookForm") as HTMLFormElement;
        const formData = new FormData(form);
        if (selectedFile) {
            formData.append('file-upload', selectedFile);
        }
        formData.append("description", editorContent);

        const token = getStoredToken() || await getAntiForgeryToken();

        fetch(`https://localhost:7259/api/v1/books/${selectedRow?.id}`, {
            method: 'PUT',
            headers: {
                'X-CSRF-TOKEN': token,
                'Authorization': `Bearer ${getString('token')}`,
            },
            credentials: 'include',
            body: formData
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Edit book:', data);
                setEditModalOpen(false);
                setData((prevData) => prevData.map(book => book.id === data.id ? data : book));
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    };

    const columns = useMemo(() => [
        { Header: 'Id', accessor: 'id' },
        { Header: 'Tiêu đề', accessor: 'title' },
        { Header: 'Isbn', accessor: 'isbn' },
        { Header: 'Mô tả', accessor: 'description' },
        { Header: 'Ngày nhập', accessor: 'importedDate' },
        { Header: 'Số lượng', accessor: 'quantity' },
        {
            Header: 'Ảnh', accessor: 'bookImage', render: (value: string) => {
                return <img src={value} alt="Book" className="w-16 h-16" />;
            }
        },
        {
            Header: 'Thể loại', accessor: 'categories', render: (value: [{ name: string; description: string }]) => {
                return value.map((cat) => cat.name).join(', ');
            }
        },
        {
            Header: 'Tác giả', accessor: 'authors', render: (value: [{ name: string; description: string }]) => {
                return value.map((author) => author.name).join(', ');
            }
        }
    ], []);

    return (
        <div>
            <h1 className="text-2xl font-extrabold">Quản lý sách</h1>
            <div className="w-full p-4">
                <button
                    onClick={() => setAddModalOpen(true)}
                    className="translate-y-20 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Thêm sách
                </button>

                <DataTable columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete}
                    onSave={() => setAddModalOpen(true)}
                />

            </div>

            <Modal className="p-7" onClose={() => setEditModalOpen(false)} show={editModalOpen}>
                <Modal.Header>{selectedRow?.title}</Modal.Header>
                <Modal.Body className='max-h-[70vh] overflow-y-auto'>
                    <div className='w-full overflow-y-auto'>
                        <form id="editBookForm" className="w-full" onSubmit={editBook}>
                            <div className="grid gap-2 mb-3 grid-cols-1 md:grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="title"
                                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                        Tên sách
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={selectedRow?.title || ''}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Nhập tên sách"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="quantity"
                                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                        Số lượng
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        id="quantity"
                                        value={selectedRow?.quantity || 0}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="1"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="isbn"
                                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                        ISBN
                                    </label>
                                    <input
                                        type="text"
                                        name="isbn"
                                        id="isbn"
                                        value={selectedRow?.isbn || ''}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Nhập ISBN"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="category"
                                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                        Thể loại
                                    </label>
                                    <select
                                        id="category"
                                        name="categoryIds"
                                        multiple
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        {categories && categories.map((category) => {
                                            if (selectedRow?.categories?.find(cat => cat.id === category.id))
                                                return <option key={category.id} value={category.id}
                                                    selected>{category.name}</option>
                                            else
                                                return <option key={category.id}
                                                    value={category.id}>{category.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="authors"
                                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                        Tác giả
                                    </label>
                                    <select
                                        id="authors"
                                        name="authorIds"
                                        multiple
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        {
                                            authors && authors.map((author) => {
                                                if (selectedRow?.authors?.find(auth => auth.id === author.id))
                                                    return <option key={author.id} value={author.id}
                                                        selected>{author.fullName}</option>
                                                else
                                                    return <option key={author.id} value={author.id}>{author.fullName}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description"
                                        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                        Mô tả
                                    </label>
                                    <TinyMCEEditor initialValue={selectedRow?.description ?? ''} onEditorChange={handleEditorChange} />
                                </div>

                                <div className="flex items-center justify-center w-full col-span-2">
                                    <label htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Chọn để tải lên</span> hoặc kéo thả file vào đây
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">JPG, JPEG, PNG, WEBP</p>
                                        </div>
                                        <input id="dropzone-file" type="file" name="file-upload"
                                            accept="image/png, image/jpg, image/jpeg, image/webp" className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>

                                <div className="col-span-2 mt-2">
                                    {selectedFile && (
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Selected File
                                                đã chọn :</h3>
                                            <p>{selectedFile.name}</p>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <button type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Sửa
                            </button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal className="p-7 modal-overlay" onClose={() => setDeleteModalOpen(false)} show={deleteModalOpen}>
                <Modal.Header className="text-lg font-semibold text-gray-900">Xác nhận xóa</Modal.Header>
                <Modal.Body className="text-sm text-gray-700">
                    <p>Bạn có chắc chắn muốn xóa sách này không?</p>
                </Modal.Body>
                <Modal.Footer className="flex justify-end space-x-2">
                    <button onClick={() => setDeleteModalOpen(false)}
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-4 py-2">
                        Hủy
                    </button>
                    <button onClick={confirmDelete}
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm font-medium px-4 py-2">
                        Xóa
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal className="modal-overlay p-7" onClose={() => setAddModalOpen(false)} show={addModalOpen}>
                <Modal.Header>Thêm sách mới</Modal.Header>
                <Modal.Body className="max-h-[70vh] overflow-y-auto">
                    <form id="addBookForm" className="w-full" onSubmit={addBook}>
                        <div className="grid gap-2 mb-3 grid-cols-1 md:grid-cols-2">
                            <div className="col-span-2">
                                <label htmlFor="title"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Tên sách
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Nhập tên sách"
                                />
                            </div>
                            <div>
                                <label htmlFor="quantity"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Số lượng
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="1"
                                />
                            </div>
                            <div>
                                <label htmlFor="isbn"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    ISBN
                                </label>
                                <input
                                    type="text"
                                    name="isbn"
                                    id="isbn"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Nhập ISBN"
                                />
                            </div>
                            <div>
                                <label htmlFor="category"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Thể loại
                                </label>
                                <select
                                    id="category"
                                    name="categoryIds"
                                    multiple
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    {categories && categories.map((category) => {
                                        return <option key={category.id}
                                            value={category.id}>{category.name}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="authors"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Tác giả
                                </label>
                                <select
                                    id="authors"
                                    name="authorIds"
                                    multiple
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    {
                                        authors && authors.map((author) => {
                                            return <option key={author.id} value={author.id}>{author.fullName}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description"
                                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Mô tả
                                </label>
                                <TinyMCEEditor initialValue={''}
                                    onEditorChange={handleEditorChange} />
                            </div>

                            <div className="flex items-center justify-center w-full col-span-2">
                                <label htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            className="font-semibold">Chọn để tải lên</span> hoặc kéo thả file vào đây
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">JPG, JPEG, PNG, WEBP</p>
                                    </div>
                                    <input id="dropzone-file" type="file" name="file-upload"
                                        accept="image/png, image/jpg, image/jpeg, image/webp" className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>

                        </div>
                        <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Thêm sách mới
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};