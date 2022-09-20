import { useHistory } from "react-router-dom";
import { useState } from "react";
import { AuthCard } from "../../components";
import { Input, Button } from "../../../../components";
import { useAuth } from "../../../../contexts";

export function LogIn() {
  const history = useHistory();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogIn = async () => {
    if (password === "") return setError("Password is invalid");
    if (email === "") return setError("Email is invalid");

    setLoading(true);
    setError("");

    try {
      await login({ email, password });
      history.push("/");
    } catch (error) {}
  };

  return (
    <AuthCard title="Log In" link="/signup" linkTitle="Sign Up" error={error}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" onClick={handleLogIn} disabled={loading}>
        Log In
      </Button>
    </AuthCard>
  );
}