import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Post from './Post'
import Profile from './Profile'
import PostDetails from './PostDetails'


const Routing = () => {
    return (
        <BrowserRouter>
            <center>
                <Header />
            </center>
            <hr />
            <div className='container'>
                <Route exact path='/' component={Home} />
                <Route exact path='/post' component={Post} />
                <Route exact path='/profile' component={Profile} />
                <Route path='/post/:topic?page' component={PostDetails} />
            </div>
            <hr />
            <center>
                <Footer />
            </center>
        </BrowserRouter>

    )
}
export default Routing