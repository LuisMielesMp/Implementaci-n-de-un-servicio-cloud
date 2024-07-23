let screen = document.getElementById('screen');
let history = document.getElementById('history');
let isDarkMode = false;
let isHistoryVisible = false;

function appendToScreen(value) {
  screen.value += value;
}

function calculate() {
  try {
    let result = eval(screen.value);
    history.innerHTML += `${screen.value} = ${result}<br>`;
    screen.value = result;
  } catch (error) {
    screen.value = 'Error';
  }
}

function clearScreen() {
  screen.value = '';
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.getElementById('toggle-theme').textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
}

function toggleHistory() {
  isHistoryVisible = !isHistoryVisible;
  history.style.display = isHistoryVisible ? 'block' : 'none';
  document.getElementById('toggle-history').textContent = isHistoryVisible ? 'Ocultar Historial' : 'Mostrar Historial';
}

function clearHistory() {
  history.innerHTML = '';
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/\d/.test(key) || ['+', '-', '*', '/', '(', ')', '.'].includes(key)) {
    appendToScreen(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearScreen();
  }
});
