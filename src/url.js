const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

//AUTH URL
export const GET_AUTH_TOKEN_URL = `${BASE_URL}/auth/auth_token`;
export const REGISTER_URL = `${BASE_URL}/auth/register`;
export const LOGIN_URL = `${BASE_URL}/auth/login`;
export const UPDATE_USER_URL = `${BASE_URL}/auth`;

//NOTES URL

export const GET_USER_NOTES_URL = `${BASE_URL}/notes`;
export const CREATE_NOTE_URL = `${BASE_URL}/notes`;
export const UPDATE_NOTE_URL = `${BASE_URL}/notes`;

export const DELETE_NOTE_URL = `${BASE_URL}/notes`;

//IMAGE

export const UPLOAD_USER_IMAGE = `${BASE_URL}/supabase/upload`;

//PASSPORT

export const GET_GOOGLE_AUTH = `${BASE_URL}/passport/auth/google`;
export const SUCCESS_GOOGLE_AUTH = `${BASE_URL}/passport/auth/google/login/success`;
export const FAILURE_GOOGLE_AUTH = `${BASE_URL}/passport/auth/google/login/fail`;
