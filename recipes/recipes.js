

let result
// let userInput = document.getElementById('userInput')
// function getRecipesFromIngredient(ingredientName){
  //fetch request with correct url
  // fetch("https://api.edamam.com/search?q=${ingredientName}&app_id=8e3c8927&app_key=2b4db69ee5e91a3ca5d9abe068e41287&from=0&to=5&calories=600-1000&Diet=balanced")
  // return hits
// }

function textInput(){
  recipeHits = getRecipesFromIngredient(textBox.value)
}

fetch("https://api.edamam.com/search?q=italian&app_id=8e3c8927&app_key=2b4db69ee5e91a3ca5d9abe068e41287&from=0&to=10&calories=1000-1500&Diet=balanced")
.then(response=>response.json())
.then(foodjson=>{
  result=foodjson
  // console.log(foodjson)
  console.log(result.hits)

  const hits = result.hits

  let foodList = document.getElementById("foodList")
  let foodListLength = result.hits.length
  console.log(foodListLength)

  hits.forEach(hit => {
    foodList.insertAdjacentHTML('beforeend', `
    <label>${hit.recipe.label}</label>
    <img src=${hit.recipe.image}>
    <a href="${hit.recipe.url}"></a>


    `)
  })

  // foodList.insertAdjacentHTML('beforeend', `
  // <label>${hit.recipe.label}</label>
  // <img src=${hit.recipe.image}"">
  // <label>${hit.recipe.url}</label>
  //
  //
  // `)

  // for (let i=0; i < foodListLength; i++ ) {
  //  foodList.insertAdjacentHTML('beforeend', foodItem(i)) ;
  // }
  //
  // function foodItem(i) {return `
  // <li><h2>${hits[i].hits.recipe.label}</h2></li>
  // <img src=${hits[i].recipe.image} />
  // <label>${hits[i].recipe.url}<label>
  //
  //   `

  // }

})
