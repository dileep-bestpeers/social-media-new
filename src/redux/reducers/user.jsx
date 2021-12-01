import { actionTypes } from "../constants/actionTypes";

// const initialState = JSON.parse(localStorage.getItem("SOCIAL"))
// if ( !initialState)  initialState = {}

const initialState = {
};

const userreducer = (state = initialState, action) => {
  const userDATA = action.payload;

  switch (action.type) {
    case actionTypes.USERSIGNIN:
      return { ...state, signIn: userDATA };
    default:
      return state;
  }
};

export default userreducer

// export const LoginReducer = (state = initialState, action) => {
//   const userDATA = action.payload;

//   switch (action.type) {
//     case actionTypes.USERLOGIN:
//       return { ...state, signIn: userDATA };
//     default:
//       return state;
//   }
// };

