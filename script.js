document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;
  
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
    if (!genderMale && !genderFemale) {
      alert("Please select your gender.");
      return;
    }
  
    if (dob === "") {
      alert("Please enter your date of birth.");
      return;
    }
  
    alert("Form submitted successfully!");
    this.reset();
  });

  document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
  
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
    });
  
    listItem.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(listItem);
  
    taskInput.value = "";
  });
  
  