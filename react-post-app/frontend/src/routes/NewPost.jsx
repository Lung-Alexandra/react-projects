import classes from './NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {Form, Link, redirect} from "react-router-dom";
import { buildApiUrl } from "../lib/api.js";

function NewPost() {


    return (
        <Modal>
            <Form method='post' className={classes.form} >
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="author" id="name" required />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="content" required rows={5} />
                </p>
                <div className={classes.actions}>
                    <Link type="button" to='/'>Cancel</Link>
                    <button>Submit</button>
                </div>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData= Object.fromEntries(formData);
    await fetch(buildApiUrl('/posts'), {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return redirect('/');
}
