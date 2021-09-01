import React from "react";
import PropTypes from "prop-types";

const foodLike = [
  {
    id:1,
    name:"kimchi",
    image:"https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating:3
  },{
    id:2,
    name:"gimbab",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating:2
  },{
    id:3,
    name:"sushi",
    image:"https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F21622F3756405A970C",
    rating:4
  }
]

foodLike.PropTypes = {
  id:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired

}

function Food({name, image, rating}){
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} title={name} />
      <h4>rating : {rating}</h4>

    </div>

  );
}

function App() {
  return (
    <div>
      <div className="food">
        {foodLike.map(
          food => <Food key={food.id} name={food.name} image={food.image} rating={food.rating}/>
        )}
      </div>
    </div>
  );
}

export default App;
