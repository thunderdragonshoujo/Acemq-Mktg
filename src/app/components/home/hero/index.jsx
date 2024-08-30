import Image from "next/image";
const Index = () => {
    return (
        <section className="relative flex pt-[6.3rem] px-[2.5rem] sm:px-[10rem] pb-[2rem] gap-[4rem]">
            <Image src='/hero_bg_sm.png' width={520} className="absolute z-[-3] sm:hidden inset-0 " height={669} alt="background image" />
            <Image src='/hero_flare_bottom_sm.png' width={520} className="absolute z-[-2]  sm:hidden inset-0 " height={669} alt="background image" />
            <Image src='/hero_flare_side_sm.png' width={520} className="absolute z-[-1] sm:hidden inset-0 " height={669} alt="background image" />
            <Image src='/hero_bg_lg.png' width={1920} className="absolute w-[100vw] h-auto hidden  sm:block z-[-1] inset-0 " height={1000} alt="background image" />
            <Image src='/hero_flare_bottom_lg.png' width={1920} className="absolute w-[100vw] h-auto hidden  sm:block z-[-2] inset-0 " height={1000} alt="background image" />
            <Image src='/hero_flare_side_lg.png' width={1920} className="absolute w-[100vw] h-auto hidden  sm:block z-[-1] inset-0 " height={1000} alt="background image" />
            <img src="/mille_1.svg" className="hidden mt-[3rem] absolute sm:block w-[3.6rem]" alt="mile stone" />
            <div className="relative w-[100%] sm:ml-[4.5rem]">
                <h1 className="font-[300] text-[5.3rem] sm:text-[12rem] sm:w-[58rem] leading-[5.5rem] sm:leading-[12rem]">Message <span className="font-[700] text-accent-100">Queuing</span></h1>
                <h2 className="text-[2rem] sm:text-[5.2rem] sm:leading-[9rem] leading-[6.2rem] font-[700]">Technology <span className="font-[400]">Experts</span></h2>
                <p className="mb-[2rem] sm:hidden sm:mb-0">AceMQ is a firm built on delivering excellence on all Message Queuing and Streaming Solutions. We have expertise in Queueing tools and Streaming tools, their Architecture, and how they integrate in various environments.</p>
                <p className="sm:hidden">Let us assist you with your planned deployment or assess your current environment.</p>

                <p className="sm:block hidden sm:w-[58rem]">AceMQ is a firm built on delivering excellence on all Messaging Queuing Solutions. We have exclude tools and streaming Tools, in Streaming, Architecture, and how they integrate in various environments. Let us assist you with your Message brokers deployment or assess your current environment.</p>

                <button className="border border-accent-100 mt-[2.8rem] relative">Contact Us</button>
            </div>
            <Image width={1146} height={204} src='/PEQC.svg' className="absolute hidden sm:block right-[10rem] h-[18rem] w-[100rem] bottom-[-27rem]" alt="P.E.Q.C" />
        </section>
    );
}

export default Index;