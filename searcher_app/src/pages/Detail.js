import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { RAPIDAPIKEYS } from "../utils/global";


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
    }

    componentDidMount() {
        let { id } = this.props.params;
        this.setState({ isLoading : false})
        /*fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+id+'/information',
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
        
        });*/

        let data = {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 7,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 24,
            "healthScore": 2,
            "creditsText": "My Recipes",
            "sourceName": "My Recipes",
            "pricePerServing": 105.93,
            "extendedIngredients": [
                {
                    "id": 2049,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "thyme.jpg",
                    "consistency": "solid",
                    "name": "fresh thyme leaves",
                    "nameClean": "thyme",
                    "original": "2 tablespoons fresh thyme leaves",
                    "originalName": "fresh thyme leaves",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "1 tablespoon truffle or extra-virgin olive oil",
                    "originalName": "truffle or extra-virgin olive oil",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [
                        "extra-virgin"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1033,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "solid",
                    "name": "parmesan cheese",
                    "nameClean": "parmesan",
                    "original": "2 tablespoons finely grated Parmesan cheese",
                    "originalName": "finely grated Parmesan cheese",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "finely grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1028,
                    "aisle": "Cheese",
                    "image": "shredded-cheese-white.jpg",
                    "consistency": "solid",
                    "name": "part-skim mozzarella cheese",
                    "nameClean": "part skim mozzarella cheese",
                    "original": "3/4 cup grated part-skim mozzarella cheese",
                    "originalName": "grated part-skim mozzarella cheese",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1037,
                    "aisle": "Cheese",
                    "image": "ricotta.png",
                    "consistency": "solid",
                    "name": "part-skim ricotta cheese",
                    "nameClean": "low fat ricotta cheese",
                    "original": "1/2 cup part-skim ricotta cheese",
                    "originalName": "part-skim ricotta cheese",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 93770,
                    "aisle": "Pasta and Rice;Refrigerated",
                    "image": "pizza-dough.jpg",
                    "consistency": "solid",
                    "name": "pizza crust",
                    "nameClean": "prepared pizza crust",
                    "original": "prebaked pizza crust",
                    "originalName": "prebaked pizza crust",
                    "amount": 8,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 8,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 215435,
            "title": "Three-Cheese Pizza (For Cheese Lovers)",
            "readyInMinutes": 45,
            "servings": 8,
            "sourceUrl": "http://www.myrecipes.com/m/recipe/three-cheese-pizza-for-cheese--50400000110662/",
            "image": "https://spoonacular.com/recipeImages/215435-556x370.jpg",
            "imageType": "jpg",
            "summary": "Three-Cheese Pizza (For Cheese Lovers) might be just the <b>Mediterranean</b> recipe you are searching for. This recipe makes 8 servings with <b>250 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> each. For <b>$1.06 per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. A mixture of part-skim mozzarella cheese, olive oil, parmesan cheese, and a handful of other ingredients are all it takes to make this recipe so delicious. 1 person has made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 27%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/cheese-fondue-is-for-lovers-512379\">Cheese Fondue Is For Lovers</a>, <a href=\"https://spoonacular.com/recipes/cheese-lovers-pasta-roll-ups-266552\">Cheese Lovers Pasta Roll Ups</a>, and <a href=\"https://spoonacular.com/recipes/rainbow-veggie-cheese-lovers-105410\">Rainbow Veggie Cheese Lovers</a> for similar recipes.",
            "cuisines": [
                "Mediterranean",
                "Italian",
                "European"
            ],
            "dishTypes": [
                "side dish"
            ],
            "diets": [],
            "occasions": [],
            "winePairing": {
                "pairedWines": [
                    "chianti",
                    "trebbiano",
                    "verdicchio"
                ],
                "pairingText": "Chianti, Trebbiano, and Verdicchio are great choices for Italian. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes. One wine you could try is Castello di Monsanto Il Poggio Chianti Classico Riserva. It has 4.8 out of 5 stars and a bottle costs about 40 dollars.",
                "productMatches": [
                    {
                        "id": 450740,
                        "title": "Castello di Monsanto Il Poggio Chianti Classico Riserva",
                        "description": "Born in the vineyard “Il Poggio” (5.5 Ha, 310 metres a.s.l.) from which in 1962, it took its name: it is the first Chianti Classico Cru. Made of 90% Sangiovese and from 7% Canaiolo and 3% Colorino, it ages for 20 months in French oak barrels. Today it represents the most prestigious product of the company, appreciated all over the world. It is produced only in the best vintages. The company has chosen to keep a considerable quantity of bottles of this wine in the cellar being the permanent archives, able to tell the history of Castello di Monsanto",
                        "price": "$39.99",
                        "imageUrl": "https://spoonacular.com/productImages/450740-312x231.jpg",
                        "averageRating": 0.96,
                        "ratingCount": 8,
                        "score": 0.9199999999999999,
                        "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcastello-di-monsanto-il-poggio-chianti-classico-riserva-1995%2F15534"
                    }
                ]
            },
            "instructions": "Place a prebaked pizza crust on a shallow baking pan. Dollop ricotta cheese evenly over crust. Sprinkle with mozzarella cheese, Parmesan cheese, and fresh thyme leaves. Bake 8 minutes or until top is golden brown and cheese is melted. Drizzle with truffle or extra-virgin olive oil. Cut into 8 slices; serve.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Place a prebaked pizza crust on a shallow baking pan. Dollop ricotta cheese evenly over crust.",
                            "ingredients": [
                                {
                                    "id": 1036,
                                    "name": "ricotta cheese",
                                    "localizedName": "ricotta cheese",
                                    "image": "ricotta.png"
                                },
                                {
                                    "id": 93770,
                                    "name": "prepared pizza crust",
                                    "localizedName": "prepared pizza crust",
                                    "image": "pizza-dough.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Sprinkle with mozzarella cheese, Parmesan cheese, and fresh thyme leaves.",
                            "ingredients": [
                                {
                                    "id": 1012049,
                                    "name": "fresh thyme",
                                    "localizedName": "fresh thyme",
                                    "image": "thyme.jpg"
                                },
                                {
                                    "id": 1026,
                                    "name": "mozzarella",
                                    "localizedName": "mozzarella",
                                    "image": "mozzarella.png"
                                },
                                {
                                    "id": 1033,
                                    "name": "parmesan",
                                    "localizedName": "parmesan",
                                    "image": "parmesan.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Bake 8 minutes or until top is golden brown and cheese is melted.",
                            "ingredients": [
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 8,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Drizzle with truffle or extra-virgin olive oil.",
                            "ingredients": [
                                {
                                    "id": 1034053,
                                    "name": "extra virgin olive oil",
                                    "localizedName": "extra virgin olive oil",
                                    "image": "olive-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Cut into 8 slices; serve.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null
        }
        
        this.setState({ isLoading : true , recipe : data})
    }

    render() {
        let {isLoading,recipe} = this.state;

        if(!isLoading) {
            return (
            <div> Loading... </div>
            )
        }else{
            return <div>
            <div>
                <Link to="/">Back</Link>
                <div>
                <img title={recipe['title']} src={recipe['image']} />

                </div>
                <div>
                    <h2> hi  {recipe['title']}</h2>
                    
                    {recipe['vegetarian'] && <span>Vegetarian</span>}
                    {recipe['cheap'] && <span>Cheap</span>}
                    {!recipe['veryHealthy'] && <span>Very Healthy</span>}
                    
                    <p>Ready in {recipe['readyInMinutes']} Minutes</p>
                    <p>{recipe['servings']} servings</p>
                    <p>{recipe['instructions']}</p>
                </div>
                <h4>List of ingredients:</h4>
                <table>
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
                        return <tr  className={"row"} key={i}>
                                    <td><img width="100px" title={ingredient['aisle']} src={" https://spoonacular.com/recipeImages/"+ingredient['image']} /></td>
                                    <td>{ingredient['original']}</td>
                                    <td>{ingredient['measures']['metric']['amount']} {ingredient['measures']['metric']['unitLong']}</td>
                                </tr>;
                        })}  
                    </tbody>
                </table>
            </div>
        </div>;
        }
        
    };

}
export default withParams(Detail);
