import pi from '../../assets/icon/Pi.png'
import coin from '../../assets/icon/coin.png'
import Group from '../../assets/icon/Group.png'
import certificate from '../../assets/icon/certificate.png'
import video from '../../assets/icon/video.png'

const Status = () => {
    return (
        <div className="max-w-[1160px] mx-auto w-11/12">
            <h1 className="text-5xl font-bold text-center -mb-20">Comprehensive Care <br />for Every Patient</h1>
            <div className="flex justify-between items-end gap-5">
                <div className="bg-white h-[300px] p-5 rounded-3xl border-2 shadow-xl w-full">
                    <h1 className="text-4xl font-bold">90%</h1>
                    <p>Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='mt-7 mx-auto' src={pi} alt="" />
                </div>
                <div className=" h-[200px] bg-[#FFFFF5] p-5 rounded-3xl border-2 shadow-xl w-full">
                    <h1 className="text-4xl font-bold">500+</h1>
                    <p>Board-certified doctors</p>
                    <img className='ml-[50%]' src={certificate} alt="" />
                </div>
                <div className="bg-white h-[160px] p-5 rounded-3xl border-2 shadow-xl w-full">
                    <h1 className="text-4xl font-bold">4.8</h1>
                    <p>Over 20,000 Patient</p>
                    <img className='mt-5' src={Group} alt="" />
                </div>
                <div className=" h-[200px] bg-[#FFFFF5] p-5 rounded-3xl border-2 shadow-xl w-full">
                    <h1 className="text-4xl font-bold">$5000</h1>
                    <p>Money spend for poor patient</p>
                    <img className='ml-[45%]' src={coin} alt="" />
                </div>
                <div className="bg-white h-[300px] p-5 rounded-3xl border-2 shadow-xl w-full">
                    <h1 className="text-4xl font-bold">50+</h1>
                    <p>Free session video for patient</p>
                    <img className='mt-11 mx-auto' src={video} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Status;