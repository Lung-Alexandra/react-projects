"use client";
import {useEffect, useState} from "react";
import Image from 'next/image'
import classes from "./imageSlideshow.module.css";


const images = require.context("@/assets/images", false);
const imageList = images.keys().map(image => ({
    src: images(image).default, // The actual image source
    alt: image.split('/').pop().replace(/\.[^/.]+$/, "") // Extract filename and remove extension for alt text
}));


export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < imageList.length - 1 ? prevIndex + 1 : 0);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>
            {imageList.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    className={index === currentImageIndex ? classes.active : ''}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}