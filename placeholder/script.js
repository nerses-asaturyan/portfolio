const table = document.querySelector("table");
async function requestedInfo() {
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return res.json();
  } catch (e) {
    console.error(e);
  }
}

async function createEachRowForInfo() {
  let info = await requestedInfo();
  const neededInfoToPost = [
    "id",
    "name",
    "username",
    "phone",
    "website",
    "email",
  ];

  for (let i = 0; i < info.length; i++) {
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn");
    editBtn.innerText = " Edit";
    editBtn.addEventListener("click", () => {
      let cellIdToEdit = Number(prompt("Confirm id you want to edit"));
      let cellToEdit = neededInfoToPost.indexOf(
        prompt("Type option you want to edit")
      );
      let changedInfo = prompt("Type new value for changed info");
      if (
        cellIdToEdit < table.children.length &&
        cellToEdit < neededInfoToPost.length
      ) {
        table.children[cellIdToEdit].children[
          cellToEdit
        ].innerText = `${changedInfo}`;
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn");
    deleteBtn.innerText = "DELETE";

    const tr = document.createElement("tr");

    for (let j = 0; j < neededInfoToPost.length; j++) {
      const td = document.createElement("td");
      td.innerText = info[i][neededInfoToPost[j]];
      tr.appendChild(td);
    }
    tr.append(editBtn, deleteBtn);
    table.appendChild(tr);
    deleteBtn.addEventListener("click", () => {
      let theRowtoDelete = prompt(
        "Confirm you want to delete the row with typing id of the row"
      );
      if (parseInt(theRowtoDelete) <= info.length) {
        table.children[parseInt(theRowtoDelete)].style.display = "none";
      } else {
        alert("Invalid number");
      }
    });
  }
}

createEachRowForInfo();
