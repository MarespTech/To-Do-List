document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".add").addEventListener("click", add_task, true);
    var texto = document.querySelector("#task-input");
    var task_container = $(".tasks");
    var i = 1;

    var value,
        values = [],
        keys = Object.keys(localStorage),
        a = keys.length;

        
    for (var x = 0; x < a; x++){
        value = localStorage.getItem(keys[x]);
        if(value != null){
            values.push(value);
            localStorage.removeItem(keys[x]);
        }
    }
    
    for (val of values)
        addToList(val);

    function add_task() {
        addToList(texto.value);
        document.querySelector("#task-input").value = "";
    }

    function edit_task(id) {
        var text = document.querySelector("#description" + id).textContent;
        texto.value = text;
        var add = document.querySelector(".add");
        add.setAttribute("class", "btn btn-warning add");
        add.setAttribute("data-id", id);
        add.textContent = "Update";
        add.removeEventListener("click", add_task, true);
        add.addEventListener("click", confirmUpdate, true);
    }

    function confirmUpdate() {
        var id = document.querySelector(".add").getAttribute("data-id");
        var task = document.querySelector("#description" + id);
        task.textContent = texto.value;
        var add = document.querySelector(".add");
        add.setAttribute("class", "btn btn-success add");
        add.removeAttribute("data-id");
        add.textContent = "Add";
        add.addEventListener("click", add_task, true);
        add.removeEventListener("click", confirmUpdate, true);

        localStorage.setItem("task"+id, texto.value);
        texto.value = "";
    }

    function delete_task(id) {
        var task = document.querySelector("#task" + id);
        localStorage.removeItem("task"+id);
        task.remove();
    }

    function addToList(text){
        var cont = document.createElement("div");
        cont.setAttribute("class", "task");
        cont.setAttribute("id", "task" + i);
        cont.setAttribute("data-id", i);
        document.querySelector(".tasks").appendChild(cont);

        var descripcion = document.createElement("p");
        descripcion.setAttribute("id", "description" + i);
        descripcion.textContent = text;
        cont.appendChild(descripcion);

        var button = document.createElement("button");
        button.setAttribute("id", "update" + i);
        button.setAttribute("class", "btn btn-warning");
        button.setAttribute("data-id", i);
        button.addEventListener("click", () => {
            var id = button.getAttribute("data-id");
            edit_task(id);
        });
        cont.appendChild(button);
        var icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-pen");
        button.appendChild(icon);


        button = document.createElement("button");
        button.setAttribute("id", "delete" + i);
        button.setAttribute("class", "btn btn-danger");
        button.setAttribute("data-id", i);
        cont.appendChild(button);
        icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-trash-alt");
        button.appendChild(icon);
        button.addEventListener("click", () => {
            var id = button.getAttribute("data-id");
            delete_task(id);
        });
        localStorage.setItem("task"+i, text);
        i++;
    }
});