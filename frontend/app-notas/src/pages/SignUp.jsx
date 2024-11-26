import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helpers";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Por vavor ingresa tu nombre");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por vavor ingresa un email valido");
      return;
    }
    if (!password) {
      setError("Por favor ingresa la constraseña");
      return;
    }

    setError("");
  };
  return (
    <>
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Registrate</h4>

            <input
              type="text"
              placeholder="Nombre"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1 ">{error}</p>}

            <button type="submit" className="btn-primary">
              Registrarse
            </button>
            <p className="text-sm text-center mt-4">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Inicia sesion
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
