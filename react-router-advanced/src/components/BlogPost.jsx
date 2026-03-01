import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Blog Post {id}</h1>
            <p>Displaying content for post ID: {id}</p>
        </div>
    );
};

export default BlogPost;
