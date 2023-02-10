import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Raghav</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/post'>Post</Link></li>
                            <li><Link to='profile'>Profile</Link></li>
                       
                        </ul>
                    </div>
                    {/* <div className='btn btn-primary'><Link to={`/profile/JavaScript?page=1`}>Deatils</Link>Profile</div> */}
                </div>
            </nav>
        </div>
    )
}

export default Header