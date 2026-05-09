import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Jika token tak ada, tendang user balik ke /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika ada token, bagi dia masuk ke page yang dia nak
  return children;
};

export default ProtectedRoute;