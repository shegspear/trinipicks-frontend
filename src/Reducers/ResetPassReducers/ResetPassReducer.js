import {
    USER_RECOVERY_EMAIL_REQUEST,
    USER_RECOVERY_EMAIL_SUCCESS,
    USER_RECOVERY_EMAIL_FAIL
} from '../../Constants/ResetPassConst/ResetPassConst';

export const sendRecoveryEmailReducer = (
    state = {},
    action,
) => {
    switch(action.type) {
        case USER_RECOVERY_EMAIL_REQUEST:
            return { loading: true};
        case USER_RECOVERY_EMAIL_SUCCESS:
            return {loading: false, emailRes: action.payload };
        case USER_RECOVERY_EMAIL_FAIL:
            return {loading: false, error: action.payload };
        default:
            return state;
    };
};