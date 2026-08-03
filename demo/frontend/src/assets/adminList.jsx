import React from "react"

const AdminList = ({ admins, updateAdmin, updateCallback }) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`https://0.0.0.0:5000/delete_admin/${id}`, options)
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
        <h2>Admins</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {admins.map((admin) => (
                    <tr key={admin.id}>
                        <td>{admin.name}</td>
                        <td>
                            <button onClick={() => updateAdmin(admin)}>Update</button>
                            <button onClick={() => onDelete(admin.id)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default AdminList