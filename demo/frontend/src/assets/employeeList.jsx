import React from "react"

const EmployeeList = ({ employees, updateEmployee, updateCallback }) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://localhost:5000/delete_employee/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <h2>Employees</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone #</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <button onClick={() => updateEmployee(employee)}>Update</button>
                            <button onClick={() => onDelete(employee.id)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default EmployeeList
