function drawCard(element){
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id",element.id)
    card.setAttribute("data-name",element.name)

    card.innerHTML =`
        <div class="col">
            <img src="`+element.image+`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">`+element.name+`</h5>
                <p class="card-text"><strong>`+element.difficulty+`</strong></p>
            </div>
            <div class="card-body">
                <button class="btn btn-primary btn-detail">Click me</button>
            </div>
        </div>
    `

    
    return card;
}

function drawTable(element){
    let row = document.createElement("tr");
    row.setAttribute("data-id",element.id)

    row.innerHTML =`
    <th scope="row">`+element.name+`</th>
    <td>`+element.rating+`</td>
    <td>`+element.prepTimeMinutes+`</td>
    <td>`+element.difficulty+`</td>
    <td><a href="details.html?id=`+element.id+`" class="row-link">Click here</a></td>
    `

    
    return row;
}

fetch('https://dummyjson.com/recipes?limit=8')
.then(res => res.json())
.then(json => json.recipes)
.then(recipes => {
    console.log(recipes)
    let cardContainer = document.getElementById("card-container")
    recipes.forEach(element => {
        cardContainer.appendChild(drawCard(element))
    });
}).then(()=>{
    btnDetail = document.getElementsByClassName("btn-detail");

    for (let index = 0; index < btnDetail.length; index++) {
        const element = btnDetail[index];
        const id = btnDetail[index].closest(".card").getAttribute("data-id");

        element.addEventListener("click",()=>{
            window.location.href = "details.html?id=" + id
        })
    }
})

fetch('https://dummyjson.com/recipes?limit=50')
.then(res => res.json())
.then(json => json.recipes)
.then(recipes => {
    console.log(recipes)
    let tbContainer = document.getElementById("table-body")
    recipes.forEach(element => {
        tbContainer.appendChild(drawTable(element))
    });
}).then(()=>{
    rowDetail = document.getElementsByClassName("row-link");

    for (let index = 0; index < btnDetail.length; index++) {
        const element = rowDetail[index];
        const id = rowDetail[index].closest(".row").getAttribute("data-id");

        element.addEventListener("click",()=>{
            window.location.href = "details.html?id=" + id
        })
    }
})