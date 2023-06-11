import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark mh-50">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            UBER
          </a>
          <div className="btn-group">
            <button
              type="button"
              className="btn  dropdown-toggle profileebtn text-light border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="ProfilePhoto"
                src="https://i.etsystatic.com/9277560/r/il/84c062/2456585074/il_570xN.2456585074_k2mr.jpg"
                alt=""
              />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  My trip
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Wallet
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Manage account
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Settings
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
