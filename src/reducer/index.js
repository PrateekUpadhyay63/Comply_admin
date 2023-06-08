import { combineReducers } from "redux";
// import { userDataReducer } from "../screen/login/reducer";
// import { signUpDataReducer } from "../screen/signup/reducer";
// import { toggleSideNavReducer } from "../components/sideNavigation/reducer";
import {
  CountriesReducer,
  LanguagesReducer,
  getAllPagesReducer,
  ParentDropDownReducer,
  createPageReducer,
  getAllContentReducer,
  pageDataByIdReducer
} from "../Redux/Reducers/reducer";
const RootReducer = combineReducers({
  LanguagesReducer,
  CountriesReducer,
  getAllPagesReducer,
  ParentDropDownReducer,
  createPageReducer,
  getAllContentReducer,
  pageDataByIdReducer,
});
export default RootReducer;
