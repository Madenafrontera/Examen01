document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Función para agregar tarea
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            // Botón para eliminar tarea
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                li.classList.add('fade-out');
                // Espera a que la animación termine antes de eliminar el elemento
                li.addEventListener('animationend', () => {
                    li.remove();
                });
            });

            li.appendChild(deleteButton);
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            taskList.appendChild(li);
            taskInput.value = ''; // Limpiar campo de entrada
        }
    }

    // Agregar tarea al hacer clic en el botón
    addButton.addEventListener('click', addTask);

    // Agregar tarea al presionar Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
