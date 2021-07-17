const initialState = {
    info:{
        userName:"",
        dateJoined:"",
        points:"",
        level:"",
        issuesReported:"",
        issuesUpvoted:"",
        email:"",
        firstName:"",
        lastName:""
    }
}


const profileInfoReducer = (state,action) => {
    if(state===undefined){
        return initialState;
    }
    else if(action.type==="updateProfileInfo"){
        const newState = {...state};
        newState.info = action.payload;
        console.log("I'm your new state: ",newState.info)
        return newState
    }
    return state;
}

export default profileInfoReducer;