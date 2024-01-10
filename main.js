let butt = document.querySelector("#addTask");
let list = document.querySelector("#taskList");

butt.addEventListener("click", function () {
  let input = document.querySelector("#taskInput");

  // Create a new list item
  // Validate input inside the update button
  if (validateInput(input)) {
    console.log("Empty input during update");
    return;
  }

  let listItem = document.createElement("li");

  // Create a text node with the task text
  let itemId = "items_" + Date.now();
  let textNode = document.createTextNode(input.value);

  // Append the text node to the list item
  listItem.appendChild(textNode);

  // Append the list item to the task list
  document.getElementById("taskList").appendChild(listItem);
  listItem.id = itemId;
  console.log(itemId);

  // Clear the input field
  document.getElementById("taskInput").value = "";

  let update = document.createElement("button");

  update.innerText = "Update";
  listItem.appendChild(update);
  update.addEventListener("click", function () {
    let getId = document.getElementById(itemId);
    // Validate input inside the update button
    if (validateInput(input)) {
      console.log("Empty input during update");
      return;
    }

    getId.innerHTML = input.value;
    console.log("updated");
  });
  let dele = document.createElement("button");
  dele.innerHTML = "delete";
  listItem.appendChild(dele);
  dele.addEventListener("click", function () {
    listItem.remove();
    console.log("deleted");
  });
});

function validateInput(inputt) {
  return inputt === null || inputt.value.trim() === "";
}
