
import React, { Component } from 'react';
import "./Tickets.css"

// import CustomPlayPause from './CustomPlayPause'

// import shad from "../../resources/audios/shad.mp3";





class Tickets extends Component {

    state = {
        scroll: 0,
    }
    render() {
        // window.onscroll = () => {
        //     if (document.documentElement.scrollTop > 1400)
        //         this.setState({ scroll: (document.documentElement.scrollTop-1400)*1 })
        //     console.log(document.documentElement.scrollTop)
        //     console.log(this.state.scroll)
        // }
        return (
            <section className="Tickets">
                <div className="Tickets-holder">
                    {/* <img src={TicketsIMG} style={{ top: "-" + this.state.scroll + "px" }} alt="" /> */}
                    <div className="Tickets-cover">
                        <div className="Tickets-texts" >
                            <p>Lastest Tickets</p>
                            <div className="time-table">
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Massey Hall</div>
                                        <div>Camden, NJ</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Electric Factory</div>
                                        <div>Chicago, IL</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Manhattan Center</div>
                                        <div>Seattle, WA</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>{"BB&T Pavilion"}</div>
                                        <div>Oakland, CA</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Massey Hall</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Aragon Ballroom</div>
                                        <div>Los Angeles</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>WaMu Theater</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Fox Theater</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Shrine Expo Hall</div>
                                        <div>Toronto, ON</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>
                                <div className="time-table-row">
                                    <div className="time-table-row_shadow" />
                                    <div className="time-table-self">
                                        <div>May 24</div>
                                        <div>Electric Factory</div>
                                        <div>Philadelphia, PA</div>
                                        <div className="small-btn"><p>SEE TICKETS</p></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

export default Tickets;
