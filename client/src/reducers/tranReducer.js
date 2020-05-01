import { LOADING, GET__SINGLE_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTION, ADD_TRANSACTION, ADD_FAIL } from '../actions/types';
const initialState = {
    transactions: [],
    singleTransaction: [],
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TRANSACTION: return { ...state, transactions: action.payload, loading: false }

        case ADD_TRANSACTION: return { ...state, transactions: [action.payload, ...state.transactions], loading: false };

        case ADD_FAIL: return { ...state, loading: false }

        case LOADING: return {
            ...state,
            loading: true
        };
        case DELETE_TRANSACTION: return {
            ...state, agentlistings: state.transactions.filter(tran => tran._id !== action.payload)
        }
        case GET__SINGLE_TRANSACTION: return {
            ...state,
            singleTransaction: action.payload,
            loading: false
        };
        default:
            return state;
    }

} 