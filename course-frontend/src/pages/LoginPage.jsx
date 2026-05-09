import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authApi';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Untuk simpan mesej error
  const [loading, setLoading] = useState(false); // Untuk tunjuk loading status
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      
      // Ambil token dari response API (ikut struktur gambar pensyarah tadi)
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-4">
            <h3 className="text-center fw-bold mb-4">Secure Login</h3>
            
            {/* Paparan mesej error kalau salah password */}
            {error && (
              <div className="alert alert-danger small py-2 text-center" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="admin@admin.com"
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="••••••••"
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-100 py-2 fw-bold"
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;