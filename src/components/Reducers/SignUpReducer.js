const localState = JSON.parse(localStorage.getItem("register"));
const initial = localState !== null ? localState : [];

export const AddSignUp = (State = initial, action) => {
  switch (action.type) {
    case "AddSignUpDetails": {
      localStorage.setItem(
        "register",
        JSON.stringify([...State, action.payload])
      );
      return [...State, action.payload];
    }

    case "UpdatePassword": {
      console.log("action", action.payload);
      const state = State.map((user) => {
        if (user.email !== action.payload.email) {
          return user;
        }

        return {
          ...user,
          password: action.payload.password,
        };
      });
      localStorage.setItem("register", JSON.stringify(state));
      console.log(state);
      return state;
    }

    case "UpdateUserInfo": {
      console.log("action", action.payload);
      const state = State.map((user) => {
        if (user.email !== action.payload.oldEmail) {
          return user;
        }

        return {
          ...user,
          email: action.payload.newEmail,
          mobile: action.payload.mobile,
        };
      });
      localStorage.setItem("register", JSON.stringify(state));
      console.log(state);
      return state;
    }

    default:
      return State;
  }
};
