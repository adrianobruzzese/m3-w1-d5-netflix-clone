import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleMovie from './SingleMovie';

class NetflixCarousel extends Component {
  state = {
    movies: [], //array da riempire con la chiamata
    isLoaded: false, //i dati hanno caricato?
    settings: {
      //settings del carosello
      // https://react-slick.neostack.com
      // save for later
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1028,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    },
  };

  componentDidMount = async () => {
    const endpoint = `http://www.omdbapi.com/?apikey=47c45f34&movie&s=${this.props.searchQuery}`; //cambiare props su NetflixMain!!! -> isLoaded = true

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const movies = await response.json();
        this.setState({
          movies,
          isLoaded: true,
        });
        console.log('success while fetching');
      } else {
        console.log('error while fetching');
      }
    } catch (error) {
      console.log('Error fetching data:', error); // More descriptive error logging
    }
  };

  render() {
    const { movies, settings } = this.state;
    const { stile } = this.props;
  
    return (
      <Slider {...settings} className={stile}>
        {movies.Search?.map(movie => (
          <div key={movie.imdbID}>
            <SingleMovie img={movie.Poster} />
          </div>
        ))}
      </Slider>
    );
  }
}  

export default NetflixCarousel;
