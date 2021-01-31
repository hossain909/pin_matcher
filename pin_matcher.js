document.querySelector(".generate-btn").addEventListener("click",function(){
  const randomPin = Math.random() * 10000;
  const randomNum = randomPin.toFixed(0)
  if(randomNum.toString().length == 2){
    document.getElementById("displayPin").value = randomNum + "19";
   }else if(randomNum.toString().length == 3 ){
    document.getElementById("displayPin").value = randomNum + "1";
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