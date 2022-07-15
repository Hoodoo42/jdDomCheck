
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

// creating a variable to access a specific element by its ID
let moreInfo =document.getElementById(`moreInfo`);
// grabbing that element through the variable and changing its innerText
moreInfo[`innerText`] = `Get more information here!`

// creating a variable to access multiple elements by their shared class
let find= document.getElementsByClassName(`find`);
// using the for loop to step through and change each element one by one
for(let i=0; i<find.length; i++){
    find[i][`innerText`] = `Grabbed by my class, differently!`
}


// creating a variable to access the tag selected by its ID
let footerId = document.getElementById(`footerInfo`);
footerId[`innerHTML`] = `Footer Info Here`;
// adding a new p tag before the tag selected with getElementById
footerId[`outerHTML`] = '<p>I am before!</p>' + footerId[`outerHTML`] + `<h3>I am after!</h3>`;


// selecting an h4 tag by its id
let h4Id = document.getElementById(`another`);
// using the variable object to sort through different css selectors to change styling the h4
h4Id[`style`][`color`] = `red`;
h4Id[`style`][`background`] = `black`;
h4Id[`style`][`fontFamily`] = `monospace`;


// grabbing the image by its id with this variable and getElement function
let image = document.getElementById(`picture`);
// overwritting the first image with another one using setAttribute (built in function) and chagning the image src
image.setAttribute(`src`, `https://unsplash.com/photos/7QGrloNqx6w`);