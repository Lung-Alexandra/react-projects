'use client'
import classes from "./imagePicker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";


export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();
const [clicker,setClicker] = useState(false);
    function handlePickClick() {
        imageInput.current.click()
        setClicker(true);
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);

    }

    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={name}>{label}</label>
                <div className={classes.controls}>
                    {clicker && (
                        <div className={classes.preview}>
                            {!pickedImage && (<p>No image picked yet!</p>)}
                            {pickedImage && (
                                <Image
                                    src={pickedImage}
                                    alt={"The image selected by the user."}
                                    fill
                                />)
                            }
                        </div>
                    )}
                    <input
                        className={classes.input}
                        type={"file"}
                        id={name}
                        accept="image/jpeg, image/jpg, image/png"
                        name={name}
                        ref={imageInput}
                        onChange={handleImageChange}
                    />
                    <button className={classes.button} onClick={handlePickClick} type="button">
                        Pick an Image
                    </button>
                </div>
            </div>
        </>
    )
}