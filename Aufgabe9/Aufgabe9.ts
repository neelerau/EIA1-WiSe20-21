 namespace ToDoList {

    // konstante für Inputfeld
    const inputField: HTMLInputElement = (document.getElementById("text") as HTMLInputElement);

    // wann ein neues Inputfeld erzeugt wird
    inputField.addEventListener("keypress", function (e: KeyboardEvent): void {
        if (e.key == "Enter") {
            createNewText();
            inputField.value = "";
        }
       
    });
    

    // Funktion damit es die ToDos zählt
    let total: number = 0;

    function TotalToDos(): void {
        document.getElementById("total").innerText = total + " in total";

    }


    // Funktion für neues ToDo
    function createNewText(): void {
        let myCheckbox: HTMLInputElement = document.createElement("input");
        myCheckbox.type = "checkbox";
        myCheckbox.className = "checkbox";

        let myLabel: HTMLLabelElement = document.createElement("label");
        myLabel.innerHTML = inputField.value;
        myLabel.className = "text";

        let deleteBtn: HTMLElement = document.createElement ("i");
        deleteBtn.className = "fas fa-trash-alt";

        let wrapper: HTMLDivElement = document.createElement ("div");

        document.getElementById("form").appendChild(wrapper);
        wrapper.appendChild(myCheckbox);
        wrapper.appendChild(myLabel);
        wrapper.appendChild(deleteBtn);
    

    // Bei "click" wird wrapper durch Deletebtn gelöscht
        deleteBtn.addEventListener("click", function(): void {
            deleteText(deleteBtn, wrapper);
        });     

        total++;
        TotalToDos();
        
    }

    
    // Funktion für Deletebutton
    function deleteText(deleteBtn: HTMLElement, wrapper: HTMLDivElement): void {
        wrapper.remove();
        total--;
        TotalToDos();
        
 
     }

}