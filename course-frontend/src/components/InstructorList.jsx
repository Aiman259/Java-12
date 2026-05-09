import InstructorCard from './InstructorCard';

function InstructorList({ instructors }) {
  return (
    <div className="instructor-list">
      {instructors.map((inst) => (
        <InstructorCard key={inst.id} instructor={inst} />
      ))}
    </div>
  );
}

export default InstructorList;