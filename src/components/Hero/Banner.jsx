import bannerImg from '../../assets/image/bannerImg.png'
const Banner = () => {
    return (
        <div
            className="w-11/12 max-w-[1160px] mx-auto hero h-[470px] rounded-[48px] bg-auto bg-top bg-no-repeat mt-5 "
            style={{
                backgroundImage: `  url(${bannerImg})`,
            }}
            >
        </div>
    );
};

export default Banner;

