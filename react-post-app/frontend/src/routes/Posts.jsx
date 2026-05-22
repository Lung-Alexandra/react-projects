import PostList from "../components/PostList.jsx";
import {Outlet} from "react-router-dom";
import { buildApiUrl } from "../lib/api.js";

function Posts() {

    return (
        <>
            <Outlet />
            <main>
                <PostList />
            </main>
        </>
    );

}

export default Posts;

export async function loader() {
    const res = await fetch(buildApiUrl('/posts'));
    const resData = await res.json();
    return resData.posts;
}
