const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

const event = () => {
    const inputValue = input.value;
    if (inputValue.trim() !== "") {
        const li = document.createElement("li");
        const text = document.createElement("span"); //텍스트 요소 생성
        const remove_button = document.createElement("button"); //삭제 버튼 생성
        const checkbox = document.createElement("input"); //체크박스 생성;
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                text.style.textDecoration = "line-through";
                   }
                   else{
                    text.style.textDecoration = "none";
                   }
        });
        text.textContent = inputValue;
        remove_button.setAttribute( "id", "r_btn" )
        remove_button.textContent = "X";
        remove_button.addEventListener("click", () => {
            todoList.removeChild(li);
        });
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(remove_button);

        todoList.appendChild(li);
        input.value = "";
    }
}
addButton.addEventListener("click", event);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        event();
    }
});