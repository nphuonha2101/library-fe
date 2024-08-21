import React, {useState, useMemo} from 'react';
import {useTable, usePagination} from 'react-table';
import Papa from 'papaparse';

interface Column {
    Header: string;
    accessor: string;
    render?: (value: any) => React.ReactNode;
}

interface DataTableProps {
    columns: Column[];
    data: any[];
    onEdit: (row: any) => void;
    onDelete: (row: any) => void;
}

export const DataTable: React.FC<DataTableProps> = ({columns, data, onEdit, onDelete}) => {
    const [search, setSearch] = useState('');
    const [pageSize, setPageSize] = useState(10);
    const [pageIndex, setPageIndex] = useState(0);

    const filteredData = useMemo(() => {
        return data.filter(row =>
            columns.some(column =>
                row[column.accessor].toString().toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [data, columns, search]);

    const paginatedData = useMemo(() => {
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        return filteredData.slice(start, end);
    }, [filteredData, pageIndex, pageSize]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data: paginatedData}, usePagination);

    const exportToCSV = () => {
        const csvData = data.map(row => {
            const rowData: { [key: string]: any } = {};
            columns.forEach(column => {
                rowData[column.Header] = row[column.accessor];
            });
            return rowData;
        });
        const csv = Papa.unparse(csvData);
        const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="flex justify-between py-8">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm kiếm..."
                    className="inline-block w-60 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
                <button onClick={exportToCSV}
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Xuất
                    CSV
                </button>
            </div>

            <div className="w-full overflow-x-auto">
                <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                    >
                                        {columns.find(col => col.accessor === cell.column.id)?.render
                                            ? columns.find(col => col.accessor === cell.column.id)?.render!(cell.value)
                                            : cell.render('Cell')}
                                    </td>
                                ))}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                                            onClick={() => onEdit(row.original)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Sửa
                                    </button>

                                    <button onClick={() => onDelete(row.original)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Xoá
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>

            <div className="mt-12 flex justify-center items-center space-x-6 mx-auto">
                <button
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => setPageIndex(0)} disabled={pageIndex === 0}>Trang đầu
                </button>

                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 0}>Trang trước
                </button>

                <span>Trang {pageIndex + 1} trên tổng số {Math.ceil(filteredData.length / pageSize)}</span>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => setPageIndex(pageIndex + 1)}
                    disabled={pageIndex >= Math.ceil(filteredData.length / pageSize) - 1}>Trang tiếp
                </button>

                <button
                    className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => setPageIndex(Math.ceil(filteredData.length / pageSize) - 1)}
                    disabled={pageIndex >= Math.ceil(filteredData.length / pageSize) - 1}>Trang cuối
                </button>
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                    {[10, 20, 30, 40, 50].map(size => (
                        <option key={size} value={size}>
                            {size} bản ghi/trang
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};