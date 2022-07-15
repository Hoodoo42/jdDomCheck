
// creating a variable to access the specific id selected by the query
let welcomeWords = document.querySelector(`#welcome`);
// using variable and innerText to change the string of the selected element
welcomeWords[`innerText`] = `Howdy Y'all!`

// creating variable to access all elements that share the same class
let oneClass = document.querySelectorAll(`.text`);
// creating a for loop that will help change each elements innerText one by one
for(let i=0; i<oneClass.length; i++){
    oneClass[i][`innerText`] = `Grabbed by my class!`
}


let moreInfo =document.getElementById(`moreInfo`);
moreInfo[`innerText`] = `Get more information here!`

let find= document.getElementsByClassName(`find`);
for(let i=0; i<find.length; i++){
    find[i][`innerText`] = `Grabbed by my class, differently!`
}