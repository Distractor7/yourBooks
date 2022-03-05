function addBooks() {
  let info = document.getElementById("author").value;
  let info2 = document.getElementById("title").value;
  let info3 = document.getElementById("genre").value;
  let info4 = document.getElementById("review").value;

  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("review").value = "";

  let obj = {
    author: info,
    title: info2,
    genre: info3,
    review: info4,
  };

  let table = document.getElementById("table");

  const row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete Book";
  deleteButton.addEventListener("click", (event) => {
    var row = deleteButton.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });

  //Edit buttons
  cell1.innerHTML = `<span class="span">${obj.author}</span><button class="edit">Edit</button>`;
  cell2.innerHTML = `<span class="span">${obj.title}</span><button class="edit">Edit</button>`;
  cell3.innerHTML = `<span class="span">${obj.genre}</span><button class="edit">Edit</button>`;
  cell4.innerHTML = `<span class="span">${obj.review}</span><button class="edit">Edit</button>`;
  cell4.appendChild(deleteButton);

  const editButtons = document.getElementsByClassName("edit");

  // const injectEdit  = <span></span>

  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", (e) => {
      console.log(e);
      let span = document.getElementsByClassName("span");
      const newValue = prompt("Enter correct info");
      e.target.parentNode.innerHTML = 
    });
  }
}
