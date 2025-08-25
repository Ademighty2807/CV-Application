function HeaderForm({ header, setHeader }) {
    const handleChange = (e) => {
      setHeader({ ...header, [e.target.name]: e.target.value });
    };
  
    return (
      <div>
        <h3>Personal Info</h3>
        <input
          type="text"
          name="name"
          value={header.name}
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={header.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          value={header.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={header.title}
          placeholder="Job Title"
          onChange={handleChange}
        />
      </div>
    );
}
  
  export default HeaderForm;
  