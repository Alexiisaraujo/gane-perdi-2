// ========================
// CONTADOR
// ========================

let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;

// ========================
// 🔥 PEGA TUS 500+ TAREAS ACÁ
// ========================

const tareasBase = [
  "Salir a caminar 20 minutos",
  "Leer 10 páginas",
  "Ordenar tu espacio",
  "Salir a caminar 20 minutos",
  "Leer 10 páginas",
  "No usar redes por 2 horas",
  "Ordenar tu espacio",
  "Escribir 1 página",
  "Hacer 30 flexiones",
  "Meditar 10 minutos",
  "Tomar 2 litros de agua hoy",
  "Despertar a las 6 AM",
  "Ducharme con agua fría 2 minutos",
  "Hacer 40 flexiones",
  "Hacer 60 sentadillas",
  "Correr 20 minutos",
  "Caminar 30 minutos sin música",
  "Hacer plancha 90 segundos",
  "Saltar la cuerda 10 minutos",
  "Entrenar 45 minutos sin excusas",
  "No comer azúcar por hoy",
  "No comer comida chatarra por hoy",
  "Tomar 2 litros de agua hoy",
  "Dormir antes de las 22:30",
  "No usar redes por 3 horas",
  "No usar el celular la primera hora del día",
  "Leer 20 páginas",
  "Leer 30 minutos sin distracciones",
  "Estudiar 60 minutos enfoque total",
  "Aprender 15 palabras nuevas en otro idioma",
  "Escribir 2 páginas",
  "Escribir 500 palabras",
  "Planear el día en 10 minutos",
  "Revisar metas 10 minutos",
  "Trabajar 2 horas en mi proyecto principal",
  "Eliminar 5 distracciones de mi entorno",
  "Ordenar completamente mi escritorio",
  "Limpiar una parte de mi habitación",
  "Organizar mis finanzas 20 minutos",
  "Ahorrar dinero hoy",
  "Invertir 30 minutos en aprender algo útil",
  "Practicar una habilidad 45 minutos",
  "Resolver 20 problemas de lógica",
  "Meditar 15 minutos",
  "Respirar profundo 5 minutos",
  "Hacer journaling 10 minutos",
  "Anotar 3 errores y cómo corregirlos",
  "Hablar con 1 persona nueva",
  "Iniciar 2 conversaciones incómodas",
  "Pedir feedback honesto a alguien",
  "Hacer algo que me dé vergüenza controlada",
  "Decir no a algo que no aporta",
  "Eliminar 1 hábito basura hoy",
  "No quejarme en todo el día",
  "Terminar una tarea pendiente difícil",
  "Hacer lo primero que estoy evitando",
  "Trabajar sin música 60 minutos",
  "Desconectarme del celular 4 horas",
  "Revisar mis gastos del mes",
  "Planificar mi semana 20 minutos",
  "Leer sobre inversiones 30 minutos",
  "Aprender algo técnico 40 minutos",
  "Entrenar aunque no tenga ganas",
  "Hacer 100 abdominales",
  "Hacer 5 sprints intensos",
  "Estiramientos 15 minutos",
  "Caminar después de cada comida",
  "No consumir contenido basura hoy",
  "Reducir el tiempo en YouTube a 30 minutos",
  "No mirar pornografía hoy",
  "No procrastinar en ninguna tarea importante",
  "Enviar ese mensaje que estoy evitando",
  "Tomar una decisión pendiente",
  "Eliminar 10 archivos innecesarios",
  "Ordenar mi correo electrónico 20 minutos",
  "Leer algo que me incomode intelectualmente",
  "Escribir mis metas a 5 años",
  "Visualizar mi futuro 10 minutos",
  "Analizar mis debilidades 15 minutos",
  "Hacer algo productivo antes de las 8 AM",
  "Levantarse sin posponer la alarma",
  "No consumir azúcar después de las 18:00",
  "Preparar comida saludable para mañana",
  "Reducir el café a 1 taza",
  "No gastar dinero innecesario hoy",
  "Practicar disciplina aunque esté cansado",
  "Hacer 200 saltos",
  "Leer biografías de personas exitosas 20 minutos",
  "Escuchar un podcast educativo 30 minutos",
  "Revisar y ajustar mis metas",
  "Ordenar mi espacio digital",
  "Eliminar 1 excusa recurrente",
  "Hacer 3 cosas que estoy postergando",
  "Actuar sin esperar motivación",
  "Hacer 50 burpees",
  "Hacer plancha 2 minutos",
  "Correr 5 kilómetros",
  "Leer 50 páginas",
  "Estudiar 2 horas profundas",
  "Trabajar 3 horas en silencio total",
  "No usar redes sociales en todo el día",
  "Pasar 24 horas sin quejarme",
  "Despertar 30 minutos antes de lo habitual",
  "Hacer 150 sentadillas",
  "Escribir 1000 palabras",
  "Revisar mi progreso semanal"
  // Pegá el resto acá
];

// ========================
// CARGA INTELIGENTE
// ========================

let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

// Une base + guardadas sin duplicados
let tareas = [...new Set([...tareasBase, ...tareasGuardadas])];

localStorage.setItem("tareas", JSON.stringify(tareas));

// ========================
// ELEMENTOS DOM
// ========================

const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const statusEl = document.getElementById("status");

const btnWin = document.getElementById("btnWin");
const btnLose = document.getElementById("btnLose");
const btnTask = document.getElementById("btnTask");

const taskModal = document.getElementById("taskModal");
const taskText = document.getElementById("taskText");
const closeTask = document.getElementById("closeTask");

const adminBtn = document.getElementById("adminBtn");
const adminModal = document.getElementById("adminModal");
const closeAdmin = document.getElementById("closeAdmin");

const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

// ========================
// CONTADOR
// ========================

function updateStatus() {
  winsEl.textContent = wins;
  lossesEl.textContent = losses;

  if (wins > losses) statusEl.textContent = "Vas ganando";
  else if (losses > wins) statusEl.textContent = "Vas perdiendo";
  else statusEl.textContent = "Empate por ahora";

  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
}

btnWin.addEventListener("click", () => {
  wins++;
  updateStatus();
});

btnLose.addEventListener("click", () => {
  losses++;
  updateStatus();
});

// ========================
// TAREA RANDOM
// ========================

btnTask.addEventListener("click", () => {
  if (tareas.length === 0) {
    taskText.textContent = "No hay tareas disponibles.";
  } else {
    const index = Math.floor(Math.random() * tareas.length);
    taskText.textContent = tareas[index];
  }
  taskModal.classList.remove("hidden");
});

closeTask.addEventListener("click", () => {
  taskModal.classList.add("hidden");
});

// ========================
// ADMIN
// ========================

function saveTasks() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function renderTasks() {
  taskList.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const row = document.createElement("div");
    row.className = "taskItem";

    const number = document.createElement("div");
    number.className = "taskNumber";
    number.textContent = index + 1;

    const input = document.createElement("input");
    input.type = "text";
    input.value = tarea;

    input.addEventListener("input", () => {
      tareas[index] = input.value;
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      tareas.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    row.appendChild(number);
    row.appendChild(input);
    row.appendChild(deleteBtn);

    taskList.appendChild(row);
  });
}

adminBtn.addEventListener("click", () => {
  renderTasks();
  adminModal.classList.remove("hidden");
});

closeAdmin.addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

addTaskBtn.addEventListener("click", () => {
  const nueva = newTaskInput.value.trim();

  if (nueva !== "") {
    tareas.push(nueva);
    newTaskInput.value = "";
    saveTasks();
    renderTasks();
  }
});

updateStatus();