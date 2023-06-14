import apiClient from "../services/api-client";
import {DependencyList, useEffect, useState} from "react";

export function useGeneric<T>(path: string, deps?: DependencyList){
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        apiClient.get(path)
            .then(res => {
                setData(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                console.error(err)
                setIsLoading(false)
            })
    },deps ?? [])

    return {data, error, isLoading, setIsLoading}
}