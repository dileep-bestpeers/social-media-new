import { createStore } from "redux";
import rootreducer from "../reducers/index";



function saveToLocalStorage(data) {
    let dataFromForm = data;
    let localStorageDATA = JSON.parse(localStorage.getItem("SOCIAL"));
    if (localStorageDATA) {
      console.log("inside local working directory");
      localStorageDATA.push(dataFromForm);
      console.log(localStorageDATA);
      localStorage.setItem("SOCIAL", JSON.stringify(localStorageDATA));
    } else {
      localStorage.setItem("SOCIAL", JSON.stringify([dataFromForm]));
    }
  }
  
  function loadFromLocalStorage() {
    try {
      const localStorageDATA = JSON.parse(localStorage.getItem("SOCIAL"))
      // console.log(localStorageDATA);
      return localStorageDATA;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
  
  const store = createStore(
    rootreducer,
   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  store.subscribe(() => saveToLocalStorage(store.getState()));

  export default store;
  