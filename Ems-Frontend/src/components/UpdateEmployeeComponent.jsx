import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

function UpdateEmployeeComponent() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      let emp = res.data
      setFirstName(emp.firstName)
      setLastName(emp.lastName)
      setEmailId(emp.emailId)
    })
  }, [id])

  const updateEmployee = (e) => {
    e.preventDefault()
    const employee = { firstName, lastName, emailId }
    EmployeeService.updateEmployee(employee, id).then(() =>
      navigate('/employees')
    )
  }

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={updateEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate('/employees')}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployeeComponent
