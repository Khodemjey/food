import Videosec from "./Videosec"

export default function Herosection() {
    return (
        <div className="hero-sec-container">
            <div className="md:w-1/2">
                <img src="./header/mobile-hero.svg" className="w-full bg-cover" alt="" />
            </div>
            <div className="md:w-1/2">
                <div>
                    <div className="heart-container">
                        <img src="./header/heart.png" className="w-[20px] h-[20px]" alt="" />
                        <span className="text-[14px]">People Trust us</span>
                    </div>
                    <h1 className="heading mb-[40px] tracking-tight">We're <span className="text-red">Serious</span> For <span className="text-red">Food</span> & <span className="text-orange">Delivery</span>.</h1>
                    <span className="text-black opacity-80 font-inter text-[20px]">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</span>
                </div>
                <div className=" w-full flex items-center py-[28px] relative mt-[32px] mb-[34px]">
                    <form action="POST">
                        <input type="text" name="search" id="search" className="search-input" placeholder="Search food" />
                        <button className="search-input-left-icon"><img src="./header/bx-search.png" alt="" /></button>
                        <button className="search-input-right-icon"><img src="./header/orange-search.png" alt="" /></button>
                    </form>
                </div>
                <Videosec></Videosec>
                <div className="w-full flex justify-center md:justify-start">
                    <a href="#offer"><img src="./header/slider.png" className="animate-bounce" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
