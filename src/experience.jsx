import { useState } from "react";

function ExperienceForm({ experience, setExperience }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    startDate: "",
    endDate: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateExperience = () => {
    if (editIndex !== null) {
      const updated = [...experience];
      updated[editIndex] = form;
      setExperience(updated);
      setEditIndex(null);
    } else {
      setExperience([...experience, form]);
    }
    setForm({ company: "", role: "", startDate: "", endDate: "" });
  };

  const handleEdit = (index) => {
    setForm(experience[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Experience</h3>
      <input
        name="company"
        className="experience"
        value={form.company}
        onChange={handleChange}
        placeholder="Company"
      />
      <input
        name="role"
        value={form.role}
        onChange={handleChange}
        placeholder="Role"
      />
      <input
        type="month"
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        type="month"
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <button type="button" onClick={addOrUpdateExperience}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            {exp.company} - {exp.role} ({exp.startDate} → {exp.endDate || "Present"})
            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceForm;

