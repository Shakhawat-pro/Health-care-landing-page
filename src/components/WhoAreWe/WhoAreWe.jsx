import { PiArrowUpRightBold } from "react-icons/pi";
import img from "../../assets/image/Rectangle 24.png"

const WhoAreWe = () => {
    return (
        <div className="max-w-[1160px] mx-auto w-11/12 mt-28 flex gap-20">
            <div className="space-y-5 w-full">
                <h2 className="border-2 bg-[#FFFFF5] font-bold w-fit border-black  rounded-full py-2 px-5">Who Are We</h2>
                <h1 className="text-4xl font-bold leading-10">We Help To Get <br /> Solutions</h1>
                <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className="btn bg-[#FFC637] p-4 rounded-xl font-bold transition-transform transform hover:scale-105">Learn more <PiArrowUpRightBold className="text-lg" /></button>
            </div>
            <div className="relative w-full">
                <img src={img} alt="" />
                <div className="absolute -bottom-10 -left-20 bg-[#343268] text-white w-96 shadow-xl px-8 py-10 rounded-[32px]">
                        <h2 className="text-2xl font-medium">Our mission is simple</h2>
                        <p className="text-sm text-[#ffffffcc] mt-5">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;