var Aufgabe11;
(function (Aufgabe11) {
    var toDos = [
        {
            inhalt: "ToDo1",
            checked: true
        },
        {
            inhalt: "ToDo2",
            checked: false
        },
        {
            inhalt: "ToDo3",
            checked: false
        }
    ];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var checkedCounterDOMElement;
    var notCheckedCounterDOMElement;
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                toDos.unshift({
                    inhalt: wildcard,
                    checked: false
                });
                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Deine Aufgabe" + wildcard + " wurde ergänzt");
            }
        });
        document.querySelector("#start").addEventListener("click", function () {
            artyom.say("hallo, die Spracheingabe ist aktiviert");
            startContinuousArtyom();
        });
    });
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        checkedCounterDOMElement = document.querySelector("#checkedCounter");
        notCheckedCounterDOMElement = document.querySelector("#notCheckedCounter");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + toDos[index].checked + "'><i class='fas fa-check'></i></span>" //.checked um boolean einzubringen
                + toDos[index].inhalt + //.inhalt um boolean einzubringen
                "<span class='trash fas fa-trash-alt'></span>";
            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        };
        for (var index = 0; index < toDos.length; index++) {
            _loop_1(index);
        }
        updateCounter();
        secondCounter();
    }
    function updateCounter() {
        counterDOMElement.innerHTML = toDos.length + " in total";
    }
    function secondCounter() {
        var checkedCounter = 0;
        var notCheckedCounter = 0;
        for (var index = 0; index < toDos.length; index++) {
            if (toDos[index].checked == true) {
                checkedCounter++;
            }
            else {
                notCheckedCounter++;
            }
        }
        checkedCounterDOMElement.innerHTML = checkedCounter + " checked in total";
        notCheckedCounterDOMElement.innerHTML = notCheckedCounter + " not checked in total";
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            toDos.unshift({
                inhalt: inputDOMElement.value,
                checked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        toDos[index].checked = !toDos[index].checked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        toDos.splice(index, 1);
        drawListToDOM();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map