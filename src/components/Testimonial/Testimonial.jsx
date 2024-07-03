import { MdOutlineStarPurple500 } from 'react-icons/md';
import p1 from '../../assets/image/People/p1.jpg'
import p2 from '../../assets/image/People/p2.jpg'
import p3 from '../../assets/image/People/p3.jpg'
const Testimonial = () => {
    return (
        <div className="max-w-[1160px] mx-auto w-11/12 mt-28 space-y-8">
            <h2 className="border-2 bg-[#FFFFF5] font-bold w-fit border-black  rounded-full py-2 px-5">Testimonial</h2>
            <h1 className="text-4xl font-bold leading-10">What they say about us</h1>
            <div className='flex gap-5'>
                <div className="bg-[#FFFFF5] p-5 shadow-lg space-y-5 rounded-[32px]">
                    <h1 className="text-xl font-bold">Expertise and Compassion Combined</h1>
                    <p className='text-sm'>I can`t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className='flex gap-3'>
                        <img className='w-12 rounded-full' src={p1} alt="" />
                        <div>
                            <h1><span className='font-bold'>Sarah,</span> IT Professional</h1>
                            <p className='text-[#FFE03D] flex'><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] p-5 shadow-lg space-y-5 rounded-[32px]">
                    <h1 className="text-xl font-bold">Expertise and Compassion Combined</h1>
                    <p className='text-sm'>I can`t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className='flex gap-3'>
                        <img className='w-12 rounded-full' src={p2} alt="" />
                        <div>
                            <h1><span className='font-bold'>Sarah,</span> IT Professional</h1>
                            <p className='text-[#FFE03D] flex'><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFF5] p-5 shadow-lg space-y-5 rounded-[32px]">
                    <h1 className="text-xl font-bold">Expertise and Compassion Combined</h1>
                    <p className='text-sm'>I can`t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className='flex gap-3'>
                        <img className='w-12 rounded-full' src={p3} alt="" />
                        <div>
                            <h1><span className='font-bold'>Sarah,</span> IT Professional</h1>
                            <p className='text-[#FFE03D] flex'><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-x-4 text-center">
                <input
                    className="bg-red-700"
                    type="radio"
                    name="options"
                    defaultChecked />
                <input className="" type="radio" name="options"  />
                <input className="" type="radio" name="options"  />
            </div>
        </div>
    );
};

export default Testimonial;