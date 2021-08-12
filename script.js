const text =  "Welcome to Comps    ";
let index = 0;

//PHASES
function writeText(){
  document.getElementById("Phases").innerHTML = text.slice(0, index);
  index++;

  if(index > text.length -1){
    index = 0;
  }
}
setInterval(writeText, 200);

//SELECT 
let selectEl = document.getElementsByTagName('select');
selectEl[0].addEventListener('change', function() {
  location.href=this.value;
});












/* 
        
    
 ____      ____  _____    _____      ___  ____    ________   _______     
|_  _|    |_  _||_   _|  |_   _|    |_  ||_  _|  |_   __  | |_   __ \    
  \ \  /\  / /    | |      | |        | |_/ /      | |_ \_|   | |__) |   
   \ \/  \/ /     | |      | |   _    |  __'.      |  _| _    |  __ /    
    \  /\  /     _| |_    _| |__/ |  _| |  \ \_   _| |__/ |  _| |  \ \_  
     \/  \/     |_____|  |________| |____||____| |________| |____| |___| 
                                                                         
   
    
*/