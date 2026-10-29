let tasks = JSON.parse(localStorage.getItem('lab_tasks') || '[]');

function renderTasks() {
  const ul = document.getElementById('tList');
  if(!ul) return;
  ul.innerHTML = tasks.map((t, i) => 
    `<li class="${t.c ? 'completed' : ''}" onclick="toggleTask(${i})">${t.txt}</li>`
  ).join('');
}

function addTask() {
  const input = document.getElementById('tInp');
  if (!input.value.trim()) return;

  tasks.push({ txt: input.value.trim(), c: false });
  localStorage.setItem('lab_tasks', JSON.stringify(tasks));
  input.value = '';
  renderTasks();
}

function toggleTask(i) {
  tasks[i].c = !tasks[i].c;
  localStorage.setItem('lab_tasks', JSON.stringify(tasks));
  renderTasks();
}