document.getElementById("add").addEventListener("click", () => {
  let task = document.getElementById("task").value;

  if(task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });

  document.getElementById("list").appendChild(li);
  document.getElementById("task").value = "";
});
