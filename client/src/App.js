import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Menu from "./components/Menu";
import AddBook from "./pages/add-book";
import UpdateBook from "./pages/update-book";

const routeList = [
  { path: "/", component: <Home /> },
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <Signup /> },
  { path: "/add-book", component: <AddBook /> },
  { path: "/update-book", component: <UpdateBook /> },
];

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        {routeList.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
