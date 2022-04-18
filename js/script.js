let InputField = document.getElementById("Input-field");
let CreateTodo = document.getElementById("add-btn");
let ListContainer = document.querySelector(".list-container");
let TotalList = document.querySelector("#total");
let CompletedList = document.querySelector("#Completed");
let RemoveAll = document.querySelector("#remove-all");



let Lists = [];
let count = 0;


TotalList.textContent = `Total (${0})`;
CompletedList.innerHTML = `Completed (${0})`;


function AddItem(){
    let InnerDiv = document.createElement("div");
    let ListElement = document.createElement("li");
    ListElement.innerHTML = InputField.value;
    InnerDiv.appendChild(ListElement);
    ListContainer.appendChild(InnerDiv);
    Lists.push(ListElement);

    let threeDots = document.createElement("img");
    threeDots.src = "images/icons8-menu-vertical-32.png";
    InnerDiv.appendChild(threeDots);

    let select = document.createElement("div");
    select.setAttribute("class", "select");

    let CheckButton = document.createElement("button");
    CheckButton.innerHTML = "Done";
    CheckButton.setAttribute("id", "check")
    select.appendChild(CheckButton);

    let RemoveButton = document.createElement("button");
    RemoveButton.innerHTML = "Remove";
    select.appendChild(RemoveButton);

    InnerDiv.appendChild(select);
    TotalList.innerHTML = `Total(${Lists.length})`

    RemoveButton.disabled = true;


    function showSelect() {
        select.classList.toggle("show");
    }
    threeDots.addEventListener("click", showSelect);



    function doneItem(e){
        if(e.target.value === ""){
            InnerDiv.classList.add("done");
            CompletedList.innerHTML = `Completed(${count = count + 1})`;
        }
        else {
            location.reload();
        }
        RemoveButton.disabled = false;
        CheckButton.disabled = true;
    }
    function RemoveItem(){
        ListContainer.removeChild(InnerDiv);
        CompletedList.innerHTML = `Completed(${count = count - 1})`;
        TotalList.innerHTML = `Total(${Lists.length = Lists.length -1})`;
    }

    function RemoveAllItem(){
        ListContainer.remove(ListContainer);
    }

    InputField.value = "";
    RemoveButton.addEventListener("click", RemoveItem);
    CheckButton.addEventListener("click", doneItem);
    RemoveAll.addEventListener("click", RemoveAllItem);
}


CreateTodo.addEventListener("click", AddItem);