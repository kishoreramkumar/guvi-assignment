import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect } from "react";
import setAuthToken from "actions/action.utils";
import Login from "Pages/Login";
import Register from "Pages/Register";
import Profile from "Pages/Profile";
import { useStoreContext } from "components/StoreContext";
import Notifications from "components/Notifications";
function App() {
  useEffect(() => {
    if (localStorage.guviToken) {
      const token = localStorage.guviToken;
      setAuthToken(token);
    }
  }, []);

  const { notificationList } = useStoreContext();

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
              element={
                localStorage.guviToken ? (
                  <Navigate to="/profile" />
                ) : (
                  <Register />
                )
              }
            ></Route>
            <Route
              path="/"
              element={
                localStorage.guviToken ? <Navigate to="/profile" /> : <Login />
              }
            ></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </>
        </Routes>
        {notificationList && !!notificationList.length && (
          <Notifications notificationList={notificationList} />
        )}
      </div>
    </Router>
  );
}

export default App;
