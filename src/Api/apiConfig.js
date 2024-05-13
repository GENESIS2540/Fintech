// const BASE_URL = 'https://radically-happy-giraffe.ngrok-free.app'; // Replace with your actual API base URL
// const BASE_URL = 'https://cow-desired-visually.ngrok-free.app';
const BASE_URL = 'http://127.0.0.1:8000';

export const CREATE_ADMIN = `${BASE_URL}/api/admin/`;
export const CREATE_VENDOR = `${BASE_URL}/api/vendor/`;
export const CREATE_CUSTOMER = `${BASE_URL}/api/customer/`;

export const UPDATE_ADMIN = `${BASE_URL}/api/admin/`;
export const UPDATE_VENDOR = `${BASE_URL}/api/vendor/`;
export const UPDATE_CUSTOMER = `${BASE_URL}/api/customer/`;

export const LOGIN_URL = `${BASE_URL}/rest-auth/login/`;
export const GET_USER_ID = `${BASE_URL}/rest-auth/user/`;
export const GET_USER_PROFILE = `${BASE_URL}/api/user/`;
export const SIGNUP_URL = `${BASE_URL}/api/customer/`;

export const CHANGE_PASSWORD_URL = `${BASE_URL}/rest-auth/password/change/`;
export const CHANGE_EMAIL_URL = `${BASE_URL}/api/user/`;


export {BASE_URL } ; // Exporting the base URL
