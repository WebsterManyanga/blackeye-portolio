"use client"

import { useEffect, useState } from "react";
import Header from "./Header";

export default function ScreenSize() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    },[]);


    return (
        <Header screenWidth={screenWidth} />
    );
}