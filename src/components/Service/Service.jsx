import { PiArrowUpRightBold } from "react-icons/pi";
import img1 from '../../assets//image/Rectangle 27-2.png'
import img2 from '../../assets//image/Rectangle 27-1.png'
import img3 from '../../assets//image/Rectangle 27.png'

const Service = () => {
    return (
        <div className="max-w-[1160px] mx-auto w-11/12 mt-32 rounded-[32px] bg-[#FFFFF5] shadow-md p-10">
            <div className="grid grid-cols-2 gap-20">
                <div className="space-y-5 w-full ">
                    <h2 className="border-2 bg-[#FFFFF5] font-bold w-fit border-black  rounded-full py-2 px-5">Service</h2>
                    <h1 className="text-4xl font-bold leading-10">Empowering Health, <br /> Enriching Lives</h1>
                    <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <button className="btn bg-[#FFC637] p-4 rounded-xl font-bold transition-transform transform hover:scale-105">Appointment <PiArrowUpRightBold className="text-lg" /></button>
                </div>
                <div className="relative ">
                    <img className="rounded-[30px]" src={img1} alt="" />
                    <div className="absolute bottom-5 left-5 bg-[#02004396] text-white w-96 shadow-xl px-8 py-10 rounded-[32px]">
                        <h2 className="text-xl font-bold">Advanced Technology</h2>
                        <p className="text-sm text-[#ffffffcc] mt-5 opacity-80 pr-10">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        <button className="absolute right-5 bottom-5 btn btn-circle transition-transform transform hover:scale-125 text-lg bg-[#FFC637] text-white border-none"><PiArrowUpRightBold/></button>
                    </div>
                </div>
                <div className="relative ">
                    <img className="rounded-[30px]" src={img2} alt="" />
                    <div className="absolute bottom-5 left-5 bg-[#02004396] text-white w-96 shadow-xl px-8 py-10 rounded-[32px]">
                        <h2 className="text-xl font-bold">Online Doctor Meet</h2>
                        <p className="text-sm text-[#ffffffcc] mt-5 opacity-80 pr-10">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        <button className="absolute right-5 bottom-5 btn btn-circle transition-transform transform hover:scale-125 text-lg bg-[#FFC637] text-white border-none"><PiArrowUpRightBold/></button>
                    </div>
                </div>
                <div className="relative ">
                    <img className="rounded-[30px]" src={img3} alt="" />
                    <div className="absolute bottom-5 left-5 bg-[#02004396] text-white w-96 shadow-xl px-8 py-10 rounded-[32px]">
                        <h2 className="text-xl font-bold">Consultancy your health </h2>
                        <p className="text-sm text-[#ffffffcc] mt-5 opacity-80 pr-10">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                        <button className="absolute right-5 bottom-5 btn btn-circle transition-transform transform hover:scale-125 text-lg bg-[#FFC637] text-white border-none"><PiArrowUpRightBold/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;