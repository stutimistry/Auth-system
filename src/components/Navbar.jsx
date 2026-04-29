import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ padding: "10px", background: "#eee" }}>
      <span>Welcome, {user?.username}</span>

      <button
        onClick={() => dispatch(logout())}
        style={{ marginLeft: "20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;