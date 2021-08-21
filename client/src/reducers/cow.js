import {
    GET_COWS,
    COW_ERROR,
    DELETE_COW,
    ADD_COW,
    GET_COW,
    ADD_COMMENT,
    REMOVE_COMMENT
} from '../actions/types';

const initialState = {
    cows: [],
    cow: null,
    loading: true,
    error: {}
};

function cowReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_COWS:
            return {
                ...state,
                cows: payload,
                loading: false
            };
        case GET_COW:
            return {
                ...state,
                cow: payload,
                loading: false
            };
        case ADD_COW:
            return {
                ...state,
                cows: [payload, ...state.cows],
                loading: false
            };
        case DELETE_COW:
            return {
                ...state,
                cows: state.cows.filter((cow) => cow._id !== payload),
                loading: false
            };
        case COW_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case ADD_COMMENT:
            return {
                ...state,
                cow: { ...state.cow, comments: payload },
                loading: false
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                cow: {
                    ...state.cow,
                    comments: state.cow.comments.filter(
                        (comment) => comment._id !== payload
                    )
                },
                loading: false
            };
        default:
            return state;
    }
}

export default cowReducer;