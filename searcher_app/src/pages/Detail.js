import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { RAPIDAPIKEYS,RAPIDAPIURL } from "../utils/global";


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Detail extends React.Component {
    

    constructor(props) {        
        super(props);
        this.state = {
            isLoading: false,
            recipe: {
                extendedIngredients: []
            }
        }
        this.apikeys = RAPIDAPIKEYS
        this.url = RAPIDAPIURL
    }

    componentDidMount() {
        let { id } = this.props.params;
        this.setState({ isLoading : false})
        fetch(this.url+'recipes/'+id+'/information',
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
            this.setState({ isLoading : true , recipe : data})
        });
        
    }

    render() {
        let {isLoading,recipe} = this.state;

        if(!isLoading) {
            return (
            <div> Loading... </div>
            )
        }else{
            return <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                            <Link to="/" className="btn btn-link">Back to menú</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid rounded" title={recipe['title']} src={recipe['image']} />
                            </div>
                            <div className="col-md-6">
                                <h2> hi  {recipe['title']}</h2>
                                
                                {recipe['vegetarian'] && <span className="badge bg-success ml-3">Vegetarian</span>}
                                {recipe['cheap'] && <span className="badge bg-success ml-3">Cheap</span>}
                                {!recipe['veryHealthy'] && <span className="badge bg-success ml-3">Very Healthy</span>}
                                
                                <div className="row">
                                    <div className="col-6">
                                        <p>Ready in<b> {recipe['readyInMinutes']}</b> Minutes</p>
                                    </div>
                                    <div className="col-6">
                                        <p>Makes <b>{recipe['servings']}</b> servings</p>
                                    </div>
                                </div>
                                <p><b>Instructions:</b></p>
                                <p>{recipe['instructions']}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-8 offset-md-2">
                                <h4>List of ingredients:</h4>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    recipe['extendedIngredients'].map(function(ingredient,i) {
                                        return <tr  key={i}>
                                                    <td><img width="50" title={ingredient['aisle']} src={" https://spoonacular.com/recipeImages/"+ingredient['image']} /></td>
                                                    <td>{ingredient['original']}</td>
                                                    <td>{ingredient['measures']['metric']['amount']} {ingredient['measures']['metric']['unitLong']}</td>
                                                </tr>;
                                        })}  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>;
        }
        
    };

}
export default withParams(Detail);
