import "./rangeslider.css";
import React, { Component } from 'react';

export default class rangeslider extends Component {
    constructor(props) {
        super(props);
        this.handleSlider = this.handleSlider.bind(this);
    }

    handleSlider = (e) => {
        var range = e.target;
        console.log(range);
        var progress = ((range.value - range.min) / (range.max - range.min)) * 100;
        range.style.background = `linear-gradient(90deg, rgba(255,237,0,1) 0%, rgba(255,237,0,1) ${progress}%, rgba(255,255,255,0.4) ${progress}%, rgba(255,255,255,0.4) 100%)`;
    };

    render() {
        return (
            <div className="slider flex w-full">
                <input type="range" name="myrange" min="1" max="100" onInput={this.handleSlider} defaultValue={0} className="myrange w-full" id="range" />
            </div>
        )
    }
}