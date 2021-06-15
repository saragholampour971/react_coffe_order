


export const whoslogin_reducer = (state = {}, action) => {
    switch (action.type) {
        case "who_is_login":
            return action.payload;
        case "Exit":
            return  state={};
        default:
            return state;
    }
}