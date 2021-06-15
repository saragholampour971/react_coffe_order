
export const HandleAccount_Reducer = (state = [], action) => {
    switch (action.type) {
        case "Add_Account":
            return [...action.payload];
        case "Login_Account":
            return [...action.payload];
        case "Edit_Bills":
            return [...action.payload];
        default:
            return state;
    }
}
