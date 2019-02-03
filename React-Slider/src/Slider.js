import React, { Component } from "react";
import "./Slider.css"

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: 24,
      start: 0,
      end: 10,
      labelMode: "mid"
    };
  }

  MinSlider = () => {
    return (
      <div
        data-slider="min"
        onDragStart={this.onDragStart}
        onTouchStart={this.onDragStart}
        draggable
        className="slider-thumb slider-thumb-min"
      />
    );
  };

  MaxSlider = () => {
    return (
      <div
        data-slider="max"
        onDragStart={this.onDragStart}
        onTouchStart={this.onDragStart}
        draggable
        className="slider-thumb slider-thumb-max"
      />
    );
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDragStart = e => {
    let slider = e.target.dataset.slider;
    this.sliderType = slider;
  };

  onDrop = (e, target) => {
    let source = this.sliderType;
    let slot = Number(e.target.dataset.slot);

    if (isNaN(slot)) return;

    if (source === "min") {
      if (slot >= this.state.end) return;
      this.setState(
        {
          start: slot
        },
        () => {
          console.log(this.state);
        }
      );
    } else if (source === "max") {
      if (slot <= this.state.start) return;
      this.setState(
        {
          end: slot
        },
        () => {
          console.log(this.state);
        }
      );
    }
    this.sliderType = null;
  };

  render() {
    let scale = [];
    let slider = [];
    let currentScale = [];
    let minThumb = null;
    let maxThumb = null;

    for (let i = 0; i < this.state.slots; i++) {
      let label = i;
      scale.push(
        <div key={i} className="slot-scale">
          {label}
        </div>
      );
      let currentLabel = "";

      if (i === this.state.start || i === this.state.end) {
        currentLabel = i;
      }

      currentScale.push(
        <div key={i} className="slot-scale-selected">
          {currentLabel}
        </div>
      );
      if (i === this.state.start) {
        minThumb = <this.MinSlider />;
      } else if (i === this.state.end) {
        maxThumb = <this.MaxSlider />;
      } else {
        minThumb = null;
        maxThumb = null;
      }
      if (i === this.state.start) {
        minThumb = <this.MinSlider />;
      } else if (i === this.state.end) {
        maxThumb = <this.MaxSlider />;
      } else {
        minThumb = null;
        maxThumb = null;
      }

      // Create the JSX for the ‘slider’
      //The important code piece here is the dragover event.This is required for the HTML drop to work correctly.

      let lineClass = "line";

      if (i >= this.state.start && i < this.state.end) {
        lineClass += " line-selected";
      }
      slider.push(
        <div
          data-slot={i}
          onDragOver={this.onDragOver}
          onTouchMove={this.onDragOver}
          onTouchEnd={this.onDrop}
          onDrop={this.onDrop}
          key={i}
          className="slot"
        >
          <div data-slot={i} className={lineClass} />
          <span className="scale-mark" />
          {minThumb}
          {maxThumb}
        </div>
      );
    }

    return (
      <div>
        <h2>React Slider</h2>
        <div className="example1">
          <div className="slider-scale">{scale}</div>
          <div className="slider">{slider}</div>
          <div className="slider-selected-scale">{currentScale}</div>
        </div>
      </div>
    );
  }
}

export default RangeSlider;
