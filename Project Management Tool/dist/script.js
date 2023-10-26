const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    // Add more projects as needed
];

const tasks = [
    { id: 1, project: 1, title: "Task 1", assignedTo: "User 1" },
    { id: 2, project: 1, title: "Task 2", assignedTo: "User 2" },
    // Add more tasks as needed
];

// Function to display the list of projects
function displayProjects() {
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.innerHTML = <p>${project.name}</p>;
        projectList.appendChild(projectItem);
    });
}

// Function to display the list of tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.innerHTML = <p>${task.title} (Project ${task.project}, Assigned to: ${task.assignedTo})</p>;
        taskList.appendChild(taskItem);
    });
}

// Event listener for creating a new project
const createProjectButton = document.getElementById("createProject");
createProjectButton.addEventListener("click", () => {
    
    displayProjects();
});

// Event listener for assigning a task
const assignTaskButton = document.getElementById("assignTask");
assignTaskButton.addEventListener("click", () => {
    
    // Add the new task to the 'tasks' array and update the display
    displayTasks();
});

// Initial display of projects and tasks
displayProjects();
displayTasks();