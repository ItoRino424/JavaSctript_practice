// script.js
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// タスクを追加する
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('タスクを入力してください');
    return;
  }

  // 新しいタスクのリストアイテムを作成
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="completeBtn">完了</button>
    <button class="deleteBtn">削除</button>
  `;

  // 完了ボタンのイベント
  taskItem.querySelector('.completeBtn').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // 削除ボタンのイベント
  taskItem.querySelector('.deleteBtn').addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // リストにタスクを追加
  taskList.appendChild(taskItem);

  // 入力フィールドを空に
  taskInput.value = '';
});
