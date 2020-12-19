var ToDoList;
(function (ToDoList) {
    // konstante für Inputfeld
    var inputField = document.getElementById("text");
    var removeAll = (document.querySelector(".fas fa-redo"));
    // wann ein neues Inputfeld erzeugt wird
    inputField.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            createNewText();
            inputField.value = "";
        }
    });
    // Funktion damit es die ToDos zählt
    var total = 0;
    function TotalToDos() {
        document.getElementById("total").innerText = total + " in total";
    }
    // Funktion für neues ToDo
    function createNewText() {
        var myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        myCheckbox.className = "checkbox";
        var myLabel = document.createElement("label");
        myLabel.innerHTML = inputField.value;
        myLabel.className = "text";
        var deleteBtn = document.createElement("i");
        deleteBtn.className = "fas fa-trash-alt";
        var wrapper = document.createElement("div");
        document.getElementById("form").appendChild(wrapper);
        wrapper.appendChild(myCheckbox);
        wrapper.appendChild(myLabel);
        wrapper.appendChild(deleteBtn);
        // Bei "click" wird wrapper durch Deletebtn gelöscht
        deleteBtn.addEventListener("click", function () {
            deleteText(deleteBtn, wrapper);
        });
        total++;
        TotalToDos();
    }
    // Funktion für Deletebutton
    function deleteText(deleteBtn, wrapper) {
        wrapper.remove();
        total--;
        TotalToDos();
    }
    // //Alle ToDos löschen
    function deleteAll(input) {
        inputField.remove();
        total = 0;
    }
    removeAll.addEventListener("click", function () {
        deleteAll(inputField);
    });
})(ToDoList || (ToDoList = {}));
//# sourceMappingURL=Aufgabe9.js.map