import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
  const { id } = useParams(); // '_add' for add, actual id for update
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    fullName: "",
    emailId: "",
    designation: "",
    salary: "",
    joiningDate: "",
  });

  // Load existing employee for update
  useEffect(() => {
    if (id !== "_add") {
      EmployeeService.getEmployeeById(id)
        .then((res) => setEmployee(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const saveOrUpdateEmployee = async (e) => {
    e.preventDefault();

    try {
      if (id === "_add") {
        await EmployeeService.createEmployee(employee);
      } else {
        await EmployeeService.updateEmployee(id, employee);
      }
      navigate("/employees"); // redirect after save
    } catch (error) {
      console.error("Failed to save employee", error);
      alert("Failed to save employee. Try again!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-8 offset-md-2 shadow">
          <h3 className="text-center mt-3 mb-3">
            {id === "_add" ? "Add Employee" : "Update Employee"}
          </h3>
          <div className="card-body">
            <form onSubmit={saveOrUpdateEmployee}>
              <div className="form-group mb-3">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-control"
                  value={employee.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Email Id:</label>
                <input
                  type="email"
                  name="emailId"
                  placeholder="Email"
                  className="form-control"
                  value={employee.emailId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Designation:</label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  className="form-control"
                  value={employee.designation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Salary:</label>
                <input
                  type="number"
                  name="salary"
                  placeholder="Salary"
                  className="form-control"
                  value={employee.salary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label>Joining Date:</label>
                <input
                  type="date"
                  name="joiningDate"
                  className="form-control"
                  value={employee.joiningDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => navigate("/employees")}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;
