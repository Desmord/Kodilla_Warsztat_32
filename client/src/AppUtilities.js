export const API_URL = process.env.NODE_ENV === `production`
    ? `/`
    : `http://localhost:8000/`


export const GET_ADS_URL = `${API_URL}api/ads`;
export const GET_USERS_URL = `${API_URL}auth/user`;

export const REGISTER_USER_URL = `${API_URL}auth/register`;
export const LOGIN_USER_URL = `${API_URL}auth/login`;





export const GET_SEARCHED_ADS = `${API_URL}api/ads/search/`;

export const GET_ADD_BY_ID = `${API_URL}api/`

export const PATHS = {
    HOME: `/`,
    SEARCH_ROUTE: `/search/:searchPhrase`,
    SEARCH: `/search/`,
    SINGLE_AD_ROUTE: `/ads/:id`,
    SINGLE_AD: `/ads/`,
    ADD_AD: `/ads/add`,
    LOGIN: `/login`,
    REGISTER: `/register`,
}