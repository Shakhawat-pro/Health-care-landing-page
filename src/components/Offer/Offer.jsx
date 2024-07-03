import { PiArrowUpRightBold } from "react-icons/pi";
import img from "../../assets/image/Rectangle 32.png"
import logo from "../../assets/image/logo light.png"
const Offer = () => {
    return (
        <div
            className="relative w-11/12 max-w-[1160px] mx-auto overflow-clip  h-[470px] rounded-[48px] bg-auto bg-top bg-no-repeat mt-28"
            style={{
                backgroundImage: `linear-gradient(to right, rgb(2, 0, 67),rgba(2, 0, 67, 0.3)), url(${img})`,
            }}>
            <div className="w-[600px] left-10 text-white absolute top-1/2 -translate-y-1/2">
                <h1 className="mb-5 text-5xl font-bold">Get Your <br /> First Appointment <br /> at 50% Off!</h1>
                <div className="space-x-5">
                    <button className="btn bg-[#FFC637] p-4 rounded-xl border-none font-bold transition-transform transform hover:scale-105">Appointment <PiArrowUpRightBold className="text-lg" /></button>
                    <button className="btn bg-transparent text-white p-4 rounded-xl">Get Started <PiArrowUpRightBold className="text-lg" /></button>
                </div>
            </div>
            <img className="absolute top-10 right-10" src={logo} alt="" />
        </div>
    );
};

export default Offer;