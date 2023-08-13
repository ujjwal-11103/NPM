const readline = require('readline-sync');

const todoList = [];

function showMenu() {
    console.log('=== TODO List ===');
    console.log('1. Add Task');
    console.log('2. View Tasks');
    console.log('3. Exit');
}

function addTask() {
    const task = readline.question('Enter a new task: ');
    todoList.push(task);
    console.log('Task added successfully!');
}

function viewTasks() {
    if (todoList.length === 0) {
        console.log('No tasks added yet.');
    } else {
        console.log('=== Tasks ===');
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

function main() {
    let choice;

    do {
        showMenu();
        choice = parseInt(readline.question('Enter your choice: '));

        switch (choice) {
            case 1:
                addTask();
                break;
            case 2:
                viewTasks();
                break;
            case 3:
                console.log('Goodbye!');
                break;
            default:
                console.log('Invalid choice. Try again.');
        }
    } while (choice !== 3);
}

main();
