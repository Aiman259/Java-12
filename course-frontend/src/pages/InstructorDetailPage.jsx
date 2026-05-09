import { useParams, Link } from 'react-router-dom';

export default function InstructorDetailPage() {
  // Read the 'id' parameter from the URL
  const { id } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>🔍 Instructor Details</h1>
      
      <div style={{ 
        border: '1px solid #ddd', 
        padding: '20px', 
        borderRadius: '8px',
        display: 'inline-block',
        backgroundColor: '#f9f9f9'
      }}>
        <h3>Currently viewing Instructor ID:</h3>
        <h2 style={{ color: '#2c3e50' }}>{id}</h2>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/instructors" style={{ color: '#3498db' }}>← Back to List</Link>
      </div>
    </div>
  );
}