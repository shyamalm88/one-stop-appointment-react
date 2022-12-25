import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileDataReducer from "../reducers/ProfileData.Reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combineStore = combineReducers({
  profileData: profileDataReducer,
});

const store = createStore(
  combineStore,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
