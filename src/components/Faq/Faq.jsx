const Faq = () => {
    return (
        <div className="max-w-[1160px] mx-auto w-11/12 mt-28 space-y-7">
            <h2 className="border-2 bg-[#FFFFF5] font-bold w-fit border-black rounded-full py-2 px-5">Faq</h2>
            <h1 className="text-4xl font-bold leading-10">Frequently Asked Questions</h1>

            <div className="collapse collapse-arrow shadow-md">
                <input type="radio" name="my-accordion-2" id="accordion-1" className="peer" />
                <label htmlFor="accordion-1" className="collapse-title text-xl font-medium cursor-pointer shadow-lg bg-[#ffffec] peer-checked:shadow-md">Click to open this one and close others</label>
                <div className="collapse-content peer-checked:bg-white peer-checked:shadow">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow shadow-md">
                <input type="radio" name="my-accordion-2" id="accordion-2" className="peer" />
                <label htmlFor="accordion-2" className="collapse-title text-xl font-medium cursor-pointer bg-[#ffffec] peer-checked:shadow-md">Click to open this one and close others</label>
                <div className="collapse-content peer-checked:bg-white peer-checked:shadow-lg border-2">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow shadow-md">
                <input type="radio" name="my-accordion-2" id="accordion-3" className="peer" />
                <label htmlFor="accordion-3" className="collapse-title text-xl font-medium cursor-pointer bg-[#ffffec] peer-checked:shadow-md">Click to open this one and close others</label>
                <div className="collapse-content peer-checked:bg-white peer-checked:shadow-md">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
