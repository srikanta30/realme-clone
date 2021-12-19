import React from "react";

export default class Dates extends React.Component {
    state = {
        date: ""
    };

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        var today = new Date(),
            date = today.getDate() + "-" + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({ date });
    };
    render() {
        const { date } = this.state;
        return (
            <>
                <div>{date}</div>
            </>
        )
    }
}