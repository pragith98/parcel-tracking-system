import { useState } from "react";
import { FormStyles } from "../styles";
import Button from "../components/Button";
import type { LoginCredentials } from "../types/user.type";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { login } from "../store/auth.slice";

function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formDataValidate = (): boolean => {
    if (!username.trim()) {
      alert("Username is required.");
      return false;
    }
    if (!password.trim()) {
      alert("Password is required.");
      return false;
    }

    return true;
  };

  const onClickSubmit = () => {
    if (!formDataValidate()) return;

    const credentials: LoginCredentials = {
      username,
      password,
    };

    dispatch(login(credentials));
  };

  return (
    <div className="flex flex-col mt-30">
      <div className="flex flex-1 items-center justify-center ">
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
          <div className="px-6 py-4">
            <h3 className="mt-3 text-xl font-medium text-center text-gray-600">
              PARCEL TRACKER
            </h3>

            <p className="mt-1 text-center text-gray-500">
              Login to your account
            </p>

            <form>
              <div className="w-full mt-4">
                <input
                  className={FormStyles.formField}
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="w-full mt-4">
                <input
                  className={FormStyles.formField}
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <Button variant="primary" onClick={onClickSubmit}>
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
