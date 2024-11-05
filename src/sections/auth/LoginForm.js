import React, { useReducer, useState } from "react";

function LoginForm() {
  const logInReducer = (state, action) => {
    switch (action.type) {
      case "field": {
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      }
      case "toggleButton": {
        return { ...state, showPassword: !state.showPassword };
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
    showPassword: false,
  });

  /*   const [showPassword, setShowPassword] = useState(falseß);
  const visibileIcon = () => {
    setShowPassword(true);
  }; */
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
          <div className="bg-white w-2/5 max-md:w-3/4 rounded-xl py-8 space-y-8 ">
            <h1 className="w-full text-center text-3xl text-[#040404] ">
              Log In
            </h1>
            <form
              className="flex flex-col justify-center w-full  items-center gap-6  "
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
              <div className="relative w-5/6  flex flex-col gap-2 items-end">
                <input
                  className="border-2 w-full py-1 px-2 outline-none rounded-full pr-10"
                  type={state.showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      fieldName: "password",
                      payload: e.target.value,
                    })
                  }
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => {
                    dispatch({ type: "toggleButton" });
                  }}
                >
                  {state.showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#aeaeae]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-[#aeaeae]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <button className="bg-button-gradient w-5/6 p-2 text-white text-lg font-medium rounded-full">
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
