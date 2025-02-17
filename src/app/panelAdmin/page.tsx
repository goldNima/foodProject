"use client"


function panelAdmin (){

    
    const name = localStorage.getItem("name")
    const lastName = localStorage.getItem("Lastname")
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")

    return(
        <div>
            <div>
            <header className="header-dashboard">
                <h1 className="title-dashboard">Panle admin</h1>
            </header>
            <div className="container-dashboard">
                <div className="right-panel">
                    <header className="header-right-dashboard">
                        <h2 className="title-right-dashboard">Admin</h2>
                    </header>
                    <h3 className="text-right-dashboard">Your Name : <span className="span-text-right-dashboard">{name}</span></h3>
                    <h3 className="text-right-dashboard">Your LastName : <span className="span-text-right-dashboard">{lastName}</span></h3>
                    <h3 className="text-right-dashboard">Your Email : <span className="span-text-right-dashboard">{email}</span></h3>
                    <h3 className="text-right-dashboard">Your Password : <span className="span-text-right-dashboard">{password}</span></h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default panelAdmin;