var input =  document.getElementById('input');
    btn = document.querySelector(".add");
    list =  document.querySelector(".lista");
    var clearAll = document.getElementById("clear");
    
btn.addEventListener("click", () => {

    if(input.value.length == 0){
        alert("Por favor adicione algo antes!");
    }else{
        
        list.insertAdjacentHTML(
            'afterbegin',
                    `<li>
                        ${input.value}
                        <button class="btnr">
                        &#10006;
                        </button>
                    </li>
                    
                    `
        )
    }
    
    
   input.value = "";
   

   let delet = document.querySelectorAll(".btnr");
        delet.forEach((del) => {
            del.addEventListener('click',()=>{
                del.parentElement.remove();
                
            });
        });
        if(delet.length == 0){
            clearAll.style.display = "none"
        }else{
            clearAll.style.display = "block";
        }
            
        let totalTasks = document.getElementById("tasksN");
                
            totalTasks.innerHTML = `${delet.length}`;
        
            
            clearAll.addEventListener("click", () => {
                list.innerHTML = "";
                totalTasks.innerHTML = "0";
                clearAll.style.display = "none"
                
            })

            
        
      
       
    });
    

    
       


    
    
    
   


