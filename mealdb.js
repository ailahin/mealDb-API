const searchFood =()=> {
    const searchField= document.getElementById('search-field');

    const searchFieldText= searchField.value;
    //console.log(searchFieldText, 'clicked ');

   searchField.value='';

    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    
    //console.log(url);

    fetch(url)         
    .then(response=> response.json())
    //.then(data=>console.log(data))
    .then(data=> displaySearchResult(data.meals))
}

const displaySearchResult=(meals)=> {
    //console.log(meals);

    const searchResult= document.getElementById('search-result');
     // searchResult.innerHTML= '';  this line will remove previous search result. there are few ways to remove previous search result. this is one of them.

      searchResult.textContent='';
    //searchResult.innerHTML= '';
    const div= document.createElement('div');
    div.classList.add('col');


    
   for (const meal of  meals){
       // console.log(meal);
    
  //if this three line here if I search F it will show all the meals  of F related 

        const searchResult= document.getElementById('search-result');
        const div= document.createElement('div');
        div.classList.add('col');
    
      
    
    div.innerHTML=` 
    <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                 <img width-50% src="${meal.strMealThumb
                 }"
                 class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
                <p> ${meal.strInstructions.slice(0,200)} </p>
        </div>
  </div> `


    searchResult.appendChild(div);
   }
};

const loadMealDetail= mealId=>{

   console.log(mealId, 'dekar');

    const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(response=> response.json())
    .then(data=> displayMealDetails(data.meals[0]));
}

const displayMealDetails= meal=>{
    console.log(meal);

    const mealDetails= document.getElementById('meal-details');
    mealDetails.textContent='';
    const div= document.createElement('div');
    div.classList.add('card');
    div.innerHTML= `

    
             <img src="${meal.strMealThumb
             }" class="card-img-top rounded-circle " alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(150,250)}.</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
  </div>
    
    `
    mealDetails.appendChild(div);
};

//displaymeals();