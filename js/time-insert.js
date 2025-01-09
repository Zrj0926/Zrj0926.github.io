var newDiv = document.createElement("div");
newDiv.innerHTML = `
  <span id="time"></span>
  <script src="/js/time.js"></script>
`;

document.addEventListener("DOMContentLoaded", function() {
  var div1 = document.getElementsByClassName("statistics")[0];
  /*调试检查*/
  console.log(div1); 
  
  if (div1) {
    div1.parentNode.insertBefore(newDiv, div1.nextSibling);
  }
});