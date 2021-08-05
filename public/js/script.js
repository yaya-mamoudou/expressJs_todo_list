let previous, previousId;

const editTodo = (id) => {
  let todoText = document.getElementById(`todo${id}`);
  let editButton = document.getElementById(id);
  let saveButton = document.createElement("button");

  todoText.setAttribute;

  saveButton.className = "bg-transparent p-0";
  saveButton.setAttribute("formaction", `/updateTodo/${id}`);
  saveButton.setAttribute("id", id);

  saveButton.setAttribute("type", `submit`);

  saveButton.innerHTML =
    '<i class="far fa-save bg-transparent text-white"></i>';
  editButton.replaceWith(saveButton);

  todoText.removeAttribute("readonly");
  todoText.focus();
  todoText.className = "text-white";

  if (previous) {
    let save = document.getElementById(previousId);
    let button = document.createElement("button");

    previous.setAttribute("readonly", "readonly");
    previous.className = "text-dark";

    button.className = "bg-transparent p-0";
    button.setAttribute("onclick", `editTodo('${previousId}')`);
    button.setAttribute("id", previousId);
    button.innerHTML =
      '<i class="fas fa-pencil-alt bg-transparent text-white"></i>';

    save.replaceWith(button);
  }
  previous = todoText;
  previousId = id;
};
