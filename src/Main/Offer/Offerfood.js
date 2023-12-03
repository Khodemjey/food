

export default function Offerfood({ image, price, profile1, profile2, profile3, foodname, text, star }) {
    return (
        <div className="offer-every-box">
            <div className="relative flex justify-center">
                <img src="./main/offer/circle.png" alt="" />
                <img src={image} className="offer-every-head-img " alt="" />
                <div className="offer-every-box-price">
                    <span className="text-white font-sofia">{price}</span>
                </div>
            </div>
            <div className="offer-text-box">
                <div className="offer-box-point">
                    <div className="flex">
                        <img src={profile1} alt="" />
                        <img src={profile2} className="ml-[-20px] " alt="" />
                        <img src={profile3} className="ml-[-18px] z-10" alt="" />
                    </div>
                    <img src="./main/offer/star.png" alt="" />
                    <span className="text-[14px] font-inter">( {star} )</span>
                </div>
                <h3 className="offer-food-name-style">{foodname}</h3>
                <span className="px-[30px]">{text}</span>
                <button className="offer-box-btn"><a href="#">Order Now</a></button>
            </div>

        </div>
    )
}
