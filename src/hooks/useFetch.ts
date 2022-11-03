import { useState, useEffect } from "react";
import axios from "axios";
import sleep from "../functions/sleep";

function useFetch(url: string, timeout: number = 0) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then(async (response) => {
                await sleep(timeout);
                setData(response.data);
                // LOG DATA TO CONSOLE
                console.log(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url, timeout]);

    const refetch = () => {
        setLoading(true);
        axios
            .get(url)
            .then()
            .then(async (response) => {
                await sleep(timeout);
                setData(response.data);
                // LOG DATA TO CONSOLE
                console.log(response.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}

export default useFetch;
