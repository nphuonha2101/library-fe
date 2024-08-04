import {useEffect, useState} from "react";

export const useFetchBooks = (url: string) => {
    const [books, setBooks] =useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =await fetch(url);
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [url])
    return {books, error};
}