import classes from "./PostList.module.css";
import Post from "./Post"

import {useLoaderData} from "react-router-dom";


function PostList() {
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.list}>
                    {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} content={post.content}/>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'black'}}>
                    <h3>No posts yet!</h3>
                </div>
            )}

        </>
    );
}

export default PostList;