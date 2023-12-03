import Offerfood from "./Offerfood"

export default function Offer() {

  const offerList = [
    { image: './main/offer/offer (1).png', price: '10$', profile1: './main/offer/profile (1).png', profile2: './main/offer/profile (2).png', profile3: './main/offer/profile (3).png', foodname: 'Kebab', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', star: '4.5' },
    { image: './main/offer/offer (2).png', price: '15$', profile1: './main/offer/profile (4).png', profile2: './main/offer/profile (5).png', profile3: './main/offer/profile (6).png', foodname: 'Chicken Tikka', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', star: '4.8' },
    { image: './main/offer/offer (3).png', price: '8$', profile1: './main/offer/profile (7).png', profile2: './main/offer/profile (8).png', profile3: './main/offer/profile (9).png', foodname: 'Desi Chowmein', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', star: '4.2' },
    { image: './main/offer/offer (4).png', price: '25$', profile1: './main/offer/profile (4).png', profile2: './main/offer/profile (5).png', profile3: './main/offer/profile (6).png', foodname: 'Chicken Chargha', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', star: '5.0' },
  ]

  return (
    <div id="offer" className="offer-container">
      <h2 className="heading text-[48px]">Today <span className="text-red">special</span> offers</h2>
      <span className="offer-sub-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
      <div className=" all-offer-container">
        <Offerfood {...offerList[0]} />
        <Offerfood {...offerList[1]} />
        <Offerfood {...offerList[2]} />
        <Offerfood {...offerList[3]} />
      </div>
    </div>
  )
}
