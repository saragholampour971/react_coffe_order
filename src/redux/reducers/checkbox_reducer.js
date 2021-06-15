
export const Checkbox_Reducer = (state = false, action) => {
    
    switch (action.type) {
        case "Check_Box":
            return !state;
        default:
            return state;
        }
  
}


