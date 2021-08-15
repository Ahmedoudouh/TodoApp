let buttonSubmitElemnt = document.getElementById("button-submit")
let inputElemnt = document.getElementById("input")
let ulListElemnt = document.querySelector(".tasks-content")
let searchElemnt = document.getElementById("search")
    //

//date
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var today = new Date();
var dd = String(today.getDate());
var mm = String(months[today.getMonth()]);
var yyyy = today.getFullYear();
today = dd + 'th ' + mm + ', ' + yyyy;
//
let date = document.getElementById("date").innerHTML = today;

var arrayTasks = [];
let d = arrayTasks.map((item) => {
    item = { id: Date.now() }
})
getFromLocal()

// render
function render(arrayTasks) {
    ulListElemnt.innerHTML = ""
    arrayTasks.map((task) => {
        let itemAdd = document.createElement("li");
        itemAdd.className = 'task-box';
        ulListElemnt.prepend(itemAdd);
        let inputRadio = document.createElement("input");
        inputRadio.setAttribute('type', 'radio')
        inputRadio.className = "delete";
        itemAdd.append(inputRadio);
        let span = document.createElement('span')
        span.className = "item";
        itemAdd.append(span);
        span.textContent = task.value;
    })
}

// Add to do
buttonSubmitElemnt.onclick = function() {
        if (inputElemnt.value.trim() !== "") {
            var todo = { value: inputElemnt.value, id: Date.now() }
            arrayTasks.push(todo)
            render(arrayTasks)
            saveToLocal(todo)
        }
        inputElemnt.value = '';
        buttonSubmitElemnt.disabled = true;
    }
    //search
searchElemnt.addEventListener("keyup", () => {
    const search = searchElemnt.value;
    let lowerCase = search.toLowerCase()
    const filtered = arrayTasks.filter((todo) => {
        let itemArray = todo.value;
        let lowerCase2 = itemArray.toLowerCase()
        return lowerCase2.includes(lowerCase);
    });

    render(filtered)
});
//remove

ulListElemnt.addEventListener('click', function(event) {
        // if element .className = delete remove
        if (event.target.className == 'delete') {
            if (confirm("Are you sure you want to delete")) {
                // delete it!
                let itemRemoved = event.target.nextSibling.innerText
                event.target.parentNode.remove();
                removeFromLocal(itemRemoved)
            } else
            // disactive type radio
                event.target.checked = false
        }
    })
    //

inputElemnt.addEventListener('keyup', function(e) {
    if (e.target.value.trim() !== "") {
        buttonSubmitElemnt.disabled = false;
    }

});
//

function saveToLocal(value) {
    if (JSON.parse(localStorage.getItem('Local')) === null) {
        var arrayTasks = [];
    } else {
        arrayTasks = JSON.parse(localStorage.getItem('Local'))
    }
    arrayTasks.push(value);
    localStorage.setItem('Local', JSON.stringify(arrayTasks));
};

function getFromLocal() {
    if (localStorage.getItem('Local') !== null) {
        arrayTasks = JSON.parse(localStorage.getItem('Local'))
    }
    render(arrayTasks)

};

function removeFromLocal(x) {
    oldBox = JSON.parse(localStorage.getItem('Local'));
    oldBox.map((todo) => {
        return todo.value.includes(x)
    });
    oldBox.splice(oldBox.indexOf(x.id), 1)
    localStorage.setItem('Local', JSON.stringify(oldBox));
};