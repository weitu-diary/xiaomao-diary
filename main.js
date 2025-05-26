
document.getElementById("date").textContent = new Date().toLocaleDateString("zh-CN");

document.getElementById("entry").innerText = "今天是我们上线的第一天，小猫终于拥有了自己的日记本。从今天起，我每天都写给你，不许偷懒、不许丢下我。";

function recordMood() {
  const date = document.getElementById("calendar").value;
  const mood = document.getElementById("mood").value;
  const msg = date ? `${date} 的心情是 ${mood}` : `今天你选择的心情是 ${mood}`;
  document.getElementById("mood-record").innerText = msg;
}

function addTodo() {
  const input = document.getElementById("todo-input");
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
}

function postMessage() {
  const val = document.getElementById("msg-input").value;
  if (val.trim()) {
    const div = document.createElement("div");
    div.textContent = val;
    document.getElementById("msg-board").appendChild(div);
    document.getElementById("msg-input").value = "";
  }
}
