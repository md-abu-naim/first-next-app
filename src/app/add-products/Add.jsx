'use client'

import { useRouter } from "next/navigation";

const Add = () => {
    const router = useRouter()

    const handleAddProduct = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const category = form.category.value
        const status = form.status.value
        const totalSold = 0
        const image = form.image.value
        const shortBio = form.shortBio.value
        const description = form.description.value
        const features = form.features.value
        const createdAt = new Date().toLocaleDateString()
        const product = { name, price, category, status, totalSold, image, shortBio, description, features, createdAt };
        console.log(product);

        const res = await fetch('http://localhost:3000/api/items', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Yype": "application/json"
            }
        })
        const result = await res.json()
        console.log(result);
        router.push('/products')
        // router.refresh()

    }
    return (
        <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-2xl mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-5">

                <div>
                    <label className="block font-medium mb-1">Product Name</label>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        name="name"
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Price ($)</label>
                    <input
                        name="price"
                        type="number"
                        placeholder="Enter product price"
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select name="category"
                        className="w-full border bg-black px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option>Select category</option>
                        <option>Face Care</option>
                        <option>Hair Care</option>
                        <option>Body Care</option>
                        <option>Lip Care</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Status</label>
                    <select name="status"
                        className="w-full bg-black border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option>Select status</option>
                        <option>In Stock</option>
                        <option>Low Stock</option>
                        <option>Coming Soon</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Image URL</label>
                    <input name="image"
                        type="text"
                        placeholder="Paste image link"
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Short Bio</label>
                    <input name="shortBio"
                        type="text"
                        placeholder="Write a short bio..."
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea name="description"
                        placeholder="Write full description..."
                        rows="4"
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    ></textarea>
                </div>

                <div>
                    <label className="block font-medium mb-1">Features</label>
                    <textarea name="features"
                        placeholder="Enter features separated by commas"
                        rows="3"
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Add Product
                </button>
            </form>
        </div>

    );
};

export default Add;