

interface ToDos {
    inhalt: string;
    checked: boolean;
}

var toDos: ToDos[] = [
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

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var checkedCounterDOMElement: HTMLElement;
var notCheckedCounterDOMElement: HTMLElement;


//Sprachsteuerung

declare var Artyom: any;

window.addEventListener("load", function(): void {
    var artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            toDos.unshift({
                inhalt: wildcard,
                checked: false
            });
            drawListToDOM();
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            artyom.say(wildcard + "hinzugefügt");

        }
    });

    function startContinuousArtyom(): void {
        artyom.fatality();

        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }

    document.querySelector("#start").addEventListener("click", function(): void {
        startContinuousArtyom();
        artyom.say("Hallo");
    });
});

window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    checkedCounterDOMElement = document.querySelector("#checkedCounter");
    notCheckedCounterDOMElement = document.querySelector("#notCheckedCounter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
   });

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < toDos.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");


        todo.innerHTML =  "<span class='check " + toDos[index].checked + "'><i class='fas fa-check'></i></span>" //.checked um boolean einzubringen
                            + toDos[index].inhalt + //.inhalt um boolean einzubringen
                            "<span class='trash fas fa-trash-alt'></span>";

        // Zuweisen der Event-Listener für den Check- und den Trash-Button
        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
    secondCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = toDos.length + " in total";

}

function secondCounter(): void {
    var checkedCounter: number = 0;
    var notCheckedCounter: number = 0;

    for (var index: number = 0; index < toDos.length; index++) {

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


function addTodo(): void {

    if (inputDOMElement.value != "") {

        toDos.unshift({ //.unshift um ToDo oben anzuhängen
            inhalt: inputDOMElement.value,
            checked: false
        });
        
        inputDOMElement.value = "";
        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    toDos[index].checked = !toDos[index].checked;
    drawListToDOM();
}

function deleteTodo(index: number): void {
    toDos.splice(index, 1);
    drawListToDOM();
}


// //Sprachsteuerung

// declare var Artyom: any;

// window.addEventListener("load", function(): void {
//     var artyom: any = new Artyom();

//     artyom.addCommands({
//         indexes: ["erstelle Aufgabe *"],
//         smart: true,
//         action: function(i: any, wildcard: string): void {
//             toDos.unshift({
//                 inhalt: wildcard,
//                 checked: false
//             });
//             drawListToDOM();
//             console.log("Neue Aufgabe wird erstellt: " + wildcard);
//             artyom.say(wildcard + "hinzugefügt");

//         }
//     });

//     function startContinuousArtyom(): void {
//         artyom.fatality();

//         setTimeout(
//             function(): void {
//                 artyom.initialize({
//                     lang: "de-DE",
//                     continuous: true,
//                     listen: true,
//                     interimResults: true,
//                     debug: true
//                 }).then(function(): void {
//                     console.log("Ready!");
//                 });
//             }, 
//             250);
//     }

//     document.querySelector("#start").addEventListener("click", function(): void {
//         startContinuousArtyom();
//         artyom.say("Hallo");
//     });
});    