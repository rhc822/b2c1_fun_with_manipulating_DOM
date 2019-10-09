/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section");
// console.log("This is the sectionEl section contents:", sectionEl);


// Me playing around with the classList property and add method
const sectionEl = document.querySelector(".article__section");
sectionEl.classList.add("stuff");
console.log(sectionEl);

/*
    This code will only return the third section component
*/
// const footerEl = document.querySelector(".article__footer")
// console.log("This is the footerEl section contents:", footerEl)

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
// const smallTextEl = document.querySelector(".smallText")
// smallTextEl.classList.remove("smallText")
// console.log("Is the smallText class removed???", smallTextEl)
// smallTextEl.classList.add("largeText")
// console.log("Is largeText added???", smallTextEl)
