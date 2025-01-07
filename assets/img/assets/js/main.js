
const value1 = document.querySelector("#value1")
const value2 = document.querySelector("#value2")
const result = document.querySelector("#result")
const v1error = document.querySelector("#v1error")
const v2error = document.querySelector("#v2error")
let output;

function cal(method) {
    const v1 = value1.value
    const v2 = value2.value
 
    if (v1 == "" && v2 == "") {
        v1error.innerHTML = "Please Enter The Value"
        v2error.innerHTML = "Please Enter The Value"
        result.innerHTML = ""
        return
    }else if (v1 == "") {
        v1error.innerHTML = "Please Enter The Value"
        v2error.innerHTML = ""
        result.innerHTML = ""
        return
    }else if (v2 == "") {
        v2error.innerHTML = "Please Enter The Value"
        v1error.innerHTML = ""
        result.innerHTML = ""
        return
    }


    // switch case 

    switch (method) {
        case 'addition':
            output = Number(v1) + Number(v2);
            break;
        case 'substraction':
            output = Number(v1) - Number(v2);
            break;
        case 'division':
            output = Number(v1) / Number(v2);
            break;
        case 'multiply':
            output = Number(v1) * Number(v2);
            break;
        case 'modulo':
            output = Number(v1) % Number(v2);
            break;
        default:
            return;
    }

    result.innerHTML = output;
    v1error.innerHTML = ""
    v2error.innerHTML = ""
}

