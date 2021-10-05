import { SET_AUTHED_USER } from "./action-types";

export function setAuthedUser(id) {
  localStorage.setItem("loggedInUser", id);
  return {
    type: SET_AUTHED_USER,
    id
  };
}