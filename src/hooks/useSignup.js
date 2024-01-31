import { useMutation } from "react-query";
import { useAuthContext } from "./useAuthContext";

export default function useSignup() {
  const { dispatch } = useAuthContext();

  async function signupUser(email, password) {
    const response = await fetch(
      `${process.env.API_ENDPOINT}/cash-manager/signup`,
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
  return useMutation(({ email, password }) => signupUser(email, password));
}
