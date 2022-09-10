let resultEle = document.getElementById('result');
let inputEle = document.getElementById('input');
let summaryEle = document.getElementById('summary');
let errorEle = document.getElementById('error');
beautify = () => {
  try{
    reset();
    let input = inputEle.value;
    let json = JSON.parse(input);
    let keys = Object.keys(json);
    let values = Object.values(json);
    let output = "";
    keys.forEach((key,index) => {
      output += `<li>
      ${key} : ${values[index]}
     </li>`;
    });
    resultEle.innerHTML = output;
    summaryEle.innerText = `Object(${keys.length})`;
    summaryEle.classList.add("text-green-500");
  }catch(e){
    console.error(e);
    errorEle.innerHTML = `${e}`;
  }
}
reset = () => {
   errorEle.innerHTML = '';
   resultEle.innerHTML = '';
   summaryEle.innerText = `Object(0)`;
}