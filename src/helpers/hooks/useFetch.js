import { useEffect } from "react";
import { useState } from "react"

export const useFetch = (fetchFunc, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await fetchFunc(params);
                setData(response);
            }
            catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [fetchFunc, stringParams]);

    return { data, isLoading, error }
}