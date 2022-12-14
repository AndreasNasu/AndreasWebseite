$(function() {
    let todos = [{
        title: "Template Task",
        dueDate: "2022-12-22",
        id: "10"
    },
    {
        title: "Second Template Task",
        dueDate: "2022-12-23",
        id: "5" 
    }
    ];

    // Model
    const addTodo = (title, dueDate)=> {
        const id = new Date().getTime();
        const todo = {
            title: title,
            dueDate: dueDate,
            id: "" + id
        }
        todos.push(todo);
    }
    
    const removeTodo = (idToDelete) => todos = todos.filter( task => task.id !== idToDelete);

    // Controller
    $("#todo-button").click(()=>{
        const todoTitle = $("#todo-title").val();
        const dueDate = $("#todo-duedate").val();
        addTodo(todoTitle, dueDate);
        render();
    })

    const removeTask = (removeID)=>{
        removeTodo(removeID);
        render();   
    }

    // View
    const render = () =>{
        console.log("Rendering");
        const list = $("#todo-div");
        // clear list
        $(list).text("");
        // re render list
        todos.forEach(task => {
            const div = $("<div></div>").text(task.title + " " + task.dueDate);
            const button = $("<button>").attr("id", task.id).text("Delete");
            button.click(() =>  removeTask($(button).attr("id")));
            $(div).append(button);
            $(list).append(div);
        });
    }



    // Start
    render();
})