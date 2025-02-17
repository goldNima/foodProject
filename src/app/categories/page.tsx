
import GetApiCategori2 from "../getapi/get-api-allCategories";

function Categories (){
    return(
        <div>
            <h1 className="title-allCategories">All Our Categories ...</h1>
            <div className="container-AllCategories">
                <GetApiCategori2 />
            </div>
        </div>
    )
}

export default Categories;