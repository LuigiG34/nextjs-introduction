export default function BlogPostPage({ params }) {
    return (
        <>
            <h1>Post</h1>
            <p>{ params.slug }</p>
        </>
    );
}