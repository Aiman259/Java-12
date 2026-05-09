import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '15px', 
      background: '#2c3e50', 
      display: 'flex', 
      gap: '20px', 
      justifyContent: 'center' 
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/instructors" style={{ color: 'white', textDecoration: 'none' }}>Instructors</Link>
      <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
    </nav>
  );
}