import { useMutation } from "react-query";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
  const { dispatch } = useAuthContext();

  async function loginUser(email, password) {
    console.log(`${process.env.REACT_APP_API_ENDPOINT}`)
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/cash-manager/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    }

    return response.json();
  }
  return useMutation(( {email, password }) => loginUser(email, password));
}
