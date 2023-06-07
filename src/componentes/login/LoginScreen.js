import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../hooks/UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  let message1 = '';


  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredMessage, setMessage] = useState('');

  const navigate = useNavigate();
  const doLogin = (e) => {
    e.preventDefault();
    let dataM;

    fetch("/usuarios/autenticar/" + enteredUsername + "/" + enteredPassword)
      .then((res) => res.json())
      .then((data) => {
        dataM = data.mensaje;
        if (data.mensaje === 'Autenticación exitosa') {

          setEnteredUsername(data.username);
          console.log(data.username)

        } else {
          alert("Datos incorrectos, intente de nuevo");

        }

        // Fetch to get the username by email
        fetch("/usuarios/" + enteredUsername)
          .then((res) => res.json())
          .then((userData) => {
            const fetchedUsername = userData.username;
            console.log("Fetched Username:", fetchedUsername);
            // Use the fetched username here as needed
            //navigate("/", { state: { username: fetchedUsername } });
            setUser( {id:123, name: fetchedUsername,});
            navigate("/");
          });
      });
  };

    return (
        <>
            <h1>Login</h1>
            <br />

            <div>
                <form onSubmit={doLogin}>
                    <input
                        type = "text"
                        className="form-control"
                        name = "enteredUser"
                        placeholder="Enter your username"
                        onChange={(event) =>
                            setEnteredUsername(event.target.value)}
                    />
                    <input
                        type = "password"
                        className="form-control"
                        name = "enteredPassword"
                        placeholder="Password"
                        onChange={(event) =>
                            setEnteredPassword(event.target.value)}
                    />
                    <button type = "submit"
                            className="btn m-1 btn-block btn-outline-primary"
                    >Login
                    </button>
                </form>

            </div>

        </>
    )
};


