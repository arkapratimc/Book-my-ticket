import { NavLink, Outlet, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { useRef, useState } from "react";
import {
  LOGIN_FIELD_NAMES,
  AUTH_STATES,
  CREATE_USER_FIELD_NAMES,
} from "../../utils/constants.js";
import { loginErrorMessages } from "../../utils/types.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Tick } from "../Tick.js";

// 1. user not logged in ??????? show -> "Please sign in to book" button in navbar ??? clicking it'll show the login form ????

// 2. after logging in ?? show - "Hi {user}," & "check your bookings" route link in the modal window ?????????

// 3. if user is logged in ? show "about {user}" in the button .

const Login = ({
  handleLogFunc,
  errorState,
  authMessage,
}: {
  handleLogFunc: (ev: any) => undefined;
  errorState: loginErrorMessages;
  authMessage: string;
}) => {
  return (
    <>
    <div style={{
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
    }}>Login form</div>
      <form onSubmit={(event) => handleLogFunc(event)}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Username
          <input
            type="text"
            placeholder="Username"
            name={LOGIN_FIELD_NAMES.username}
          />
        </label>

        {errorState.username && (
          <p style={{ color: "red" }}>Please write a valid username</p>
        )}

        <label style={{ display: "block", marginBottom: "5px" }}>
          Password
          <input
            type="password"
            placeholder="Password"
            name={LOGIN_FIELD_NAMES.password}
          />
        </label>

        {errorState.password && (
          <p style={{ color: "red" }}>Please write a valid password</p>
        )}

        <button type="submit">Log in</button>
      </form>
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  let queryClient = useQueryClient();
  const a__dialog = useRef(null);
  const b__dialog = useRef(null);

  let [authMessage, setAuthMessage] = useState<string>(AUTH_STATES.nothing);

  let [errorState, setErrorState] = useState<loginErrorMessages>({
    username: false,
    password: false,
  });

  let [createAccErrorState, setCreateAccErrorState] =
    useState<loginErrorMessages>({
      username: false,
      password: false,
    });

  let ifUsernameIsEmpty = (
    text: string,
    clonedStateObject: loginErrorMessages
  ) => {
    if (text === "") {
      clonedStateObject.username = true;
      setErrorState(clonedStateObject);
      return;
    }
    clonedStateObject.username = false;
    setErrorState(clonedStateObject);
  };

  let ifPasswordIsEmpty = (
    text: string,
    clonedStateObject: loginErrorMessages
  ) => {
    if (text === "") {
      clonedStateObject.password = true;
      setErrorState(clonedStateObject);
      return;
    }
    clonedStateObject.password = false;
    setErrorState(clonedStateObject);
  };

  const { mutate: joey, isError } = useMutation({
    mutationFn: (body: any) =>
      fetch("/try-login", { method: "POST", body: JSON.stringify(body) }).then(
        (res) => {
          if (!res.ok) {
            throw new Error("Failed authentication");
          }

          return res.text();
        }
      ),

    onSuccess(data, variables, context) {
      setAuthMessage(AUTH_STATES.successful);

      queryClient.invalidateQueries({
        queryKey: ["get username"],
      });

      queryClient.invalidateQueries({
        queryKey: ["decider of booking seats"],
      });
    },

    onError(err, variables, context) {
      setAuthMessage(AUTH_STATES.failed);
      queryClient.invalidateQueries({
        queryKey: ["get username"],
      });
    },
  });

  const { mutate: createy } = useMutation({
    mutationFn: (body: any) =>
      fetch("/create-user", {
        method: "POST",
        body: JSON.stringify(body),
      }).then((res) => res.text()),

    onSuccess(data, variables, context) {
      // lets do it later ....
      if (data === "username already exists") {
        alert("Username already exists");
      } else if (data === "user created") {
        alert("User created, please login now to book tickets!");
      }
    },
  });

  const handle_login = (event): undefined => {
    event.preventDefault();
    let data = new FormData(event.target);
    if (
      (data.get(LOGIN_FIELD_NAMES.username) as string).trim() === "" ||
      (data.get(LOGIN_FIELD_NAMES.password) as string).trim() === ""
    ) {
      // handle error ........

      let foosh = structuredClone(errorState);
      ifUsernameIsEmpty(
        (data.get(LOGIN_FIELD_NAMES.username) as string).trim(),
        foosh
      );
      ifPasswordIsEmpty(
        (data.get(LOGIN_FIELD_NAMES.password) as string).trim(),
        foosh
      );
      return;
    }

    // if it reaches here ---> fields arent empty it means;

    // react will update the state after the event handler finishes its execution - source - https://github.com/reactwg/react-18/discussions/46#discussioncomment-846862
    let buzz = structuredClone(errorState);
    buzz.username = false;
    buzz.password = false;
    setErrorState(buzz);

    const object_to_send = {};
    data.forEach((value, key) => (object_to_send[key] = value));

    // bye
    joey(object_to_send);
  };

  let IfCreateUsernameEmpty = (
    text: string,
    clonedStateObject: loginErrorMessages
  ) => {
    if (text === "") {
      clonedStateObject.username = true;
      setCreateAccErrorState(clonedStateObject);
      return;
    }
    clonedStateObject.username = false;
    setCreateAccErrorState(clonedStateObject);
  };

  let IfCreatePasswordEmpty = (
    text: string,
    clonedStateObject: loginErrorMessages
  ) => {
    if (text === "") {
      clonedStateObject.password = true;
      setCreateAccErrorState(clonedStateObject);
      return;
    }
    clonedStateObject.password = false;
    setCreateAccErrorState(clonedStateObject);
  };

  const handle_user_creation = (event): undefined => {
    event.preventDefault();
    let data = new FormData(event.target);
    if (
      (data.get(CREATE_USER_FIELD_NAMES.username) as string).trim() === "" ||
      (data.get(CREATE_USER_FIELD_NAMES.password) as string).trim() === ""
    ) {
      let foosh = structuredClone(errorState);
      IfCreateUsernameEmpty(
        (data.get(CREATE_USER_FIELD_NAMES.username) as string).trim(),
        foosh
      );

      IfCreatePasswordEmpty(
        (data.get(CREATE_USER_FIELD_NAMES.password) as string).trim(),
        foosh
      );

      return;
    }

    // if it reaches here ---> fields arent empty it means;

    // react will update the state after the event handler finishes its execution - source - https://github.com/reactwg/react-18/discussions/46#discussioncomment-846862
    let buzz = structuredClone(errorState);
    buzz.username = false;
    buzz.password = false;
    setCreateAccErrorState(buzz);

    const object_to_send = {};
    data.forEach((value, key) => (object_to_send[key] = value));

    console.log("CREATE ACCOUNT ======> ", object_to_send);
    createy(object_to_send);
  };
  let {
    data: username_from_server,
    isSuccess: usrname_from_server_success,
    isError: unlogged,
  } = useQuery({
    queryKey: ["get username"],
    queryFn: () =>
      fetch("/login-access").then((res) => {
        if (!res.ok) {
          throw new Error("cant");
        }
        return res.text();
      }),
    retry: false,
  });

  let { mutate: log_user_out } = useMutation({
    mutationFn: () => fetch("/logout").then((res) => res.text()),
    onSuccess(data, variables, context) {
      if (data === "Logged out!") {
        queryClient.invalidateQueries({
          queryKey: ["Seats"],
        });

        queryClient.invalidateQueries({
          queryKey: ["get username"],
        });

        queryClient.invalidateQueries({
          queryKey: ["decider of booking seats"],
        });
      }
    },
  });

  return (
    <>
      <nav className={style.navy}>
        <NavLink to="/">
        
        <h1>Book My Ticket</h1>
        </NavLink>
        <button
          onClick={() => {
            a__dialog.current.showModal();
          }}
        >
          {/* hmm ?? */}
          {unlogged && "Please sign in to book"}
          {usrname_from_server_success && `Hi ${username_from_server}`}
        </button>

        <button onClick={() => b__dialog.current.showModal()}>
          Create an account
        </button>
      </nav>
      <hr />

      <dialog ref={a__dialog}>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <button
            onClick={() => {
              a__dialog.current.close();
            }}
          >
                  <svg viewBox="0 0 10 10" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" y1="1" x2="9" y2="9" />
  <line x1="9" y1="1" x2="1" y2="9" />
</svg>
          </button>
        </div>
        {unlogged && (
          <Login
            handleLogFunc={handle_login}
            errorState={errorState}
            authMessage={authMessage}
          />
        )}

        {authMessage === AUTH_STATES.failed && (
          <p style={{ color: "red" }}>Failed authentication</p>
        )}

        {usrname_from_server_success && (
          <>
            <p>
              {username_from_server} successfully logged in <Tick />
            </p>
            <p>
              <div
              style={{
                textDecoration: "underline",
                textDecorationColor: "blue",
                color: "blue",
                cursor: "pointer"
              }}
              onClick={() => {
                navigate(username_from_server);
                a__dialog.current.close();

              }}>Your bookings</div>
            </p>
          </>
        )}

        {usrname_from_server_success && (
          <>
            <button
              onClick={() => {
                log_user_out();
              }}
            >
              Logout
            </button>
          </>
        )}
      </dialog>

      <dialog ref={b__dialog}>
        <div
          style={{
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div></div>
          <button onClick={() => b__dialog.current.close()}>
            <svg viewBox="0 0 10 10" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" y1="1" x2="9" y2="9" />
  <line x1="9" y1="1" x2="1" y2="9" />
</svg>



          </button>
        </div>
        <form onSubmit={(event) => handle_user_creation(event)}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Username
            <input
              type="text"
              name={CREATE_USER_FIELD_NAMES.username}
              placeholder="Username"
            />
          </label>
          {createAccErrorState.username && (
            <p style={{ color: "red" }}>Please write a valid username</p>
          )}
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password
            <input
              type="password"
              name={CREATE_USER_FIELD_NAMES.password}
              placeholder="Password"
            />
          </label>
          {createAccErrorState.password && (
            <p style={{ color: "red" }}>Please write a valid password</p>
          )}
          <button type="submit">Submit</button>
        </form>
      </dialog>

      <main id="detail">
        <Outlet />
      </main>
    </>
  );
};

export { Navbar };
