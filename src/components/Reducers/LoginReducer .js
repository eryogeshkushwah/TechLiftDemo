const localState = JSON.parse(localStorage.getItem("login"));
const initial = localState !== null ? localState : {};

export const AddLogin = (State = initial, action) => {
  switch (action.type) {
    case "AddLoginDetails": {
      localStorage.setItem("login", JSON.stringify(action.payload));
      return action.payload;
    }

    case "SetLoginState": {
      const state = action.payload;
      console.log("loginSet", state);
      localStorage.setItem("login", JSON.stringify(state));
      return state;
    }

    default:
      return State;
  }
};
