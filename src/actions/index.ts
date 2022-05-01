import axios from "axios";
import { asyncLocalStorage } from "utils";
import setAuthToken, { BaseApi } from "./action.utils";

export const loginUser = async (userData: any) => {
  try {
    const res: any = await BaseApi().post("user_auth/login", userData);

    const { token } = res?.data || {};
    if (res.data.success && token) {
      setAuthToken(token);
      const tokenSetRes = await asyncLocalStorage.setItem(
        "guviToken",
        JSON.stringify(token)
      );
      return res;
    }
    return res;
  } catch (e) {
    return e;
  }
};

export const registerUser = async (userData: any) => {
  try {
    const res: any = await BaseApi().post("user_auth/register", userData);

    if (res?.data && res.data?._id) {
      return res;
    } else return res;
  } catch (e) {
    return e;
  }
};

export const fetchUserDetail = async () => {
  try {
    const res: any = await BaseApi().get("user/getDetails");

    if (res?.data && res.data?._id) {
      return res;
    }
    return res;
  } catch (e) {
    return e;
  }
};

export const setUserDetails = async (userDetails: any) => {
  try {
    const res: any = await BaseApi().post("user/updateProfile", userDetails);

    if (res?.data && res.data?._id) {
      return res;
    }
    return res;
  } catch (e) {
    return e;
  }
};
