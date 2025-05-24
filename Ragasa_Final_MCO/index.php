<?php include 'header.php'; ?>

<form id="taskForm">
  <input type="hidden" id="taskId">
  <div class="mb-3">
    <input type="text" class="form-control" id="taskName" placeholder="Task name" required>
  </div>
  <div class="mb-3">
    <input type="date" class="form-control" id="taskDate" required>
  </div>
  <button type="submit" class="btn btn-primary">Save Task</button>
</form>

<div class="mt-4">
  <select id="filterStatus" class="form-select mb-2">
    <option value="all">All</option>
    <option value="pending">Pending</option>
    <option value="done">Done</option>
  </select>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Task</th>
        <th>Date</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="taskTable">
      <!-- Tasks will be loaded here -->
    </tbody>
  </table>
</div>

<?php include 'footer.php'; ?>
