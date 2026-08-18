import { useState } from 'react'

const AdminForm = ({ existingAdmin = {}, updateCallback = () => { } }) => {
    const [name, setName] = useState(existingAdmin.name || "");
    const [password, setPassword] = useState(existingAdmin.password || "");
    const [phone, setPhone] = useState(existingAdmin.phone || "");

    const updating = Object.entries(existingAdmin).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            password,
            phone,
        }
        const url = "http://localhost:5000/" + (updating ? `update_admin/${existingAdmin.id}` : "create_admin")
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
                onChange={(e) => setName(e.target.value)}>
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

export default AdminForm