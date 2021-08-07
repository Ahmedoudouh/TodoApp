let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".plus");
let ulList = document.querySelector(".tasks-content")
let inputadd = document.querySelector(".input-text");
///////////////////////////////////////////// date ///////////////////////////////////////////////////////////
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var today = new Date();
var dd = String(today.getDate());
var mm = String(months[today.getMonth()]);
var yyyy = today.getFullYear();
today = dd + 'th ' + mm + ', ' + yyyy;

let date = document.getElementById("date").innerHTML = today;

///////////////////////////////////////////////////// disabled //////////////////////////////////////
inputadd.onclick = function() {
    theAddButton.disabled = false;
};
//////////////////////////////////////////////////// Adding The Task ////////////////////////////////////////
//
let addContent = () => {
    // createElement"li" and createclassname "task-box"
    let itemAdd = document.createElement("li");
    itemAdd.className = 'task-box';
    ulList.prepend(itemAdd);
    //createElement "input" and Attribute "radio"
    let inputRadio = document.createElement("input");
    inputRadio.setAttribute('type', 'radio')
        // add input in  itemAdd last
    inputRadio.className = "delete";
    itemAdd.append(inputRadio);

    let span = document.createElement('span')
    span.className = "item";
    itemAdd.append(span);
};

theAddButton.onclick = function() {
    if (inputadd.value !== "") {
        addContent()
        let spanItemAdd = document.querySelector('.item')
        spanItemAdd.textContent = inputadd.value;
        //
        saveToLocal(inputadd.value);
    }
    // Empty The Input
    inputadd.value = '';
    //
    theAddButton.disabled = true;
}
document.addEventListener('DOMContentLoaded', getFromLocal())

//////////////////////////////////////////////// Delete Task ////////////////////////////////////////////////////


ulList.addEventListener('click', function(event) {
    if (event.target.className == 'delete') {
        if (confirm("Are you sure you want to delete")) {
            // delete it!
            let itemRemoved = event.target.parentNode.remove();
            removeFromLocal(itemRemoved)
        }
    }
})

///////////////////////////////////////////////// search  ////////////////////////////////////////////////////

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
        let contentItem = liOful.lastElementChild.textContent;
        if (contentItem.includes(inputSearching)) {
            liOful.style.display = "block"
        } else {
            liOful.style.display = "none"
        }

    })

});
/////////////////////////////////////////////////////////////////  local storage  //////////////////////////////////////////////////////
function saveToLocal(item) {
    let boxLocal = [];
    boxLocal = JSON.parse(localStorage.getItem('Local'));
    boxLocal.push(item);
    localStorage.setItem('Local', JSON.stringify(boxLocal));
};
//
function getFromLocal() {
    oldBox = JSON.parse(localStorage.getItem('Local'));
    if (oldBox !== null) {
        oldBox.map(item => {
            addContent()
            let spanItemAdd = document.querySelector('.item')
            spanItemAdd.textContent = item;
        })
    }

}

//////////////////////////////////////////////////////

function removeFromLocal(item) {
    oldBox = JSON.parse(localStorage.getItem('Local'));
    oldBox.splice(oldBox.indexOf(item), 1)
    localStorage.removeItem('Local');
    localStorage.setItem('Local', JSON.stringify(oldBox));

};




/*
function saveToLocal(item) {
    localStorage.setItem('LocalOfString', item);
};
//
function getFromLocal() {
    let itemA = localStorage.getItem('LocalOfString');
    if (itemA !== null) {

        addContent()
        let spanItemAdd = document.querySelector('.item')
        spanItemAdd.textContent = itemA;

    }

}

function removeFromLocal() {

    localStorage.removeItem('LocalOfString')
}
*/