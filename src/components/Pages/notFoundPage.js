import React, { Component } from 'react'

export default class notFoundPage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("http://localhost:5000/users/5")
            .then(res => res.json())
            .then(data => this.setState({ apiResponse: data }));

    }

    componentDidMount() {
        this.callAPI();
    }
    render() {
        return (
            <div>
                Page Not Found!
                {this.state.apiResponse.age}
                
            </div>
        )
    }
}
