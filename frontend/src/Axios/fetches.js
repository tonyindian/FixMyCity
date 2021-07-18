import Axios from "./index";


/* export const fetchIssues = async () => {
  const url = "issues/";
  const response = await Axios.get(url);
  return response.data;
}; */

export const fetchProfileInfo = async (user="") => {
  
  let url;
  
  if(user){
    url = `users/${user}/`
  }else{
    url = "me/"
  } 

  try{
    const response = await Axios.get(url);
    if (response.status === 200) {      
      return response.data;      
    }
  }catch (err) {
    if (err) {
      console.log(err.response);      
    }
  }
}


export const patchProfileInfo = async (formdata) => {
  
  const url = "me/"

  const config = {
    headers: {            
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const resp = await Axios.patch(url, formdata, config);
    if (resp.status === 200) {
      console.log("Success. Profile information has been updated.");      
    }
  } catch (err) {
    if (err) {
      console.log(err.response);      
    }
  }
};


export const createIssue = async (formdata) => {
  const url = "/issues/new/"; 

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const resp = await Axios.post(url, formdata, config);
    return resp;
  } 
    
  export const fetchIssues = async (user="") => {
  
    let url;
    
    if(user){
      url = `/issues/user/${user}/`
    }else{
      url = "/issues/"
    } 
  
    try{
      const response = await Axios.get(url);
      if (response.status === 200) {      
        return response.data;

      }
    }catch (err) {
      if (err) {
        console.log(err.response);      
      }
    }
  }
