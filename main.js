document.addEventListener("DOMContentLoaded", () => {

    $(".add").click(add_task);
    //document.queryselector(".add").addeventlistener("click", agregar);

    var task_container = $(".tasks");
    console.log(task_container[0]);
    var i = 0;

    function add_task() {
        var texto = document.querySelector("#task-input").value;
        if (texto == "")
            $(".error").show();
        //document.querySelector(".error").style.display = "flex";
        else {
            $(".error").hide();
            //document.querySelector(".error").style.display = "none";
            var cont = document.createElement("div");
            cont.setAttribute("class", "task");
            cont.setAttribute("id", "task" + 1);
            document.querySelector(".tasks").appendChild(cont);

            var descripcion = document.createElement("p");
            descripcion.setAttribute("id", "desciption" + 1);
            descripcion.textContent = texto;
            cont.appendChild(descripcion);

            var button = document.createElement("button");
            button.setAttribute("id", "update" + 1);
            button.setAttribute("class", "btn btn-warning");
            button.setAttribute("data-id", 1);
            cont.appendChild(button);
            var icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-pen");
            button.appendChild(icon);
            button.addEventListener("click", update_task);

            button = document.createElement("button");
            button.setAttribute("id", "delete" + 1);
            button.setAttribute("class", "btn btn-danger");
            button.setAttribute("data-id", 1);
            cont.appendChild(button);
            icon = document.createElement("i");
            icon.setAttribute("class", "fas fa-trash-alt");
            button.appendChild(icon);
            button.addEventListener("click", delete_task);
            i++;
        }
    }

    function update_task() {
        console.log("update");
    }

    function confirmUpdate() {

    }

    function delete_task() {
        console.log("delete");
    }
});