
// import { createStore } from "redux";
// import rootReducer from "../reducer";

// let initialState = {};

// const store = createStore(rootReducer, initialState);
// export default store;




import { createStore } from "redux";
import rootReducer from "../reducer";

const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);

let initialState = {
 // preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().preferences;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;