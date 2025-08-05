import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-light fixed-top   ">
        <div className="container-fluid pt-2 pb-2 ">
            
            <Link className="navbar-brand navbar-brand-custom mx-5 manobahv" to="/">Roster</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link me-5 nav-link-custom " to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item me-5 mt-2">
                    <label>Roster</label>
                                     <select className=' border-0'>
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        </select></li>
                                            <li className="nav-item me-5 mt-2">
                    <label>Communication</label>
                                     <select className=' border-0'>
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        </select></li>

                    <li className="nav-item me-5 mt-2">
                    <label>CRM</label>
                                     <select className=' border-0'>
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        </select></li>
                                         <li className="nav-item me-5 mt-2">
                    <label>Contact</label>
                                     <select className=' border-0'>
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        </select></li>

                                  <li className="nav-item me-5 mt-2">
                                    <label>More</label>
                                     <select className=' border-0'>
                                        <option value=""></option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        </select></li></ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header
