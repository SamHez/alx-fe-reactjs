import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
        cacheTime: 1000 * 60 * 5, // 5 minutes
        staleTime: 1000 * 60 * 1, // 1 minute
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
