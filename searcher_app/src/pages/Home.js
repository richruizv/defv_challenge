import React from "react";
import {  Link } from "react-router-dom";
import { RAPIDAPIKEYS,RAPIDAPIURL } from "../utils/global";
import banner from "../assets/img/banner.jpg"
class Home extends React.Component {


  constructor(props) {
    super(props);
    this.recipes = []
    this.apikeys = RAPIDAPIKEYS

    this.state = {
      name: '',
      typing: false,
      isLoading: false,
      firstQuery: true,
      typingTimeout: 0,
      query: '',
      recipes: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.url = RAPIDAPIURL
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }


  findRecipe =(event) => {
    event.preventDefault();
    let query =  this.state.query

    this.setState({
      isLoading: true,
      firstQuery: false
     })

    //let data = {"results":[{"id":215435,"title":"Three-Cheese Pizza (For Cheese Lovers)","readyInMinutes":45,"servings":8,"sourceUrl":"http://www.myrecipes.com/m/recipe/three-cheese-pizza-for-cheese--50400000110662/","openLicense":0,"image":"three-cheese-pizza-for-cheese-lovers-215435.jpg"},{"id":323420,"title":"Grilled Cheese","readyInMinutes":55,"servings":4,"sourceUrl":"http://www.foodnetwork.com/recipes/tyler-florence/grilled-cheese-recipe.html","openLicense":0,"image":"grilled-cheese-323420.jpeg"},{"id":116679,"title":"Leek & Cheese Pie","readyInMinutes":75,"servings":4,"sourceUrl":"http://www.food.com/recipe/leek-cheese-pie-439117","openLicense":0,"image":"leek-amp-cheese-pie-2-116679.jpg"},{"id":121545,"title":"Potato Cheese Croquettes","readyInMinutes":35,"servings":4,"sourceUrl":"http://www.food.com/recipe/potato-cheese-croquettes-80842","openLicense":0,"image":"potato-cheese-croquettes-2-121545.jpg"},{"id":332296,"title":"Three Cheese and Artichoke Calzones","readyInMinutes":80,"servings":6,"sourceUrl":"http://www.foodnetwork.com/recipes/giada-de-laurentiis/three-cheese-and-artichoke-calzones-recipe.html","openLicense":0,"image":"three-cheese-and-artichoke-calzones-332296.jpeg"},{"id":403965,"title":"Herbed Macaroni and Cheese","readyInMinutes":30,"servings":6,"sourceUrl":"http://www.tasteofhome.com/Recipes/herbed-macaroni-and-cheese","openLicense":0,"image":"Herbed-Macaroni-and-Cheese-403965.jpg"},{"id":414947,"title":"Beef and Cheese Pie","readyInMinutes":60,"servings":8,"sourceUrl":"http://www.tasteofhome.com/recipes/beef-and-cheese-pie","openLicense":0,"image":"Beef-and-Cheese-Pie-414947.jpg"},{"id":421887,"title":"Country Cheese Snacks","readyInMinutes":15,"servings":16,"sourceUrl":"http://www.tasteofhome.com/Recipes/country-cheese-snacks","openLicense":0,"image":"Country-Cheese-Snacks-421887.jpg"},{"id":449798,"title":"Cauldron Cheese Ball","readyInMinutes":25,"servings":32,"sourceUrl":"http://www.tasteofhome.com/recipes/cauldron-cheese-ball","openLicense":0,"image":"Cauldron-Cheese-Ball-449798.jpg"},{"id":475345,"title":"Bleu Cheese Dip","readyInMinutes":5,"servings":8,"sourceUrl":"http://addapinch.com/cooking/2012/10/24/bleu-cheese-dip-recipe/","openLicense":0,"image":"Bleu-Cheese-Dip-475345.jpg"}],"baseUri":"https://spoonacular.com/recipeImages/","offset":0,"number":10,"totalResults":862,"processingTimeMs":344,"expires":1648773492206,"isStale":false}    
    
    /*this.setState({
      recipes : data.results,
      isLoading: false
    })*/
    fetch(this.url+'recipes/search?query='+query,
      {
        method : 'get' ,
        headers : {
              'X-RapidAPI-Host': this.apikeys['X-RapidAPI-Host'],
              'X-RapidAPI-Key': this.apikeys['X-RapidAPI-Key']
              }
      }
      )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          recipes : data.results,
          isLoading: false
        })
      });
  }



  render() {
    let {isLoading,firstQuery,recipes} = this.state;

    return <div>
          <section>
            <div className="img-banner" style={{background : 'url('+banner+')'}}>
              <div className="container-fluid">
                <div className="row pt-5">
                  <div className="col-md-12 my-3">
                    <h3  className="text-center text-cta">Find the ideal meal using your leftover ingredients!</h3>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <form onSubmit={this.findRecipe}>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control"  aria-label="" aria-describedby="basic-addon1" placeholder="what do you have available? ex: potato, cheese" value={this.state.query} onChange={this.handleChange} />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="banner-info">
                
              </div>
            </div>
            
          </section>
          <section>
            <div className="container mt-5">
             { !firstQuery && isLoading && <h4> Loading... </h4>}
             { !firstQuery && !isLoading &&
              <div className="row">
                { recipes.length > 0 && <h4> {recipes.length} results founded: </h4>}
                { recipes.length == 0 && <h4> We can't find results with these ingredient</h4> }
                {recipes.map(function(recipe,i) {
                  return <div  className="col-md-3" key={i}>
                          <div className="card mb-3" >
                              <div className="card-image" style={{background : 'url(https://spoonacular.com/recipeImages/'+recipe.image+')',backgroundRepeat : "no-repeat",backgroundSize : "100% 100%"}}></div>
                              <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <p  className="card-text ">{recipe.servings} servings</p>  
                                <p  className="card-text ">Ready in  {recipe.readyInMinutes} minutes</p>
                                <Link to={"/detail/"+recipe.id} className="btn btn-primary" style={{float : "right"}}>Check recipe</Link>
                              </div>
                            </div>
                        </div>;        
                  })}   
                </div>
              }
            </div>
            
            
              
                
        </section>
      </div>;
  }
};
  
  export default Home;