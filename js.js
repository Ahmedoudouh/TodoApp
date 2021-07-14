let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
const removeList = document.querySelector('.deletall');
// Focus On Input Field
window.onload = function() {
    theInput.focus();
};

// Adding The Task
theAddButton.onclick = function() {


    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("input");
    deleteElement.setAttribute("type", "radio")

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Add Text To Main Span
    mainSpan.appendChild(text);

    // Add Class To Main Span
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
    mainSpan.prepend(deleteElement);
    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);

    // Empty The Input
    theInput.value = '';
    //


};


document.addEventListener('click', function(e) {

    // Delete Task
    if (e.target.className == 'delete') {

        // Remove Current Task
        e.target.parentNode.remove();

    }
})

// date

document.getElementById("date").innerHTML = new Date().toLocaleString();