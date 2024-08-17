let todo = () => {
    let input1 = document.getElementById("input1").value;
    let btn = document.querySelector(".btn")
    let selectList = document.querySelector("#temp_diff").value;
    let result = document.querySelector(".result")
    let em = (input = "");

    let todo;
    if (selectList === 'cel') {
        let fahrenheit = ((input1 * 9 / 5) + 32).toFixed(1)
        result.innerHTML = `${fahrenheit} fah`
    }
    else if (selectList === 'fah') {
        let celsius = ((input1 - 32) * 5 / 9).toFixed(1)
        result.innerHTML = `${celsius} Cel`
    }
    else if (selectList === "select") {
        result.innerHTML = "Please select first";
    }
    else {
        result.innerHTML = "not a number"
    }
}
