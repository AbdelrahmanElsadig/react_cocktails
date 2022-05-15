import React, { useEffect } from 'react'

const useFetch = async (url: string, setData: (data: { drinks: drink[] }) => void,
    setLoading: (loading: boolean) => void) => {
    useEffect(() => setLoading(true), [url]);
    useEffect(() => {
        (async () => {
            const req = await fetch(url);
            const res = await req.json();
            setLoading(false)
            setData(res);

        })()
    }, [url])

}

export default useFetch
