
export const getBlog = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await res.json()
    return blog
}

export const generateMetadata = async ({ params }) => {
    const id = (await params).id
    const blog = await getBlog(id)

    return {
        title: blog.title,
        description: blog.body
    }

}

const BlogsDetails = async ({ params }) => {
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