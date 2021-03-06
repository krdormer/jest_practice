import { SAVE_COMMENT } from 'actions/types';

export default function commentsReducer(state = [], action) {
    switch(action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload]
        default:
            return state;
    }
}