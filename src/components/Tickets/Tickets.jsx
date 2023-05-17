import React, { Component } from 'react';
import axios from 'axios';
import "./Tickets.css"

class Tickets extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('/getData/')
            .then(res => {
                this.setState({ data: res.data });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <section className="Tickets">
                <div className="Tickets-holder">
                    <div className="Tickets-cover">
                        <div className="Tickets-texts" >
                            <p>Lastest Tickets</p>
                            <div className="time-table">
                                {this.state.data.map((item, index) => (
                                    <div className="time-table-row" key={index}>
                                        <div className="time-table-row_shadow" />
                                        <div className="time-table-self">
                                            <div>{item['purchase time']}</div>
                                            <div>{item.name}</div>
                                            <div>{item.city}</div>
                                            <div className="small-btn"><p>SEE TICKETS</p></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Tickets;
