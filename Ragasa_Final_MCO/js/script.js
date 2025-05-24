document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  const taskTable = document.getElementById('taskTable');
  const filterStatus = document.getElementById('filterStatus');

  const loadTasks = () => {
    fetch('tasks.php?action=read')
      .then(res => res.json())
      .then(tasks => {
        taskTable.innerHTML = '';
        tasks.filter(task => {
          const filter = filterStatus.value;
          if (filter === 'all') return true;
          return task.status === filter;
        }).forEach(task => {
          const row = `<tr>
            <td>${task.name}</td>
            <td>${task.due_date}</td>
            <td>${task.status}</td>
            <td>
              <button class="btn btn-sm btn-success" onclick="markDone(${task.id})">Done</button>
              <button class="btn btn-sm btn-warning" onclick="editTask(${task.id}, '${task.name}', '${task.due_date}')">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">Delete</button>
            </td>
          </tr>`;
          taskTable.insertAdjacentHTML('beforeend', row);
        });
      });
  };

  form.onsubmit = e => {
    e.preventDefault();
    const taskId = document.getElementById('taskId').value;
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const formData = new FormData();
    formData.append('name', taskName);
    formData.append('due_date', taskDate);
    formData.append('id', taskId);

    fetch('tasks.php?action=' + (taskId ? 'update' : 'create'), {
      method: 'POST',
      body: formData
    }).then(() => {
      form.reset();
      loadTasks();
    });
  };

  filterStatus.onchange = loadTasks;

  window.editTask = (id, name, date) => {
    document.getElementById('taskId').value = id;
    document.getElementById('taskName').value = name;
    document.getElementById('taskDate').value = date;
  };

  window.deleteTask = (id) => {
    fetch('tasks.php?action=delete&id=' + id)
      .then(() => loadTasks());
  };

  window.markDone = (id) => {
    fetch('tasks.php?action=done&id=' + id)
      .then(() => loadTasks());
  };

  loadTasks();
});
