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
    for (let i = courses.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [courses[i], courses[j]] = [courses[j], courses[i]];
      }
      for (let i = 0; i < 3; i++) {
        console.log(courses[i].title);
      }
      const selectedCourses = courses.slice(0, 3);
// Pour chaque cours sélectionné, créez un div card et ajoutez l'image, le titre et le prix du cours à l'intérieur
const div = document.querySelector('#courses-div');
selectedCourses.forEach(course => {
  div.innerHTML +=
   `<div class="col">
    <div class="card" style="width: 20rem;height:17rem;">
      <img src="${course.image}" alt="${course.title}" class="card-img-top">
      <div class="card-body">
        <p class="text-center">${course.title}</p>
      </div>
      <div class="card-footer">
        <p class="text-center"><b>$${course.price}</b></p>
      </div>
    </div>
    </div>
    
  `;
});

}
window.onload=randomCourses;