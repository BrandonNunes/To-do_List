var input =  document.getElementById('input');
    btn = document.querySelector(".add");
    list =  document.querySelector(".lista");
    
    
btn.addEventListener("click", () => {
    
    list.insertAdjacentHTML(
       `afterbegin`, `
       <li>
       ${input.value}
            <button class="btnr">X</button>
       </li>`
    );
   input.value = "";

   let r = document.querySelectorAll(".btnr");
        r.forEach((del) => {
            del.addEventListener('click',()=>{
                del.parentElement.remove();
            });
        });

    });



