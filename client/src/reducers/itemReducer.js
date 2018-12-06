import {GET_ITEMS, NEW_SEARCH, ITEMS_LOADING, WEBSITE_NAME, HANDLE_CHANGE, SORT_TABLE} from '../actions/types';

const initialState = {
    items: [],
    itemsOrg: [],
    loading: false,
    inputSearch: '',
    website: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: state.items,
                loading: false,
                inputSearch: state.inputSearch,
                website: state.website
            };
        case NEW_SEARCH:
            return {
                ...state,
                items: action.payload,
                itemsOrg: action.payload,
                loading: false
            };
        case ITEMS_LOADING:
            return {
                ...state,
                items: [],
                loading: true,
            };
        case WEBSITE_NAME:
            return {
                ...state,
                website: action.payload,
            };
        case HANDLE_CHANGE:
            state.items = state.itemsOrg;
            state[action.payload.target.name] = action.payload.target.value;
            return {
                ...state,
                items:  [...state.items].filter(item => item["domain"].includes(state.inputSearch)),
            };
        case SORT_TABLE:
            return {
                ...state,
                items:  [...state.items].sort(action.payload),
                loading: false
            };
        default:
            return state;
    }
}