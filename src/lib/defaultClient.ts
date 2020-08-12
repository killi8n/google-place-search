import fetch from 'node-fetch'
import { URI_PREFIX } from './constants'

const makeObjectToQueryString = <T>(queryObject: T) => {
    return Object.keys(queryObject).reduce((queryString, queryKey, index) => {
        const queryValue = queryObject[queryKey as keyof T]
        if (index === 0) {
            return `?${queryKey}=${queryValue}`
        }
        return `${queryString}&${queryKey}=${queryValue}`
    }, '')
}

const defaultClient = ({
    method,
    path = '',
    query,
}: {
    method: string | undefined
    path?: string
    query: object
}) => {
    const queryString = makeObjectToQueryString(query)
    return fetch(`${URI_PREFIX}${path}${queryString}`, { method })
}

export default defaultClient
