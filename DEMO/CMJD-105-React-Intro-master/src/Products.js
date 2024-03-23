import axios from "axios";
import { useEffect, useState } from "react";

function Products() {

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        //code to be triggered in the side effect

        axios.get("http://localhost:8080/products")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("http://localhost:8080/categories")
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");

    function handleName(event) {
        setName(event.target.value);
    }

    function handlePrice(event) {
        setPrice(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value);
    }

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = {
            name: name,
            price: price,
            quantity: quantity,
            categoryId: category,
        }

        axios.post("http://localhost:8080/products", data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <h1>Products</h1>

            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category?.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={handleName} required />
                </div>

                <div>
                    <label>Price</label>
                    <input type="text" onChange={handlePrice} required />
                </div>

                <div>
                    <label>quantity</label>
                    <input type="text" onChange={handleQuantity} required />
                </div>

                <div>
                    <label>Category</label>
                    <select onChange={handleCategory} required>
                        <option value="">Select Category</option>

                        {categories && categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Products;