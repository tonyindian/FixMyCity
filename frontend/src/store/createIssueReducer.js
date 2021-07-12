const initialState = {
    title: "yet another issue",   
    longitude: 0,
    latitude: 0,
    image : "",
    content: "",  
    city: "Testcity",
    zip: 0,     
}

const createIssueReducer = (state,action) => {
    if(state===undefined){
        return initialState;
    }
    else if(action.type==="setIssuePicture"){
        const newState = {...state};
        newState.image = action.payload
        //console.log("I'm your new state",newState)
        return newState
    }
    else if(action.type==="setDescription"){
        const newState = {...state};
        newState.content = action.payload
        //console.log("I'm your new state",newState)
        return newState
    }
    return state;
}


export default createIssueReducer;