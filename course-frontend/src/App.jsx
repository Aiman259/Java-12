import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import InstructorListPage from './pages/InstructorListPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/ProtectedRoute';

// --- Halaman Dashboard ---
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="card-body p-5 text-center">
          <div className="mb-4">
            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold">
              Session Active
            </span>
          </div>
          <h2 className="fw-bold mb-3">Welcome to your Dashboard</h2>
          <p className="text-muted mb-4 px-md-5">
            You have successfully authenticated. You now have full access to the 
            instructor management systems, administrative tools, and secure resources.
          </p>
          <button onClick={handleLogout} className="btn btn-danger px-4 fw-bold">
            Logout from Session
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Halaman Detail (Exercise 4) ---
const InstructorDetailPage = () => (
  <div className="container mt-5 text-center">
    <div className="card p-5 border-0 shadow-sm">
      <h3>Instructor Profile Details</h3>
      <p className="text-muted">Loading specialized certification and module data...</p>
      <Link to="/" className="btn btn-outline-secondary btn-sm mt-3">Back to List</Link>
    </div>
  </div>
);

// --- Komponen Utama App ---
function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        {/* NAVBAR YANG DAH DIBETULKAN */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo Sebelah Kiri */}
            <Link className="navbar-brand fw-bold fs-4" to="/">
              IMS<span className="text-primary">.</span>
            </Link>

            {/* Menu Sebelah Kanan (Sentiasa Sebaris) */}
            <div className="d-flex align-items-center">
              <Link className="nav-link text-white px-3 small" to="/">Instructors</Link>
              <Link className="nav-link text-white px-3 small" to="/dashboard">Dashboard</Link>
              <Link 
                className="btn btn-primary btn-sm text-white ms-3 px-4 fw-bold rounded-pill" 
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="py-5">
          <Routes>
            <Route path="/" element={<InstructorListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/instructors/:id" element={<InstructorDetailPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;