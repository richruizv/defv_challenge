import React, {useState,useEffect } from "react";
import {  Link } from "react-router-dom";

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
  }

  state = {
    name: '',
    typing: false,
    typingTimeout: 0
  }
  
  changeName = (event) => {
    const self = this;
    
    if (self.state.typingTimeout) {
       clearTimeout(self.state.typingTimeout);
    }

    self.setState({
       value: event.target.value,
       typing: false,
       typingTimeout: setTimeout(function () {
           self.findRecipe(self.state.value);
         }, 2000)
    });
  }

  findRecipe =(stateName) => {
    let result = {"results":[{"id":215435,"title":"Three-Cheese Pizza (For Cheese Lovers)","readyInMinutes":45,"servings":8,"sourceUrl":"http://www.myrecipes.com/m/recipe/three-cheese-pizza-for-cheese--50400000110662/","openLicense":0,"image":"three-cheese-pizza-for-cheese-lovers-215435.jpg"},{"id":323420,"title":"Grilled Cheese","readyInMinutes":55,"servings":4,"sourceUrl":"http://www.foodnetwork.com/recipes/tyler-florence/grilled-cheese-recipe.html","openLicense":0,"image":"grilled-cheese-323420.jpeg"},{"id":116679,"title":"Leek & Cheese Pie","readyInMinutes":75,"servings":4,"sourceUrl":"http://www.food.com/recipe/leek-cheese-pie-439117","openLicense":0,"image":"leek-amp-cheese-pie-2-116679.jpg"},{"id":121545,"title":"Potato Cheese Croquettes","readyInMinutes":35,"servings":4,"sourceUrl":"http://www.food.com/recipe/potato-cheese-croquettes-80842","openLicense":0,"image":"potato-cheese-croquettes-2-121545.jpg"},{"id":332296,"title":"Three Cheese and Artichoke Calzones","readyInMinutes":80,"servings":6,"sourceUrl":"http://www.foodnetwork.com/recipes/giada-de-laurentiis/three-cheese-and-artichoke-calzones-recipe.html","openLicense":0,"image":"three-cheese-and-artichoke-calzones-332296.jpeg"},{"id":403965,"title":"Herbed Macaroni and Cheese","readyInMinutes":30,"servings":6,"sourceUrl":"http://www.tasteofhome.com/Recipes/herbed-macaroni-and-cheese","openLicense":0,"image":"Herbed-Macaroni-and-Cheese-403965.jpg"},{"id":414947,"title":"Beef and Cheese Pie","readyInMinutes":60,"servings":8,"sourceUrl":"http://www.tasteofhome.com/recipes/beef-and-cheese-pie","openLicense":0,"image":"Beef-and-Cheese-Pie-414947.jpg"},{"id":421887,"title":"Country Cheese Snacks","readyInMinutes":15,"servings":16,"sourceUrl":"http://www.tasteofhome.com/Recipes/country-cheese-snacks","openLicense":0,"image":"Country-Cheese-Snacks-421887.jpg"},{"id":449798,"title":"Cauldron Cheese Ball","readyInMinutes":25,"servings":32,"sourceUrl":"http://www.tasteofhome.com/recipes/cauldron-cheese-ball","openLicense":0,"image":"Cauldron-Cheese-Ball-449798.jpg"},{"id":475345,"title":"Bleu Cheese Dip","readyInMinutes":5,"servings":8,"sourceUrl":"http://addapinch.com/cooking/2012/10/24/bleu-cheese-dip-recipe/","openLicense":0,"image":"Bleu-Cheese-Dip-475345.jpg"}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":10,"totalResults":862,"processingTimeMs":344,"expires":1648773492206,"isStale":false}
  /*    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query='+stateName,
    {
      method : 'get' ,
      headers : {
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '866b9f3d96msh3ac80f3483ef881p18abb4jsn1c02f01da474'
        }
    }
    )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      //this.setState({ totalReactPackages: data })
    });*/
  }


  render() {
    return <div>
          <section>
            <h2>Fast finder Recipes</h2>
            <p>Find the ideal meal for you with your available ingredients:</p>
            <label>Put your items here</label>
            <input placeholder="potato, cheese"
            onChange={this.changeName}  />
          </section>
          <section>
            <p>Results</p>
            <div>
              <div>
                
                <img title="Recipe 1 image" />
                <p>Recipe 1</p>
                <Link to="/Description">Check repice</Link>
              </div>
            </div>
        </section>
      </div>;
  }
};
  
  export default Home;