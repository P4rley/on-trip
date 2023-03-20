import axios from "axios";
import { Dispatch } from "react";
import { IRegisterForm } from "../../components/RegisterForm";
import { State } from "../reducers";

export const register = (payload: IRegisterForm) => {
  return async (dispatch: any, getState: any) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/users/register",
        {
          data: payload,
        }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
