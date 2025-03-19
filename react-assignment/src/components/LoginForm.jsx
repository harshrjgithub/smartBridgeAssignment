import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 w-80 border border-gray-300 rounded-lg shadow-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder="Password"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
