import React, { Component } from 'react';


class ImageDisplay extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }
 
componentDidMount(){
fetch ('http://api.giphy.com/v1/gifs/search?q=dog&api_key=zhr9DqsW147pBa81cCKYpYVTo78NIs6S&limit=5')
.then(results=>{
   console.log("firstResults",results);
  return results.json();
}).then(data=>{
  console.log("data", data);
let pictures = data.data.map((pic) =>{
  return pic.images.downsized_medium.url;

    
    

})
  this.setState({pictures:pictures});
 console.log("state", this.state.pictures);
})
}

render(){
  return(
    <div className="container" >
  
      {this.state.pictures.map(pic => <img src={pic} height="150" />)}
    </div>
    )
}
}

export default ImageDisplay;
