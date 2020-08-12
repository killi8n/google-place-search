// import fetch, { Response } from 'node-fetch'
import fetch from './defaultClient'
import { WithKey } from '../types/WithKey'
import { Status } from '../types/Status'
import { URI_PREFIX } from './constants'

interface AutoCompletePayload extends WithKey {
    input: string
}

export interface AutoCompleteResponse {
    predictions: Prediction[]
    status: Status
}

export interface Prediction {
    description: string
    matched_substrings: MatchedSubstring[]
    place_id: string
    reference: string
    structured_formatting: StructuredFormatting
    terms: Term[]
    types: string
}

export interface MatchedSubstring {
    length: number
    offset: number
}

export interface StructuredFormatting {
    main_text: string
    main_text_matched_substrings: MatchedSubstring[]
    secondary_text: string
}

export interface Term {
    offset: number
    value: string
}

export const autoComplete = async ({
    input,
    key,
}: AutoCompletePayload): Promise<AutoCompleteResponse> => {
    const result = await fetch({
        method: 'GET',
        query: {
            input,
            key,
        },
    })
    return await result.json()
}
