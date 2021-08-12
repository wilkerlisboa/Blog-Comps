const text =  "Welcome to Blog   ";
let index = 0;

function writeText(){
  document.getElementById("Phases").innerHTML = text.slice(0, index);
  index++;

  if(index > text.length -1){
    index = 0;
  }
}
setInterval(writeText, 200);

/* 
        
    
 ____      ____  _____    _____      ___  ____    ________   _______     
|_  _|    |_  _||_   _|  |_   _|    |_  ||_  _|  |_   __  | |_   __ \    
  \ \  /\  / /    | |      | |        | |_/ /      | |_ \_|   | |__) |   
   \ \/  \/ /     | |      | |   _    |  __'.      |  _| _    |  __ /    
    \  /\  /     _| |_    _| |__/ |  _| |  \ \_   _| |__/ |  _| |  \ \_  
     \/  \/     |_____|  |________| |____||____| |________| |____| |___| 
                                                                         
   
    
*/