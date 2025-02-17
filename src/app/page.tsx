
import GetApiCategori from "./getapi/get-api-categori";
import GetApiList1 from "./getapi/get-api-list1";
import AdInsta from "./parts/ad-insta";
import GetApliList2 from "./getapi/get-api-list2";

import Link from "next/link";

export default function Home() {
  return (
    <div>
        <div className="home-container">
          <div className="box-home">
            <img src="/logo/logo-home.png" alt="logo" className="logo-home" />
            <h1 className="title-home">Spicy delicious chicken wings</h1>
            <p className="text-home">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <button className="btn-home"><img className="logo-btn-home" src="/logo/Timer.png" alt="" /> 30 Minutes</button>
            <button className="btn-home"><img className="logo-btn-home" src="/logo/ForkKnife.png" alt="" /> Chicken</button>
            <br />
            <div className="info-person-home">
              <img src="/logo/logo-photo-home.png" alt="photo" className="logo-photo-footer-home" />
              <h4 className="name-photo-home">John Smith</h4>
              <Link href="/shop"><button className="btn-footer-home">View Recipes <img className="logo-btn-photo-footer-home" src="/logo/PlayCircle.png" alt="" /></button></Link>
            </div>
          </div>
          <img src="/images/image-home.png" alt="image" className="image-home" />
        </div>
        
        <GetApiCategori />
        <GetApiList1 />
        <AdInsta />
        <GetApliList2 />
    </div>
  );
}
