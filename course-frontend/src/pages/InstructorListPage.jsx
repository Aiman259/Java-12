import React from 'react';
import { Link } from 'react-router-dom';

const InstructorListPage = () => {

  const instructors = [
    { 
      id: '1', 
      name: 'Ammar', 
      specialization: 'Full-Stack Web Development', 
      experience: 5 
    },
    { 
      id: '2', 
      name: 'Zharfan', 
      specialization: 'Backend Engineering (Java Spring Boot)', 
      experience: 3 
    },
    { 
      id: '3', 
      name: 'Khairul', 
      specialization: 'Mobile App Development (React Native)', 
      experience: 4 
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Our Expert Instructors</h2>
      <div className="row">
        {instructors.map((instructor) => (
          <div className="col-md-4 mb-4" key={instructor.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{instructor.name}</h5>
                <h6 className="card-subtitle mb-2 text-primary">{instructor.specialization}</h6>
                <p className="card-text text-muted mb-4">
                  Expert with {instructor.experience} years of industry experience.
                </p>
                
                {/* Link ke Exercise 4 */}
                <Link 
                  to={`/instructors/${instructor.id}`} 
                  className="btn btn-outline-primary mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorListPage;