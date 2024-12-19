export const BASE_URL = 'http://127.0.0.1:8000/api';

const URLS = {
    BASE_URL,
    v1 : {
        AUTH_LOGIN : `${BASE_URL}/v1/login`,
        AUTH_LOGOUT : `${BASE_URL}/v1/logout`,
        AUTH_USER : `${BASE_URL}/v1/user`,
        USER_REGISTER : `${BASE_URL}/v1/register`,
        TASK_LIST : `${BASE_URL}/v1/tasks`,
        TASK_CREATE : `${BASE_URL}/v1/tasks/create`,
        TASK_UPDATE : `${BASE_URL}/v1/tasks/update`,
        TASK_DELETE : `${BASE_URL}/v1/tasks/delete`,
    },
};

export default URLS;