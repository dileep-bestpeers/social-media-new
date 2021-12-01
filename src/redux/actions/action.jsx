import { actionTypes } from "../constants/actionTypes";

export const signIn = (data)  => {
  return {
    type: actionTypes.USERSIGNIN,
    payload: data, 
  };
}


export const logIn = (response)  => {
  console.log("payload",response)
  let localStorageDATA = JSON.parse(window.localStorage.getItem("SOCIAL"))
  localStorageDATA = localStorageDATA.map((item) => {
    
   if ( (item.user.signIn.email === response.email) && (item.user.signIn.password === response.password)){
     console.log("loged in")
    return {
      type: actionTypes.USERLOGIN,
      payload: {login:true,cradectial:response}, 
    };
   }
  
  } )
 
  
}

export const  loadFromLocalStorage=()=> {
  try {
   
    // console.log("hhhhhhhhhhhh",localStorageDATA);
    // return localStorageDATA;
  } catch (e) {
    console.log(e);
    // return undefined;
  }
}

