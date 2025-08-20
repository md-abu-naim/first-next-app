// import dbConnect from "@/lib/dbConnect";
// import { redirect } from "next/navigation";

const Products = async () => {
    const res = await fetch('http://localhost:3000/api/items', {
        cache: 'force-cache'
    })
    const products = await res.json()

    // const products = await dbConnect("products").find().toArray()

    // if(products?.length > 8) redirect('/')
    return (
        <div>
            <h1 className="text-3xl">All Products {products?.length}</h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    products.map(p => <div key={p._id} className="max-w-sm bg-black rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Image */}
                        <img
                            src={p.image}
                            alt="Organic Face Cream"
                            className="w-full h-56 object-cover"
                        />

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-white">
                                {p.name}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">
                               {p.shortBio}
                            </p>

                            {/* Price + Status */}
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-green-400 font-bold text-lg">${p.price}</span>
                                <span className="text-xs bg-green-900 text-green-300 px-3 py-1 rounded-full">
                                    {p.status}
                                </span>
                            </div>

                            {/* Button */}
                            <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                                View Details
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;