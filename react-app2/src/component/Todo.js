import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo({text}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (<>
            <div className='card'>
                <h2>{text}</h2>
                <div className='actions'>
                    <button className='btn' onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            {modalIsOpen && (
                <>
                    <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} textValue={text}/>
                    <Backdrop onClick={closeModalHandler}/>
                </>
            )}
        </>
    );
}

export default Todo;