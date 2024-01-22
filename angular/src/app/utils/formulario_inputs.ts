export class formulario_inputs {
    inputs(){
        console.log("inputs entrando")
        let inputContainers = document.querySelectorAll('.input-box');
            inputContainers.forEach(element => {
                let input = element.querySelector("input");
    
                if(input) {
                    isFilled(input, element);
                    input.addEventListener('focusout', function () {
                        isFilled(input, element);
                    });
                }
            });
    
            let textareaContainers = document.querySelectorAll('.textarea-box');
            textareaContainers.forEach(element => {
                let textarea = element.querySelector("textarea");
                if(textarea) {
                    isFilled(textarea, element);
                    textarea.addEventListener('focusout', function () {
                        isFilled(textarea, element);
                    });
                }
            });
    
    
            function isFilled(field:any, element:any) {
                if (field.value.trim() === '') {
                    element.classList.remove('is-filled');
                } else {
                    element.classList.add('is-filled');
                }
            }
      }
}