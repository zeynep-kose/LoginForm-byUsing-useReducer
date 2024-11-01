import React, { useReducer, useState } from "react";

function LoginForm() {
  /*   const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(""); */

  const logInReducer = (state, action) => {
    switch (action.type) {
      case "field": {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case "login": {
        return {
          ...state,
          error: "",
        };
      }
      case "success": {
        return {
          ...state,
          loggedIn: true,
          password: "",
        };
      }
      case "error": {
        return {
          ...state,
          error: "Incorrect Password or Username",
          password: "",
          userName: "",
        };
      }
      case "logOut": {
        return {
          ...state,
          loggedIn: false,
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(logInReducer, {
    userName: "",
    password: "",
    loggedIn: false,
    error: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "logIn" });
    try {
      if (state.userName === "Zeynep" && state.password === "12345zk.") {
        dispatch({ type: "success" });
      } else {
        throw state.error;
      }
    } catch (error) {
      dispatch({ type: "error" });
      /*  setError("Incorrect Password or Username");
      setUserName("");
      setPassword(""); */
    }
  };
  return (
    <div className=" w-full h-full  ">
      <div className=" h-full w-full flex items-center justify-center">
        {state.loggedIn ? (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center text-3xl mt-4">
              Welcome {state.userName}!
            </h2>
            <button
              onClick={() => dispatch({ type: "logOut" })}
              className="bg-button-gradient w-22 p-2 text-white text-lg font-medium rounded-lg"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="bg-white w-2/5 rounded-xl h-3/5  items-center">
            <form
              className="flex flex-col justify-center h-full  items-center gap-8  "
              onSubmit={handleSubmit}
            >
              <input
                className="border-2 w-5/6 py-1 px-2  outline-none rounded-full"
                type="text"
                value={state.userName}
                placeholder="Username"
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "userName",
                    payload: e.target.value,
                  })
                }
              ></input>
              <input
                className="border-2 w-5/6 py-1 px-2 outline-none rounded-full"
                type="text"
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    fieldName: "password",
                    payload: e.target.value,
                  })
                }
              ></input>
              <button className="bg-button-gradient w-5/6 p-2 text-white text-lg font-medium rounded-full">
                {" "}
                Log In
              </button>
              <p className="text-purple-500 text-center">{state.error}</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
