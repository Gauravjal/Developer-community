import axios from "axios";
export const setGlobalAlert = (data) => {
  return {
    type: "SET_GLOBAL_ALERT",
    payload: data,
  };
};