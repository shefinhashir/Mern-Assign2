import { useState } from "react";

export default function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Form submitted successfully. No data was sent to an API.");
  }

  return (
    <>
      <h2 className="mb-2">Employee Form</h2>
      <p className="text-muted">Enter employee details below.</p>

      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation</label>
            <input
              className="form-control"
              name="designation"
              value={form.designation}
              onChange={handleChange}
              placeholder="Enter designation"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              className="form-control"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Salary</label>
            <input
              className="form-control"
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              min="0"
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>

        {message && (
          <div className="alert alert-success mt-3 mb-0">{message}</div>
        )}
      </div>
    </>
  );
}