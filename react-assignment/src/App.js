import React from "react";
import TextUpdater from "./components/TextUpdater";
import FormSubmit from "./components/FormSubmit";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">React.js Assignment</h1>
      <TextUpdater />
      <FormSubmit />
      <UserCard name="John Doe" email="john.doe@example.com" />
      <Button />
      <LoginForm />
    </div>
  );
}

export default App;
