const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
    const inputValue = input.value;
    if (inputValue.trim() !== "") {
        const li = document.createElement("li");
        const text = document.createElement("span");
        text.textContent = inputValue;
        const remove_button = document.createElement("button");
        remove_button.setAttribute( "id", "r_btn" )
        remove_button.textContent = "X";
        remove_button.addEventListener("click", () => {
            todoList.removeChild(li);
        });
        li.appendChild(text);
        li.appendChild(remove_button);
        todoList.appendChild(li);
        input.value = "";
    }
});