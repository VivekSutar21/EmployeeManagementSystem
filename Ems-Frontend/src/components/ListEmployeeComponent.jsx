import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => setEmployees(res.data))
  }, [])

  const deleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      EmployeeService.deleteEmployee(id).then(() => {
        setEmployees((prev) => prev.filter((emp) => emp.id !== id))
      })
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundSize: '100% 100%', // stretch full screen
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '5px 10px',
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          // backgroundColor: '#090979',
          borderRadius: '10px',
          padding: '10px',
          minHeight: '80vh',
        }}
      >
        <div className="row mb-3">
          <div className="col text-end">
            <button
              className="btn btn-sm btn-success px-3 py-2 shadow-sm"
              onClick={() => navigate('/add-employee/_add')}
            >
              + Add Employee
            </button>
          </div>
        </div>

        <div className="row">
          <table className="table table-striped table-hover table-bordered align-middle shadow-sm">
            <thead className="table-dark text-center">
              <tr>
                <th>Full Name</th>
                <th>Email Id</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.fullName}</td>
                    <td>{employee.emailId}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.joiningDate}</td>
                    <td className="text-center">
                      <button
                        onClick={() => navigate(`/update-employee/${employee.id}`)}
                        className="btn btn-info btn-sm me-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => deleteEmployee(employee.id)}
                        className="btn btn-danger btn-sm me-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => navigate(`/view-employee/${employee.id}`)}
                        className="btn btn-secondary btn-sm"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted py-3">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListEmployeeComponent
