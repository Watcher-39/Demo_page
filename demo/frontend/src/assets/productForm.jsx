import { useState } from 'react'

const ProductForm = ({ existingProduct = {}, updateCallback = () => { } }) => {
    const [name, setName] = useState(existingProduct.name || "");
    const [price, setPrice] = useState(existingProduct.price || "");
    const [description, setDescription] = useState(existingProduct.description || "");

    const updating = Object.entries(existingProduct).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            price,
            description
        }
        const url = "http://127.0.0.1:5000/" + (updating ? `update_product/${existingProduct.id}` : "create_product")
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
            <label htmlFor="price">Price:</label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}>
            </input>
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}>
            </input>
        </div>
        <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
}

export default ProductForm