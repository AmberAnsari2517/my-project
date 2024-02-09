import React from 'react'
export const Nav = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
        <a className="nav-link" href="/">
          <i class="fa-solid fa-house" style={{color:'green'}}></i>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">

                <li className="nav-link active me-3" aria-current="page" href="/">
                  Work                 <i class="fa-solid fa-briefcase"></i>

                </li>

              </li>
              <li className="nav-item">

                <a className="nav-link" href="/">

                 
                  Services  <i class="fa-solid fa-fax"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About <i class="fa-solid fa-heart"></i></a>
              </li>

            </ul>
          </div>
          <div>
            <strong>blog  <i class="fa-brands fa-blogger"></i></strong>
            <button style={{ backgroundColor: 'green', borderRadius: '13px', color: 'white', marginLeft: 20 }}>Planner </button>
          </div>
        </div>
      </nav>
      {/* nav bar end*/}

    </div>



  )
}
