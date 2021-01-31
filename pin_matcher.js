document.querySelector(".generate-btn").addEventListener("click",function(){
  const randomPin = Math.random() * 10000;
  const randomNum = randomPin.toFixed()
  if(randomNum.toString().length == 3){
    return randomNum;
 }else{
    document.getElementById("displayPin").value = randomNum;
  }
})

// ============== Get Input Value ================ // 

function getValue(x){
 let prevValue = document.getElementById("typePin").value;
 prevValue = prevValue + x;
 document.getElementById("typePin").value = prevValue
}
function setClear(){
  const val = document.getElementById("typePin").value = "";
}
function submitPin(){
  const genPin = document.getElementById("displayPin").value;
  const subPin = document.getElementById("typePin").value;
  if(genPin === subPin){
    document.getElementById("match").style.display = "block";
  }else{
    document.getElementById("noMatch").style.display = "block";
  }
  document.getElementById("typePin").value = "";
  document.getElementById("displayPin").value = "";

}

function backspace(){
  const pin = document.getElementById("typePin").value;
  const newPin = pin.slice(0,-1)
  document.getElementById("typePin").value = newPin;
  // const num = Number(pin);
  // console.log(num)
}