document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim(); // Trim spaces

    if (taskText) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');

        // Create the radio button and delete button
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'task-selector';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Done';

        // Show delete button when the radio button is selected
        radioButton.addEventListener('change', function() {
            deleteButton.classList.add('active');
        });

        // Delete the task when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        // Add elements to the list item
        listItem.appendChild(radioButton);
        listItem.appendChild(document.createTextNode(taskText));
        listItem.appendChild(deleteButton);

        // Append list item to the task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }
});
