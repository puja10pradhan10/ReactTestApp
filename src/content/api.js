import React from 'react';
// import axios from "axios";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, models: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();
            })
            .then(json => {
                console.log(json)
                this.setState({
                    models: json,
                    isLoaded: true
                });

                console.log(this.setState)
            });
    }

    render() {
        const { isLoaded, models } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return <div>{models.map(model => <div key={model.id}> {model.id}. {model.title}</div>)}</div>;
    }
}

export default Api;