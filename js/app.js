function sum() {
    const form = document.getElementById("form");
    let operatorA = form["operatora"];
    let operatorB = form["operatorb"];
    let result = parseInt(operatorA.value) + parseInt(operatorB.value);
    if(isNaN(result)) {
        result = "you must put numbers in both operands";
    }
    document.getElementById("result").innerHTML = `Result: ${result}`;
}