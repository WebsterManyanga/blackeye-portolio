"use client"

import { useEffect, useState } from "react";
import Header from "./Header";

export default function ScreenSize() {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    

    return (
        <Header screenWidth={screenWidth} />
    );
}