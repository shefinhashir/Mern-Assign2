import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary px-4">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Portal
        </Link>

        <div className="d-flex gap-3">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
          <Link className="nav-link text-white" to="/employee-form">
            Employee Form
          </Link>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>
      </main>
    </>
  );
}