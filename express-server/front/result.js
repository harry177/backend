let contentField = document.querySelector(".content");
let newButton = document.querySelector(".show__button");
let addButton = document.querySelector(".add__button");
let deleteButton = document.querySelector(".delete__button");

const id = document.getElementById("id");
const userName = document.getElementById("name");

async function showDB() {
  if (contentField.textContent == "") {
    await fetch("http://localhost:3001", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        contentField.textContent = JSON.stringify(data);
      });
  } else {
    contentField.textContent = "";
  }
  console.log(id.value);
}

async function addUser() {
  await fetch("http://localhost:3001/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id.value,
      name: userName.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      contentField.textContent = JSON.stringify(data);
    });
}

async function deleteUser() {
  await fetch(`http://localhost:3001/delete/${id.value}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: +id.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      contentField.textContent = JSON.stringify(data);
    });
}

newButton.addEventListener("click", showDB);
addButton.addEventListener("click", addUser);
deleteButton.addEventListener("click", deleteUser);
