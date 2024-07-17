

const btnSubmit = document.getElementById('btn')
const inputs = document.querySelectorAll('.inputs')
const campos = document.querySelectorAll('.campos')


btnSubmit.addEventListener('click', (event) => {
    inputs.forEach((inputando, indicando) => {
        if(inputando.value.trim() === ""){                          // trim remove espaços em branco/ espaco tecla
            inputando.classList.add("input-vazio")
            inputando.classList.remove("input-preenchido")
            campos[indicando].classList.add("campos-desoculto")
        } else{
            inputando.classList.add("input-preenchido")
            inputando.classList.remove("input-vazio")
            campos[indicando].classList.remove("campos-desoculto")
        }
    })
})



