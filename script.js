console.log("welcome to tic toa toe");
 let music=new Audio("#");
 let audioturn=new Audio("#")
 let audio_gameover=new Audio("#")
 let turn ='X'
 let gameover=false;
 //function to change turn
 const changeturn=  ()=>{
    return turn==="X"?"0":"X";
 }
 //function to check win
 const checkwin= ()=>{
    let boxtext  =document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            if(gameover)
            {
                setTimeout(reset,950);
             
            }
        }
        })
    }
 //game logic
 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
     let boxtext = element.querySelector('.boxtext');
     element.addEventListener('click', ()=>{
         if(boxtext.innerText === ''){
             boxtext.innerText = turn;
             turn=changeturn();
             checkwin();
            
            if(!gameover){
                
                document.getElementsByClassName("info")[0].innerText="turn for "+turn;
            }
            }
    })
 })
 function reset()
 {
    let a=alert(changeturn() +" won the game .You want to reset it");
    if(a=true)
    {let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText=""
 });
 turn ="X";
 gameover=false;
 document.getElementsByClassName("info")[0].innerText="turn for "+turn;
 }
}
//  reset.addEventListener('click',()=>{
//     let boxtext = document.querySelectorAll('.boxtext');
//     Array.from(boxtext).forEach(element =>{
//         element.innerText=""
//  });
//  turn ="X";
//  gameover=false;
//  document.getElementsByClassName("info")[0].innerText="turn for "+turn;
// })