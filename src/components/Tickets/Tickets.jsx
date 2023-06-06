import React, { Component } from 'react';
import axios from 'axios';
import "./Tickets.css"

class Tickets extends Component {

    state = {
        data: [],
        currentPage: 1,
        itemsPerPage: 5,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('/getData/')
            .then(res => {
                // Sorting data based on 'purchase time'
                res.data.sort((a, b) => new Date(a['purchase time']) - new Date(b['purchase time']));
                this.setState({ data: res.data });
            })
            .catch(err => {
                console.error(err);
            });
    }
    
    

    handleClickNext = () => {
        this.setState({ currentPage: this.state.currentPage + 1 });
    }

    handleClickPrev = () => {
        if (this.state.currentPage > 1) {
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }

    render() {
        const { data, currentPage, itemsPerPage } = this.state;

        // Get current items
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <section className="Tickets">
                <div className="Tickets-holder">
                    <div className="Tickets-cover">
                        <div className="Tickets-texts" >
                            <p>Latest Tickets</p>
                            <div className="time-table">
                                {currentItems.map((item, index) => (
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
                            < div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <button onClick={this.handleClickPrev}>Prev</button>
                            <button onClick={this.handleClickNext}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Tickets;
