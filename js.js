let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task ");
let ulList = document.querySelector(".tasks-content")
    // Focus On Input Field
window.onload = function() {
    theInput.focus();
};

// Adding The Task
theAddButton.onclick = function() {
    if (theInput.value != '') {
        //
        let mainSpan = document.createElement("li");
        mainSpan.className = 'task-box';
        //
        let deleteElement = document.createElement("input");
        deleteElement.setAttribute('type', 'radio')
        mainSpan.append(deleteElement);
        //
        deleteElement.className = "delete";
        //
        let inputadd = document.querySelector(".input-text");
        //
        let span = document.createElement('span')
        span.className = "item"
        span.textContent = inputadd.value
        mainSpan.append(span);
        //
        ulList.prepend(mainSpan);

    }
    // Empty The Input
    theInput.value = '';
    //


};

let background = document.querySelector('.backgroud-2')
document.addEventListener('click', function(e) {

    // Delete Task
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();
    }
})

// date

document.getElementById("date").innerHTML = new Date().toLocaleString();

// search

const search = document.querySelector(".input")
    //get input
let list = document.querySelector(".tasks-content")
    //get list 

search.addEventListener('keyup', function(e) {
    // attach value to let
    let inputSearching = e.target.value;
    // get li 
    let liOful = list.querySelectorAll('li');
    // list of dom to array js
    let arrayJs = Array.from(liOful)
        // loop over each il
    arrayJs.forEach(function(liOful) {
        let them = liOful.lastElementChild.textContent;
        if (them.indexOf(inputSearching) != -1) {
            liOful.style.display = "block"
        } else {
            liOful.style.display = "none"


        }

    })

});