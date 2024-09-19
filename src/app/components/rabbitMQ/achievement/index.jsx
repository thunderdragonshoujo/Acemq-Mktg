'use client'
import { slideIn } from "@/app/Animations/common";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="px-[3rem] mt-[4rem] sm:mt-[10rem] sm:flex sm:px-[10rem] flex-col">
            <img data-animation-id='slideIn' src="/acheivement_sm.svg" alt="info" className="sm:hidden" />
            <img data-animation-id='slideIn' src="/acheivement_lg.svg" alt="info" className="sm:block self-center hidden w-[100rem]" />
        </section>
    );
}
 
export default Index;