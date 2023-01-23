let ttc = [[0,0,0],
           [0,0,0],
           [0,0,0]]

// if player1 true, player is playing
// if player1 false, bot is playing

let finish = false;

let box = [false,false,false,false,false,false,false,false,false]

document.getElementById('reload').addEventListener("click",function(){
    location.reload();
})


function validator(){
    // fix bug why no show innertext when already win
    // it shows when it full
    let win = false;
    if ((ttc[0][0] == 1 && ttc[0][1] == 1 && ttc[0][2] == 1) ||
        (ttc[1][0] == 1 && ttc[1][1] == 1 && ttc[1][2] == 1) ||
        (ttc[2][0] == 1 && ttc[2][1] == 1 && ttc[2][2] == 1 )){
            document.getElementById('wow').innerText = "Player Win"
            document.getElementById('wow').style.color = "rgb(21, 255, 0)";
            if (ttc[0][0] == 1 && ttc[0][1] == 1 && ttc[0][2] == 1){

            }
            else if (ttc[1][0] == 1 && ttc[1][1] == 1 && ttc[1][2] == 1){

            }
            else if (ttc[2][0] == 1 && ttc[2][1] == 1 && ttc[2][2] == 1 ){

            }
            console.log("Player Win")
            finish = true;
            win = true;
        }
     if ((ttc[0][0] == 1 && ttc[1][0] == 1 && ttc[2][0] == 1) ||
         (ttc[0][1] == 1 && ttc[1][1] == 1 && ttc[2][1] == 1) ||
         (ttc[0][2] == 1 && ttc[1][2] == 1 && ttc[2][2] == 1) ){
            if (ttc[0][0] == 1 && ttc[1][0] == 1 && ttc[2][0] == 1){

            }
            else if (ttc[0][1] == 1 && ttc[1][1] == 1 && ttc[2][1] == 1){

            }
            else if (ttc[0][2] == 1 && ttc[1][2] == 1 && ttc[2][2] == 1){
                
            }            
         document.getElementById('wow').innerText = "Player Win"
         document.getElementById('wow').style.color = "rgb(21, 255, 0)";
         console.log("Player Win")
         finish = true;
         win = true;
         }
     if ((ttc[0][0] == 1 && ttc[1][1] == 1 && ttc[2][2] == 1) ||
         (ttc[2][0] == 1 && ttc[1][1] == 1 && ttc[0][2] == 1)){
            if (ttc[0][0] == 1 && ttc[1][1] == 1 && ttc[2][2] == 1){

            }
            else if (ttc[2][0] == 1 && ttc[1][1] == 1 && ttc[0][2] == 1){

            }
         document.getElementById('wow').innerText = "Player Win"
         document.getElementById('wow').style.color = "rgb(21, 255, 0)";
         console.log("Player Win")
         finish = true;
         win = true;
       } 
           
     if ((ttc[0][0] == 2 && ttc[0][1] == 2 && ttc[0][2] == 2) ||
         (ttc[1][0] == 2 && ttc[1][1] == 2 && ttc[1][2] == 2) ||
         (ttc[2][0] == 2 && ttc[2][1] == 2 && ttc[2][2] == 2) ){
            if (ttc[0][0] == 2 && ttc[0][1] == 2 && ttc[0][2] == 2){

            }
            else if (ttc[1][0] == 2 && ttc[1][1] == 2 && ttc[1][2] == 2){

            }
            else if (ttc[2][0] == 2 && ttc[2][1] == 2 && ttc[2][2] == 2 ){

            }            
         document.getElementById('wow').innerText = "Bot Win"
         document.getElementById("wow").style.color = "red"
         console.log("Bot Win")
         finish = true;
         win = true;
        }
            
     if ((ttc[0][0] == 2 && ttc[1][0] == 2 && ttc[2][0] == 2) ||
         (ttc[0][1] == 2 && ttc[1][1] == 2 && ttc[2][1] == 2) ||
         (ttc[0][2] == 2 && ttc[1][2] == 2 && ttc[2][2] == 2 )){
            if (ttc[0][0] == 2 && ttc[1][0] == 2 && ttc[2][0] == 2){

            }
            else if (ttc[0][1] == 2 && ttc[1][1] == 2 && ttc[2][1] == 2){

            }
            else if (ttc[0][2] == 2 && ttc[1][2] == 2 && ttc[2][2] == 2 ){

            }

         document.getElementById('wow').innerText = "Bot Win"
         document.getElementById("wow").style.color = "red"
         console.log("Bot Win")
         finish = true;
         win = true;
        }


     if ((ttc[0][0] == 2 && ttc[1][1] == 2 && ttc[2][2] == 2) ||
         (ttc[2][0] == 2 && ttc[1][1] == 2 && ttc[0][2] == 2)){
            if (ttc[0][0] == 2 && ttc[1][1] == 2 && ttc[2][2] == 2){

            }
            else if (ttc[2][0] == 2 && ttc[1][1] == 2 && ttc[0][2] == 2){
                
            }

         document.getElementById('wow').innerText = "Bot Win"
         document.getElementById("wow").style.color = "red"
         console.log("Bot Win")
         finish = true;
         win = true;
     }
     
     //Draw logic is still wrong
     if (win == false){
     if ((ttc[0][0] != 0 && ttc[0][1] != 0 && ttc[0][2] != 0) &&
         (ttc[1][0] != 0 && ttc[1][1] != 0 && ttc[1][2] != 0) &&
         (ttc[2][0] != 0 && ttc[2][1] != 0 && ttc[2][2] != 0 )){
            finish = true;
            document.getElementById('wow').innerText = "Draw"
            document.getElementById("wow").style.color = "white"
            console.log("Draw");
         }
    }

     console.log("wow");
     if (finish == true){
            document.getElementById('box1').removeEventListener("click",box1);
            document.getElementById('box2').removeEventListener("click",box2);
            document.getElementById('box3').removeEventListener("click",box3);
            document.getElementById('box4').removeEventListener("click",box4);
            document.getElementById('box5').removeEventListener("click",box5); 
            document.getElementById('box6').removeEventListener("click",box6); 
            document.getElementById('box7').removeEventListener("click",box7); 
            document.getElementById('box8').removeEventListener("click",box8);
            document.getElementById('box9').removeEventListener("click",box9);
     }
}

