import React, { Component } from 'react';
import "./Slide.css";
import Slider from 'react-slick';

class SimpleSlider extends Component {
  state = {
    sentence:"dog",
    images: [

    ]
  }
constructor(props){
  super(props)
}
componentDidMount(){
  this.giphyGetData();
}
giphyGetData(){
  console.log("****",this.props.sentence);
  const query = this.props.sentence;
  fetch ('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=zhr9DqsW147pBa81cCKYpYVTo78NIs6S&limit=12&rating=g')
  .then(results=>{
    console.log("firstResults",results);
    return results.json();
  }).then(data=>{
    console.log("data", data);
    let pictures = data.data.map((pic) =>{
      return pic.images.downsized_medium.url;
    })
    this.setState({images:pictures});
    console.log("state", this.state.pictures);
  })
}
saveImage(e){
  console.log(e);
  this.props.handler(e);
}

  render() {

     const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className='container' >
        <Slider {...settings}>
          {this.state.images.map(image => <div><img src={image} height="200" width="300" onClick={() => this.props.handler(image)} /></div>)}
        </Slider>
      </div>
    );
  }
};


export default SimpleSlider;
