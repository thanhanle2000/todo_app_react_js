import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../src/core/styles/css/App.scss';
import logo from './logo.svg';
import Home from './page/Home/Home';
import MyComponent from './page/Home/Widget/MyCpn';
import Nav from './core/Nav/Nav';
import ListTodo from './page/Todos/ListTodo';
import DetailUser from './page/User/DetailUser';
import ListUser from './page/User/ListUser';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  // KHAI BÁO PAGE
  const PAGE = [
    { id: 1, element: <Home />, path: "/" },
    { id: 2, element: <ListTodo />, path: "/todo" },
    { id: 3, element: <MyComponent />, path: "/about" },
    { id: 4, element: <ListUser />, path: "/user" },
    { id: 5, element: <DetailUser />, path: "/user/:id" },
  ]
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            {PAGE?.map((item) => <Route key={item?.id} path={item?.path} element={item?.element} />)}
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