function box1(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[0].style.display = "block";
    ttc[0][0] = 1
    box[0] = true
    player1 = false
    validator();
    botplay();
}
function box2(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[1].style.display = "block";
    ttc[0][1] = 1
    box[1] = true
    player1 = false
    validator();
    botplay();    
}
function box3(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[2].style.display = "block";
    ttc[0][2] = 1
    box[2] = true
    player1 = false
    validator();
    botplay();  
}
function box4(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[3].style.display = "block";
    ttc[1][0] = 1
    box[3] = true
    player1 = false
    validator();
    botplay();
}
function box5(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[4].style.display = "block";
    ttc[1][1] = 1
    box[4] = true
    player1 = false
    validator();
    botplay();
}
function box6(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[5].style.display = "block";
    ttc[1][2] = 1
    box[5] = true
    player1 = false
    validator();
    botplay();   
}
function box7(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[6].style.display = "block";
    ttc[2][0] = 1
    box[6] = true
    player1 = false
    validator();
    botplay();    
}
function box8(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[7].style.display = "block";
    ttc[2][1] = 1
    box[7] = true
    player1 = false
    validator();
    botplay();  
}
function box9(){
    document.getElementById('wow').innerText = "Your turn"
    document.getElementById('wow').style.color = "green";
    document.getElementsByClassName("cross")[8].style.display = "block";
    ttc[2][2] = 1
    box[8] = true
    player1 = false
    validator();
    botplay();   
}

let player1 = true
function botplay(){
    if (finish == false){
        let ok = false
        for (let i = 0 ; i < 9 ; i++){
            if (box[i] == false){
                ok = true;
                break;
            }
        }
        if(ok == true){
            document.getElementById("wow").innerText = "Bot is playing..."
            document.getElementById("wow").style.color = "red"
            setTimeout(() => {
                let x,y;
                do{
                    x = Math.floor(Math.random() * 3);
                    y = Math.floor(Math.random() * 3);
                }
                while(ttc[x][y] == 1 || ttc[x][y] == 2);
                ttc[x][y] = 2
                y++;
                x*=3; x+=y;
                x--;
                box[x] = true;
                player1 = !player1;
                
                
                
                document.getElementsByClassName("circle")[x].style.display = "block";
                if(x == 0){
                    document.getElementById('box1').removeEventListener("click",box1);
                }
                else if (x == 1){
                    document.getElementById('box2').removeEventListener("click",box2);
                }
                else if (x == 2){
                    document.getElementById('box3').removeEventListener("click",box3);
                }
                else if (x == 3){
                    document.getElementById('box4').removeEventListener("click",box4);
                }
                else if (x == 4){
                    document.getElementById('box5').removeEventListener("click",box5); 
                }
                else if (x == 5){
                    document.getElementById('box6').removeEventListener("click",box6); 
                }
                else if (x == 6){
                document.getElementById('box7').removeEventListener("click",box7); 
            }
            else if (x == 7){
                document.getElementById('box8').removeEventListener("click",box8);
            }
            else if (x == 8){
                document.getElementById('box9').removeEventListener("click",box9);
            }
            }, 1000);
            setTimeout(() => {
                
                document.getElementById('wow').innerText = "Your turn"
                document.getElementById('wow').style.color = "rgb(21, 255, 0)";
            }, 1001);
        
        
        
    }
    console.log(box)
    console.log(ttc)
}
}

console.log(player1)
// i declared all of the functions first hence all of the listeners are active


if (player1 == true){
    if (box[0] == false){
            document.getElementById('box1').addEventListener("click",box1,{once:true})
    }
    if (box[1] == false){
        document.getElementById('box2').addEventListener("click",box2,{once:true})
    }
    if (box[2] == false){
        document.getElementById('box3').addEventListener("click",box3,{once:true})
    }
    if (box[3] == false){
        document.getElementById('box4').addEventListener("click",box4,{once:true})
    }
    if (box[4] == false){
        document.getElementById('box5').addEventListener("click",box5,{once:true})       
    }
    if (box[5] == false){
        document.getElementById('box6').addEventListener("click",box6,{once:true})        
    }
    if (box[6] == false){
        document.getElementById('box7').addEventListener("click",box7,{once:true})       
    }
    if (box[7] == false){
        document.getElementById('box8').addEventListener("click",box8,{once:true})        
    }
    if (box[8] == false){
        document.getElementById('box9').addEventListener("click",box9,{once:true})        
    }
 

}











 


