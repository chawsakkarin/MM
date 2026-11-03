document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // [CONFLICT POINT 5: JS Alert Message]
  // ให้ Student A แก้ข้อความแจ้งเตือนเมื่อช่องว่างเป็น: alert("กรุณาใส่ข้อมูล Task ก่อนครับ!");
  // ให้ Student B แก้ข้อความแจ้งเตือนเมื่อช่องว่างเป็น: alert("Warning: Task name cannot be empty!");
  function validateInput(text) {
    if (!text.trim()) {
      alert("โปรดกรอกข้อมูล");
      return false;
    }
    return true;
  }

  addBtn.addEventListener("click", () => {
    const text = taskInput.value;

    if (!validateInput(text)) return;

    const li = document.createElement("li");

    // [CONFLICT POINT 6: JS Formatting]
    // ให้ Student A กำหนดรูปแบบข้อความรายการใหม่เป็น: li.textContent = `📌 ${text}`;
    // ให้ Student B กำหนดรูปแบบข้อความรายการใหม่เป็น: li.textContent = `[NEW] ${text}`;
    li.textContent = text;

    taskList.appendChild(li);
    taskInput.value = "";
  });
});
