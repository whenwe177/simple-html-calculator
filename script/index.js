let inRadian = false;
let isNewOperand = true;
let evalStr = "";
let memoryStr = "";


let degButton = document.getElementById("deg-button");
let calcBtns = document.querySelectorAll(".calc-button");
let textArea = document.querySelector(".text-area");

function degToRad() {
    
    if (inRadian) {
        inRadian = false;
        degButton.innerText = "Degrees";
        return;
    }

    inRadian = true;
    degButton.innerText = "Radians";
}

// calcBtns.forEach((button) => console.log(button));

calcBtns.forEach((button) => button.addEventListener("click",
    (event) => {
        let key = event.target.innerText;
        let textAreaVal;
        let result;
        switch (key) {
            case "C":
                evalStr = "";
                textArea.value = "";
                isNewOperand = true;
                break;
            case "MC":
                memoryStr = "";
                break;
            case "M+":
                memoryStr += `+(${textArea.value})`;
                evalStr = "";
                isNewOperand = true;
                break;
            case "M-":
                memoryStr += `-(${textArea.value})`;
                evalStr = "";
                isNewOperand = true;
                break;
            case "MR":
                result = eval(memoryStr);
                textArea.value = result;
                break;
            case "+": case "-": case "/": case "*": case "**": 
                evalStr += `(${textArea.value})${key}`;
                isNewOperand = true;
                break;
            case "√":
                result = Math.sqrt(parseFloat(textArea.value));
                evalStr = "";

                textArea.value = result;
                isNewOperand = true;
                break;

            case "±":
                textAreaVal = textArea.value;
                textAreaVal = (textAreaVal.charAt(0) === "-") ? textAreaVal.substring(1) : `-${textAreaVal}`;
                textArea.value = textAreaVal;
                break;
            case "=":
                evalStr += `(${textArea.value})`;
                result = eval(evalStr);
                
                evalStr = "";
                textArea.value = result;
                isNewOperand = true;
                break;
            default:
                if (isNewOperand) {
                    textArea.value = key;
                    isNewOperand = false;
                    return
                }

                textAreaVal = textArea.value;
                textAreaVal += key;
                textArea.value = textAreaVal;
                break;

        }
    }
    ));

