import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <LoginForm />}
    </div>
  );
}

export default App;

