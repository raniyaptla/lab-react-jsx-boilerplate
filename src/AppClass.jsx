
import "./App.css"
import React from 'react';
import { Component } from "react";


export default class AppClass extends Component{
  
   render() {
   
    const imgData = this.props.data;

    return (
      <div className="App">
        <h1>Kalvium Gallery-Class Component</h1>
        <div className="image-container">
          {imgData.map((image) => (
            <img key={image.id} src={image.img} alt="image" />
          ))}
        </div>
      </div>
    );
  }

}

