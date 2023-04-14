import { combineReducers } from "redux";
import { AddSignUp } from "./SignUpReducer";
import { AddLogin } from "./LoginReducer ";

const rootReducer = combineReducers({
  SignUp: AddSignUp,
  Login: AddLogin,
});

export default rootReducer;
