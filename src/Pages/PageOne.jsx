import React, { Component } from 'react';
import NavBar from "../components/NavBar/NavBar.jsx"
import Banner from "../components/Banner/Banner.jsx";
import LastAlbum from "../components/LastAlbum/LastAlbum";
import Tour from "../components/Tour/Tour";
import Live from "../components/Live/Live";
import Blog from "../components/Blog/Blog";
import Tickets from '../components/Tickets/Tickets.jsx';
import Footer from "../components/Footer/Footer";

class PageOne extends Component {
    state = {}
    render() {
        return (
            <>
                <NavBar />
                <Banner />
                <LastAlbum />
                <Tour />
                <Live />
                <Blog />
                <Tickets />
                <Footer/>
            </>
        );
    }
}

export default PageOne;
