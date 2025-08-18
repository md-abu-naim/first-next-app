
export const getBlog = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await res.json() 
    return blog
}

const BlogsDetails = async({params}) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    // const blog = await res.json() 
    const blog = await getBlog(params.id)
    return (
        <div>
            blogs details {params.id}
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
};

export default BlogsDetails;