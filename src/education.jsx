import { useState } from "react";

function EducationForm({ education, setEducation }) {
  const [form, setForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateEducation = () => {
    if (editIndex !== null) {
      const updated = [...education];
      updated[editIndex] = form;
      setEducation(updated);
      setEditIndex(null);
    } else {
      setEducation([...education, form]);
    }
    setForm({ school: "", degree: "", startDate: "", endDate: "" });
  };

  const handleEdit = (index) => {
    setForm(education[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Education</h3>
      <input
        name="school"
        value={form.school}
        onChange={handleChange}
        placeholder="School"
      />
      <input
        name="degree"
        value={form.degree}
        onChange={handleChange}
        placeholder="Degree"
        required
      />
      <input
        type="month"
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        required
      />
      <input
        type="month"
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
        placeholder="End Date"
        required
      />
      <button type="button" onClick={addOrUpdateEducation}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.school} - {edu.degree} ({edu.startDate} → {edu.endDate || "Present"})
            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationForm;
