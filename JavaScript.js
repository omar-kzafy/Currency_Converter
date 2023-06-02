let SelectOne = document.getElementById('selectOne');
let SelectTwo = document.getElementById('selectTwo');
let inputText = document.getElementById('inputer');
let resultDiv = document.getElementById('result');
let button = document.querySelector('button');
let ione = document.getElementById('ico-1');
let itwo = document.getElementById('ico-2');
fetch('https://v6.exchangerate-api.com/v6/176c6ebfbc7140e268611576/latest/USD').then((result) => {
     let myData = result.json();
     return myData;
}).then((myData) => {
    let values = myData.conversion_rates;
    return values
}).then((values) => {
    Object.keys(values).sort()
    for (let i = 0; i < Object.keys(values).length; i++) {
        let optionE = document.createElement('option');
        let text = document.createTextNode(Object.keys(values)[i]);
        optionE.value = values[Object.keys(values)[i]];
        optionE.append(text);
        SelectOne.append(optionE);
    }
    for (let i = 0; i < Object.keys(values).length; i++) {
        let optionE = document.createElement('option');
        let text = document.createTextNode(Object.keys(values)[i]);
        optionE.value = values[Object.keys(values)[i]];
        optionE.append(text);
        SelectTwo.append(optionE);
    }
})
SelectOne.onchange = function () {
    let number = inputText.value;
    console.log(SelectTwo.value);
    console.log(SelectOne.value)
    console.log(number);
    let result = ((SelectTwo.value / SelectOne.value) * number).toFixed(2);
    resultDiv.innerHTML = `<h3>${result}</h3>`
}
SelectTwo.onchange = function () {
    let number = inputText.value;
    console.log(SelectTwo.value);
    console.log(SelectOne.value)
    console.log(number);
    let result = ((SelectTwo.value / SelectOne.value) * number).toFixed(2);
    resultDiv.innerHTML = `<h3>${result}</h3>`
}
inputText.onchange = function () {
    let number = inputText.value;
    console.log(SelectTwo.value);
    console.log(SelectOne.value)
    console.log(number);
    let result = ((SelectTwo.value / SelectOne.value) * number).toFixed(2);
    resultDiv.innerHTML = `<h3>${result}</h3>`
}
button.onclick = function (e) {
    e.preventDefault();
    [SelectOne.value,SelectTwo.value]=[SelectTwo.value,SelectOne.value];
    let number = inputText.value;
    console.log(SelectTwo.value);
    console.log(SelectOne.value)
    console.log(number);
    let result = ((SelectTwo.value / SelectOne.value) * number).toFixed(2);
    resultDiv.innerHTML = `<h3>${result}</h3>`
}
ione.onclick = function onclickOne (e) {
    console.log(e);
    e.preventDefault();
    SelectOne.click;
}
itwo.onclick  = function onclickTwo (e) {
    e.preventDefault();
    SelectTwo.click()
}
let today = new Date();

document.querySelector('.copy').innerHTML = `&copy; ${today.getFullYear()}`