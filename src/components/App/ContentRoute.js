import React from "react";
import { Switch, Route } from "react-router-dom";
import { Result, Button } from "antd";

const routes = [
  {
    key: "home",
    path: "/",
    exact: true,
    component: () => <Home />
  },
  {
    key: "profile",
    path: "/profile",
    component: () => <Profile />
  },
  {
    key: "setting",
    path: "/setting",
    component: () => <Setting />
  }
];

const ContentRoute = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route component={ErrorPage} />
    </Switch>
  );
};

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Home Detail</p>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <p>Profile Detail</p>
  </div>
);

const Setting = () => (
  <div>
    <h1>Setting</h1>
    <p>Setting Detail</p>
  </div>
);

const ErrorPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default ContentRoute;
