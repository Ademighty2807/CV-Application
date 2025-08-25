import { useState } from "react";
import HeaderForm from "./header";
import EducationForm from "./education";
import ExperienceForm from "./experience";
import Preview from "./preview";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


function App() {
  const [header, setHeader] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123456789",
    title: "Frontend Developer"
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const downloadPDF = () => {
    const input = document.getElementById("cv-preview");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("my-cv.pdf");
    });
  };

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      {/* Left side: Forms */}
      <div style={{ flex: 1 }}>
        <h2>My Curriculum vitae</h2>
        <HeaderForm header={header} setHeader={setHeader} />
        <EducationForm education={education} setEducation={setEducation} />
        <ExperienceForm experience={experience} setExperience={setExperience} />
      </div>

      {/* Right side: Live CV Preview */}
      <div style={{ flex: 1, border: "1px solid #ddd", padding: "1rem" }}>
        <Preview header={header} education={education} experience={experience} />
        <button onClick={downloadPDF} style={{ marginTop: "1rem" }}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default App;

