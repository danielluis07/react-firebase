import { useContext, useState } from "react";
import "./signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/"); // Redirect to home or dashboard
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="confirmar senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error && <span>{error === true ? "Error signing up!" : error}</span>}
      </form>
    </div>
  );
};

export default SignUp;
