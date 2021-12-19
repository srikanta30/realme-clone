import React from "react";

export default class Times extends React.Component {
    state = {
        time: ""
    };

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.setState({ time });
    };
    render() {
        const { time } = this.state;
        return (
            <>
                <div>{time}</div>
            </>
        )
    }
}