import Link from "next/link";

export const getBlogs = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const Blogs = async() => {
    const blogs = await getBlogs()


    return (
        <div className="bg-gray-50 min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                    Latest <span className="text-green-600">Blogs</span>
                </h1>

                {/* Blogs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs?.slice(0, 12).map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
                        >
                            {/* Cover Image */}
                            {/* <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="h-48 w-full object-cover"
                            /> */}

                            {/* Content */}
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {blog.body}
                                </p>

                                {/* Author + Meta */}
                                <div className="flex items-center gap-3 mt-4">
                                    
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            {blog.title}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(blog.createdAt).toDateString()} • {blog.readTime} min read
                                        </p>
                                    </div>
                                </div>

                                {/* Read More */}
                                <div className="mt-5">
                                    <Link
                                        href={`/blogs/${blog.id}`}
                                        className="inline-block text-green-600 font-medium text-sm hover:underline"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;