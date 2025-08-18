
const BlogsDetails = async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const blog = await res.json() 
    return (
        <div>
            blogs details {params.id}
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
};

export default BlogsDetails;