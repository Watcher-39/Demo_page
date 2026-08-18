import { useState } from 'react'

const EmployeeForm = ({ existingEmployee = {}, updateCallback = () => { } }) => {
    const [name, setName] = useState(existingEmployee.name || "");
    const [password, setPassword] = useState(existingEmployee.password || "");
    const [phone, setPhone] = useState(existingEmployee.phone || "");

    const updating = Object.entries(existingEmployee).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            password,
            phone,
        }
        const url = "http://localhost:5000/" + (updating ? `update_employee/${existingEmployee.id}` : "create_employee")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}>
            </input>
        </div>
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
                type="string"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}>
            </input>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
        </div>
        <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
}

export default EmployeeForm