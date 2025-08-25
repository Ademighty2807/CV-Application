import { formatDuration } from "./dateUtils";

function Preview({ header, education, experience }) {
  return (
    <div id="cv-preview"> {/* we'll use this for PDF export */}
      <h1>{header.name}</h1>
      <p>{header.title}</p>
      <p>{header.email} | {header.phone}</p>

      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.school}</h4>
          <p>
            {edu.degree} ({edu.startDate} → {edu.endDate || "Present"}) 
            {" "} – {formatDuration(edu.startDate, edu.endDate)}
          </p>
        </div>
      ))}

      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h4>{exp.company}</h4>
          <p>
            {exp.role} ({exp.startDate} → {exp.endDate || "Present"})
            {" "} – {formatDuration(exp.startDate, exp.endDate)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Preview;


  