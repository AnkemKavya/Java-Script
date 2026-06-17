const state = {
  loggedIn: false,
  tasks: [],
  saved: false,
  charts: {
    completionChart: null,
    allocationChart: null,
  },
};

const validUsers = {
  'kavya@gmail.com': 'kavya@123',
  'sujana@gmail.com': 'sujana@123',
};

const loginOverlay = document.getElementById('loginOverlay');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const loginError = document.getElementById('loginError');
const addSlotButton = document.getElementById('addSlotButton');
const saveScheduleButton = document.getElementById('saveScheduleButton');
const taskList = document.getElementById('taskList');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const taskCountText = document.getElementById('taskCountText');
const insightText = document.getElementById('insightText');
const completionCanvas = document.getElementById('completionChart');
const allocationCanvas = document.getElementById('allocationChart');

function setLoginVisible(visible) {
  loginOverlay.style.display = visible ? 'grid' : 'none';
  dashboard.classList.toggle('hidden', visible);
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
  return value.length >= 6;
}

function validateCredentials(email, password) {
  return validUsers[email] === password;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const emailValid = validateEmail(emailInput.value.trim());
  const passwordValid = validatePassword(passwordInput.value.trim());

  emailInput.classList.toggle('invalid', !emailValid);
  passwordInput.classList.toggle('invalid', !passwordValid);
  emailError.style.opacity = emailValid ? '0' : '1';
  passwordError.style.opacity = passwordValid ? '0' : '1';
  loginError.style.opacity = '0';

  if (!emailValid || !passwordValid) {
    return;
  }

  const credentialsValid = validateCredentials(emailInput.value.trim(), passwordInput.value.trim());
  if (!credentialsValid) {
    loginError.textContent = 'Use kavay@gmail.com / kavay@123 or sujana@gmail.com / sujana@123 to sign in.';
    loginError.style.opacity = '1';
    emailInput.classList.add('invalid');
    passwordInput.classList.add('invalid');
    return;
  }

  state.loggedIn = true;
  setLoginVisible(false);
  renderDashboard();
}

function parseTimeValue(timeValue) {
  const [hours, minutes] = timeValue.split(':').map(Number);
  return hours + minutes / 60;
}

function calculateDuration(start, end) {
  const startValue = parseTimeValue(start);
  const endValue = parseTimeValue(end);
  if (Number.isNaN(startValue) || Number.isNaN(endValue)) {
    return 0;
  }
  const duration = endValue - startValue;
  return duration > 0 ? duration : Math.max(0, duration + 24);
}

function buildTaskCard(task, index) {
  const card = document.createElement('article');
  card.className = `task-card ${task.completed ? 'completed' : ''}`;

  const meta = document.createElement('div');
  meta.className = 'task-meta';
  meta.innerHTML = `
    <div>
      <p class="task-time">${task.start} - ${task.end}</p>
      <h3 class="task-title${task.completed ? ' completed' : ''}">${task.title}</h3>
    </div>
    <div class="task-actions">
      <label>
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}" />
        Completed
      </label>
      <span class="task-time">${task.duration.toFixed(1)} hrs</span>
    </div>
  `;

  const details = document.createElement('div');
  details.className = 'task-details';
  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = task.category;
  const priority = document.createElement('span');
  priority.className = `priority ${task.priority.toLowerCase()}`;
  priority.textContent = task.priority;
  const placeholder = document.createElement('span');
  placeholder.className = 'tag';
  placeholder.textContent = task.completed ? 'Done' : 'Pending';

  details.append(tag, priority, placeholder);
  card.append(meta, details);

  const checkbox = card.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => toggleTaskCompletion(index));

  return card;
}

function toggleTaskCompletion(index) {
  state.tasks[index].completed = !state.tasks[index].completed;
  renderDashboard();
}

