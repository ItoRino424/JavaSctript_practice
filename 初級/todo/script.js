const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('タスクを入力してください');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="completeBtn">完了</button>
        <button class="deleteBtn">削除</button>
    `;

    taskItem.querySelector('.completeBtn').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.deleteBtn').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);

    taskInput.value = '';
});