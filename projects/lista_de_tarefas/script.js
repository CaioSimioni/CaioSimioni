const inputElement = document.querySelector(".form form input"),
addButtonElement = document.querySelector(".form form button"),
ulElement = document.querySelector(".tarefas ul");

const tasks = [];

addButtonElement.onclick = event => {
    event.preventDefault();

    if(inputElement.value){
        
        const spanTextElement = document.createElement("span");
        spanTextElement.innerHTML = inputElement.value;

        const removeButtonElement = document.createElement("button");
        removeButtonElement.innerHTML = "Remover";
        removeButtonElement.onclick = () => {
            ulElement.removeChild(liElement);
        }
        
        const liElement = document.createElement("li");
        liElement.appendChild(spanTextElement);
        liElement.appendChild(removeButtonElement);

        ulElement.appendChild(liElement);

        inputElement.value = "";
    }
}
