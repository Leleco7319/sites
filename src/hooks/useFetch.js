import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8080/api/${url}`, {
                    method: 'GET',
                    credentials: 'include',
                });
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setLoading(false);
                if(url.includes('contents')){
                    setData(json.layout);
                }
                else {
                    setData(json)
                }
                setError(null);
            } catch (error) {
                setError(`${error} Could not Fetch Data `);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
};

export default useFetch