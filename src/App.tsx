import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import setAuthToken from "actions/action.utils";
import Login from "Pages/Login";
import Register from "Pages/Register";
import Profile from "Pages/Profile";
import AppRoute from "routing";
function App() {
  const [isAuth, setAuthDetails] = useState(false);
  useEffect(() => {
    if (localStorage.guviToken) {
      const token = JSON.parse(localStorage.guviToken);
      setAuthToken(token);

      if (token) {
        setAuthDetails(true);
      } else {
        setAuthDetails(false);
      }
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <>
            <Route
              path="/profile"
              // isPrivateRoute={true}
              // isAuthenticated={localStorage.guviToken}
              element={
                localStorage.guviToken ? <Profile /> : <Navigate to="/" />
              }
            ></Route>
            <Route
              path="/register"
              element={localStorage.guviToken ? <Navigate to="/profile"/>  : <Register />}
            ></Route>
            <Route
              path="/"
              element={localStorage.guviToken ? <Navigate to="/profile" />: <Login />}
            ></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
