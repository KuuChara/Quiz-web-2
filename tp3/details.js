function createImageTag(url, alt){
    imageContainer = document.createElement("img");
    imageContainer.classList.add("image")
    imageContainer.src = url;
    imageContainer.alt = alt;

    return imageContainer;
}
function createContent(element){
    let content = document.createElement("div");

    content.innerHTML =`
    <h2>`+element.difficulty+`</h2>
    <h2>Temps de preparation</h2>
    <p>`+element.prepTimeMinutes+`</p>
    <h2>Temps de cuisson</h2>
    <p>`+element.cookTimeMinutes+`</p>
    <h2>Ingredients</h2>
    <p>`+element.ingredients+`</p>
    <h2>Étapes</h2>
    <p>`+element.instructions+`</p>
    `

    
    return content;
}

let params = new URLSearchParams(document.location.search);
let id = params.get("id"); 

fetch('https://dummyjson.com/recipe/' + id)
.then(res => res.json())
.then(recipe => {
    console.log(recipe)

    let mainContent = document.getElementById("main-content");
    let title = document.getElementById("title");
    title.innerText = recipe.name;

    mainContent.appendChild(createImageTag(recipe.image,recipe.name));
    mainContent.appendChild(createContent(recipe));
})
