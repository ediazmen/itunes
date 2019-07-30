import React, { Component } from 'react';
import './display.css';

class Display extends Component {

    constructor(props) {
        super(props);

        this.state = { value: '', url: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // console.log('Song submitted: ' + this.state.value);
        fetch("https://itunes.apple.com/search?media=music&term=" + this.state.value)
            .then((resp) => resp.json())
            .then((result) => {
                this.setState({ url: result.results[0].previewUrl })
            }).catch((error) => {
                error = "error";
            });;
        event.preventDefault();
    }


    render() {
        return (
            <div className="display">
                <h1>Itunes List API</h1>
                <form onSubmit={this.handleSubmit} {...this.state}>
                    <label>
                        Song Name:
                            <input type="text"
                            value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.URL}
                <audio
                    className={"spacing"}
                    src={this.state.url}
                    autoPlay
                    controls={"controls"} >
                </audio>
            </div>
        )
    }
}

export default Display