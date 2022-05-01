import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ children, isAuthenticated, ...rest }: any) {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          rest.element
        ) : (
          <Navigate
            to={{
              pathname: "/",
            }}
          />
        )
      }
    ></Route>
  );
}

function PublicRoute({ children, ...rest }: any) {
  return <Route {...rest}></Route>;
}

function AppRoute({ isPrivateRoute, ...rest }: any) {
  return isPrivateRoute ? (
    <PrivateRoute {...rest} />
  ) : (
    <PublicRoute {...rest} />
  );
}

export default AppRoute;
