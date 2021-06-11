const countries=(state = [],action)=>{
    switch (action.type) {
        case "GET_COUNTRIES":
            return action.payload
        case "GET_BY_REGION":
            return action.payload
        case "GET_BY_NAME":
            return action.payload
        default:
            return state
    }
}
export default countries