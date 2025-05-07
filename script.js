const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskInputValue = taskInput.value.trim();

    if (taskInputValue !== "") {
        const taskListul = document.getElementById('taskList');
        const li = document.createElement('li');

        li.innerHTML = '<input type="checkbox">' + taskInputValue + '<button onclick="deleteTask(this)"> DELETE </button>';
        taskListul.appendChild(li);

        taskInput.value = "";

    } else {
        alert("Please enter a task");
    }
}

const deleteTask = (btn) => {
    const li = btn.parentNode; // Fixed: parentNode (not parentnode)
    li.parentNode.removeChild(li); // Fixed: parentNode
}

const deletedTaskChecked = () => {
    const taskList = document.getElementById('taskList'); // Fixed: taskList ID (not tasklist)
    
    // Fixed: querySelectorAll and selector syntax
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li); // Fixed: remobeChild -> removeChild
    });
}
