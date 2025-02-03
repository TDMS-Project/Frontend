function AdminHomePage(){
return(
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Tiffin Delivery
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link  text-white active" aria-current="page" href="/Vendor" >
                  Vendors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/DeliverPerson" >
                  DeliveryPersons
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/OrderHistory">
                 Order History
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/FeedBack">
                 Feedback/Complaints
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/AdminProfile" >
                 Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/SignIn" >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
)

}
export default AdminHomePage;