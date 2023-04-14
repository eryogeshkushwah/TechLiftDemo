export const addSignUpDetails = (value) => {
  return {
    type: "AddSignUpDetails",
    payload: value,
  };
};

export const addLoginDetails = (value) => {
  return {
    type: "AddLoginDetails",
    payload: value,
  };
};

export const setSignUpState = (value) => {
  return {
    type: "SetSignUpState",
    payload: value,
  };
};

export const setLoginState = (value) => {
  return {
    type: "SetLoginState",
    payload: value,
  };
};

export const updatePassword = (value) => {
  return {
    type: "UpdatePassword",
    payload: value,
  };
};
export const updateUserInfo = (value) => {
  return {
    type: "UpdateUserInfo",
    payload: value,
  };
};