function renderTaskList() {
  taskList.innerHTML = '';
  if (state.tasks.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <i class="fa-solid fa-clock"></i>
      <p>Your morning timetable is ready to be built. Add a slot to begin.</p>
    `;
    taskList.appendChild(empty);
    return;
  }

  state.tasks.forEach((task, index) => {
    const card = buildTaskCard(task, index);
    taskList.appendChild(card);
  });
}

function updateProgress() {
  const total = state.tasks.length;
  const complete = state.tasks.filter((task) => task.completed).length;
  const ratio = total === 0 ? 0 : Math.round((complete / total) * 100);
  progressText.textContent = `${ratio}% Completed`;
  taskCountText.textContent = `${complete} / ${total} tasks completed`;
  progressFill.style.width = `${ratio}%`;
}

function buildInsight() {
  const total = state.tasks.length;
  const complete = state.tasks.filter((task) => task.completed).length;
  if (total === 0) {
    insightText.textContent = 'Add morning tasks to see your productivity insight.';
    return;
  }

  const highPriorityTasks = state.tasks.filter((task) => task.priority === 'High');
  const highPriorityCompleted = highPriorityTasks.filter((task) => task.completed).length;
  const completionRate = Math.round((complete / total) * 100);
  let message = `You have completed ${complete}/${total} of your morning tasks.`;

  if (completionRate >= 90) {
    message = `Fantastic work! ${completionRate}% completed, including ${highPriorityCompleted}/${highPriorityTasks.length || 1} high-priority tasks.`;
  } else if (completionRate >= 60) {
    message = `Good momentum! ${completionRate}% completed — keep the morning flow going.`;
  } else {
    message = `You&apos;re getting started: ${completionRate}% complete. Focus on the most important tasks first.`;
  }

  insightText.textContent = message;
}

function getCategoryAllocation() {
  const categories = { Work: 0, Health: 0, Personal: 0, Learning: 0 };
  state.tasks.forEach((task) => {
    categories[task.category] += task.duration;
  });
  return categories;
}

function refreshCharts() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const categories = getCategoryAllocation();

  if (state.charts.completionChart) {
    state.charts.completionChart.data.datasets[0].data = [completed, pending];
    state.charts.completionChart.update();
  } else {
    state.charts.completionChart = new Chart(completionCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending'],
        datasets: [
          {
            data: [completed, pending],
            backgroundColor: ['#34d399', '#60a5fa'],
            borderWidth: 0,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        cutout: '72%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
      },
    });
  }

  if (state.charts.allocationChart) {
    state.charts.allocationChart.data.datasets[0].data = Object.values(categories).map((value) => parseFloat(value.toFixed(1)));
    state.charts.allocationChart.update();
  } else {
    state.charts.allocationChart = new Chart(allocationCanvas, {
      type: 'bar',
      data: {
        labels: Object.keys(categories),
        datasets: [
          {
            label: 'Hours allocated',
            data: Object.values(categories).map((value) => parseFloat(value.toFixed(1))),
            backgroundColor: ['#38bdf8', '#34d399', '#818cf8', '#fbbf24'],
            borderRadius: 12,
            borderSkipped: false,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#cbd5e1',
            },
            grid: {
              color: 'rgba(148, 163, 184, 0.12)',
            },
          },
          x: {
            ticks: {
              color: '#cbd5e1',
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}

function renderDashboard() {
  renderTaskList();
  updateProgress();
  buildInsight();
  refreshCharts();
}

function createSlotFromForm() {
  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  const title = document.getElementById('taskTitle').value.trim();
  const category = document.getElementById('category').value;
  const priority = document.getElementById('priority').value;

  return {
    start,
    end,
    title,
    category,
    priority,
    duration: calculateDuration(start, end),
    completed: false,
  };
}

function clearForm() {
  document.getElementById('startTime').value = '';
  document.getElementById('endTime').value = '';
  document.getElementById('taskTitle').value = '';
  document.getElementById('category').value = 'Work';
  document.getElementById('priority').value = 'Medium';
}

function handleAddSlot() {
  const newSlot = createSlotFromForm();
  if (!newSlot.start || !newSlot.end || !newSlot.title) {
    alert('Please complete each field to add your morning slot.');
    return;
  }
  if (newSlot.duration <= 0) {
    alert('Please enter a valid time range with an end time after the start time.');
    return;
  }

  state.tasks.push(newSlot);
  state.saved = false;
  clearForm();
  renderDashboard();
}

function handleSaveSchedule() {
  if (state.tasks.length === 0) {
    alert('Add at least one time slot before saving the schedule.');
    return;
  }
  state.saved = true;
  saveScheduleButton.textContent = 'Schedule Saved';
  saveScheduleButton.classList.add('btn-primary');
  saveScheduleButton.disabled = true;
  setTimeout(() => {
    saveScheduleButton.textContent = 'Save Schedule';
    saveScheduleButton.classList.remove('btn-primary');
    saveScheduleButton.disabled = false;
  }, 1800);
}

function initEventListeners() {
  loginForm.addEventListener('submit', handleLoginSubmit);
  addSlotButton.addEventListener('click', handleAddSlot);
  saveScheduleButton.addEventListener('click', handleSaveSchedule);

  emailInput.addEventListener('input', () => {
    emailInput.classList.toggle('invalid', !validateEmail(emailInput.value.trim()));
  });
  passwordInput.addEventListener('input', () => {
    passwordInput.classList.toggle('invalid', !validatePassword(passwordInput.value.trim()));
  });
}

function initializeApp() {
  setLoginVisible(true);
  initEventListeners();
  updateProgress();
  if (completionCanvas && allocationCanvas) {
    // initialize empty charts so the dashboard has structure before data.
    refreshCharts();
  }
}

initializeApp();
