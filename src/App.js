import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    "id": 1,
    "name": "Kimch",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg",
    rating: 4
  }, {
    "id": 2,
    "name": "Samgyeopsal",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1920px-Samgyeopsal-gui.jpg",
    rating: 4.5
  }, {
    "id": 3,
    "name": "Bibimbap",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/440px-Dolsot-bibimbap.jpg",
    rating: 4.8
  }
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}.</h1>
      <h4>rating: {rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
