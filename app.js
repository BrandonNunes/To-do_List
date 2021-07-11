var input =  document.getElementById('input');
    btn = document.querySelector(".add");
    list =  document.querySelector(".lista");
    clearAll = document.getElementById("clear");
    
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
                totalTasks.innerText =  `${document.querySelectorAll(".btnr").length}`;
            });
        });
    if(delet.length <= 0){
            clearAll.style.display = "none"
     }else{
            clearAll.style.display = "block";
        }
            
 let totalTasks = document.getElementById("tasksN");
                
    totalTasks.innerText =  `${document.querySelectorAll(".btnr").length}`;
        
            
    clearAll.addEventListener("click", () => {
                list.innerHTML = "";
                totalTasks.innerHTML = "0";
                clearAll.style.display = "none"
                
            })

           
        
      
       
    });
   
    

    
       


    
    
    
   


