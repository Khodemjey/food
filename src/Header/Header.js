import Navbar from "./Navbar/Navbar"
import Pattern from "./Pattern"
import Herosection from "./Herosection"


export default function Header() {
    return (
        <section className="relative">
            <Navbar />
            <Pattern />
            <Herosection />
        </section>
    )
}
