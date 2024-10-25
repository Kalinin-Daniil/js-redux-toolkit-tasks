import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";
// BEGIN (write your solution here)
const initialState = {};
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TASK_ADD': {
            const { task } = action.payload;
            return {
                ...state,
                [task.id]: task,
            };
        }
        case 'TASK_REMOVE': {
            const { id } = action.payload;
            return omit(state, id);
        }
        default:
            return state;
    };
}
export default function createTaskStore(initialState) {
    return createStore(taskReducer, initialState);
}
// END
