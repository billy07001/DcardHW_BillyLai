import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../../../style/App.css';

class ChanghuaCounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            spotLimit: 30
        }
    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    componentDidMount() {
        fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/ChanghuaCounty?$format=JSON')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');
        if (this.isBottom(wrappedElement)) {
            this.setState({ spotLimit: this.state.spotLimit + 30 })
        }
    };




    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return (<div>Loading...</div>)
        }
        else {
            return (
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <td>景點名稱</td>
                                <td>景點位址</td>
                            </tr>
                        </thead>
                        <tbody>
                            {items.slice(0, this.state.spotLimit).map((item, index) => (
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Description}</td>
                                </tr>
                            ))};
                      </tbody>
                    </Table>
                </div>
            )

        }
    }
}

export { ChanghuaCounty };