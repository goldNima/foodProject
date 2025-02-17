
import { GetApiShop } from "../getapi/getApi-shop";

function Shop (){
    return(
        <div className="shop">
            <header className="header-shop">
                <h1 className="title-shop">Our Shop</h1>
                <p className="text-shop">Here you can find the best foods , coffee and too other things <br /> join it ...</p>
            </header>
            <main className="main-shop">
                <div>
                    <GetApiShop />
                </div>
            </main>
        </div>
    )
}

export default Shop;