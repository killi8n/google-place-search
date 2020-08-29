import fetch from "./defaultClient";
import { WithKey } from "../types/WithKey";
import { Status } from "../types/Status";

interface AutoCompletePayload extends WithKey {
  input: string;
}

export interface AutoCompleteResponse {
  predictions: Prediction[];
  status: Status;
}

export interface PlaceDetailResponse {
  result: PlaceDetailResult;
  status: Status;
}

export interface Prediction {
  description: string;
  matched_substrings: MatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[];
  types: string;
}

export interface MatchedSubstring {
  length: number;
  offset: number;
}

export interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: MatchedSubstring[];
  secondary_text: string;
}

export interface Term {
  offset: number;
  value: string;
}

export interface GeoMetry {
  location: LatLng;
  viewport: {
    northeast: LatLng;
    southwest: LatLng;
  };
}

export interface OpeningHourPeriod {
  close: {
    day: number;
    time: string;
  };
  open: {
    day: number;
    time: string;
  };
}

export interface OpeningHours {
  open_now: boolean;
  periods: OpeningHourPeriod[];
}

export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface Review {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface PlaceDetailResult {
  address_components: AddressComponent[];
  adr_address: string;
  business_status: string;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: GeoMetry;
  icon: string;
  international_phone_number: string;
  name: string;
  opening_hours: OpeningHours;
  weekday_text: string[];
  photos: Photo[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  reviews: Review[];
  scope: string;
  types: string[];
  url: string;
  user_ratings_total: number;
  utc_offset: number;
  vicinity: string;
  website: string;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface LatLng {
  lat: number;
  lng: number;
}

export const autoComplete = async ({
  input,
  key,
}: AutoCompletePayload): Promise<AutoCompleteResponse> => {
  const result = await fetch({
    method: "GET",
    path: "/autocomplete/json",
    query: {
      input,
      key,
    },
  });
  return await result.json();
};

export const placeDetail = async ({
  place_id,
  key,
}: {
  place_id: string;
  key: string;
}): Promise<PlaceDetailResponse> => {
  const result = await fetch({
    method: "GET",
    path: "/details/json",
    query: {
      place_id,
      key,
    },
  });
  return await result.json();
};

export const placePhoto = async ({
  maxWidth,
  photoReference,
  key,
}: {
  maxWidth: number;
  photoReference: string;
  key: string;
}) => {
  const result = await fetch({
    method: "GET",
    path: "/photo",
    query: {
      maxwidth: maxWidth,
      photoreference: photoReference,
      key,
    },
  });
  return await result.blob();
};
