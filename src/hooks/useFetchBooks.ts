import { useEffect, useState } from "react";
import { IBookItem } from "../interfaces/IBookItem.ts";

export const useFetchBooks = (url: string) => {
    const [books, setBooks] = useState<IBookItem[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBooks(data || []);
                setCategories(data.categories || []);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { books, categories, error, loading };
};