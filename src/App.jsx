import './App.css';

// import React from 'react';



function App(props) {
  // code here
  console.log(props.data);
  let Data=props.data;
  

  return (
    <div className="App">
      <h1>Kalvium Gallery</h1>
      <div className="image-container">
        {Data.map(image => (
          <img key={image.id} src={image.img} alt="image"/>
        ))}
      </div>
    </div>
  );


}

export default App;
