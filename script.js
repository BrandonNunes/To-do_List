var input =  document.getElementById('input');
    btn = document.querySelector(".add");
    list =  document.querySelector(".lista");
    clearAll = document.getElementById("clear");
    btnr = document.querySelectorAll(".btnr");
    const peding = document.querySelector("#tasksN");
    const deleteAll = document.querySelector("#clear");
    showTodo();

   
    btn.addEventListener("click", () => {
        deleteAll.style.display = "block";
        let getlocalStorage = localStorage.getItem("New todo");
            if(getlocalStorage == null){
                listArr = [];
            }else{
                listArr = JSON.parse(getlocalStorage);
            }
            listArr.push(input.value);
            localStorage.setItem("New todo", JSON.stringify(listArr));
                showTodo();
    })
    function showTodo(){
        let getlocalStorage = localStorage.getItem("New todo");
            if(getlocalStorage == null){
                listArr = [];
            }else{
                listArr = JSON.parse(getlocalStorage);
            }
            peding.textContent = listArr.length;
            let newLi = "";
            listArr.forEach((element, index) => {
                newLi += `<li>${element} <button class="btnr" onclick= "deletetsk(${index})">
                &#10006;
                </button>`
            });
            list.innerHTML = newLi;
            input.value = "";
    }
    if(listArr.length > 0){
            deleteAll.style.display = "block";
    }else{
        deleteAll.style.display = "none";
    };
    function deletetsk(index){
        let getlocalStorage = localStorage.getItem("New todo");
        listArr = JSON.parse(getlocalStorage);
        listArr.splice(index,1);
            localStorage.setItem("New todo", JSON.stringify(listArr));
        showTodo();
    };
    deleteAll.addEventListener("click", () => {
        listArr = [];
        localStorage.setItem("New todo", JSON.stringify(listArr));
        showTodo();
        deleteAll.style.display = "none";
    });