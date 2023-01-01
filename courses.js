var courses = [{
        image: './images/courses/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: './images/courses/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: './images/courses/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: './images/courses/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: './images/courses/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/courses/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/courses/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: './images/courses/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: './images/courses/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: './images/courses/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/courses/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/courses/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/courses/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: './images/courses/cssColors.png',
        title: 'css colors',
        category: 'CSS',
        price: 29.9
    },
    {
        image: './images/courses/phpBasics.png',
        title: 'getting started with php',
        category: 'PHP',
        price: 15.9
    },
    {
        image: './images/courses/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/courses/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: './images/courses/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'PHP',
        price: 45.9
    },
    {
        image: './images/courses/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }
]
function randomCourses(){
    const selectedCourses = [];
for (let i = 0; i < 3; i++) {
const randomIndex = Math.floor(Math.random() * courses.length);
selectedCourses.push(courses[randomIndex]);
}
const containerCourses=document.getElementById("containercourses");
// Pour chaque cours sélectionné, créez un div card et ajoutez l'image, le titre et le prix du cours à l'intérieur
selectedCourses.forEach(course => {
const card = document.createElement('div');
card.setAttribute('class', 'card');

const image = document.createElement('img');
image.setAttribute('src', course.image);
image.setAttribute('alt', course.title);

const title = document.createElement('p');
title.innerHTML = course.title;

const price = document.createElement('span');
price.innerHTML = course.price;

card.appendChild(image);
card.appendChild(title);
card.appendChild(price);

// Ajoutez le div card au div sélectionné précédemment
containercourses.appendChild(card);
});
}
let container = document.getElementById("courses-container");
function insertCourses(){
    for(let course of courses){
      let courseElement = document.createElement("div");
      courseElement.innerHTML = `
      <div class="card cours" style="width: 20rem;height:17rem;margin:10px 10px">
      <img src="${course.image}" alt="${course.title}" class="card-img-top" style=" height: 50%;" >
      <div class="card-body" >
        <p class="text-center">${course.title}</p>
      </div>
      <div class="card-footer">
        <p class="text-center"><b>$${course.price}</b></p>
      </div>
      </div>
      
    `;
    container.appendChild(courseElement);
    }
    
}



function checkCategory(el){
    for(var i=0;i<courses.length;i++){
        if(el==courses[i].category){
            document.getElementsByClassName("cours")[i].style.display="block"
        }
        else{
            document.getElementsByClassName("cours")[i].style.display="none"
        }

    }
}
document.getElementById("ALL").addEventListener("click",function(){
    for(var i=0;i<courses.length;i++){
       
            document.getElementsByClassName("cours")[i].style.display="block"


    }
}
)
//by price
document.getElementById("price").addEventListener("click",function(){
    document.getElementById("showprice").innerHTML=document.getElementById("price").value;
    for(var i=0;i<courses.length;i++){
        if(document.getElementById("price").value>=courses[i].price){
            document.getElementsByClassName("cours")[i].style.display="block";
        }
        else{
            document.getElementsByClassName("cours")[i].style.display="none";
        } 
}
}
)
//by search
function CheckBySearch(){
    for(var i=0;i<courses.length;i++){
        var input=document.getElementById("searchInput").value.toUpperCase();
        if(courses[i].title.toUpperCase().indexOf(input)>-1){
            document.getElementsByClassName("cours")[i].style.display="block";
        }
        else{
            document.getElementsByClassName("cours")[i].style.display="none";
        } 
}
}
   



window.onload = insertCourses;