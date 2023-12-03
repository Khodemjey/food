
export default function Navbar() {
    return (
        <div className="flex justify-between base-container mt-[24px] items-center gap-x-4">
            <img src="./header/navbar/logo.png" alt="" />
            <img src="./header/navbar/burger-menu.png" className="burger-menu" alt="" />
            <div className="hidden lg:flex items-center gap-x-36">
                <ul id="menu-list" className="flex gap-x-6 md:gap-x-4">
                    <li ><a href="#">Today special offers</a></li>
                    <li ><a href="#">Why FoodHut</a></li>
                    <li ><a href="#">Our Menu</a></li>
                    <li ><a href="#">Our Popular food</a></li>

                </ul>
                <button className="download-app"><a href="#">Downlode App</a></button>
            </div>
        </div>
    )
}
