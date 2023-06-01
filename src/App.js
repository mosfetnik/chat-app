
import './App.css';
import Register from './Pages/registration';
import Login from './Pages/login';
import Home from './Pages/homePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)


  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          {/* for protecting the route */}
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />

          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
