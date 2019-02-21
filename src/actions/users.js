export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success'
};

export const getUserRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

export const getUserSuccess = ({items}) => ({
    type: Types.GET_USERS_REQUEST,
    payload: {
        items
    }
});