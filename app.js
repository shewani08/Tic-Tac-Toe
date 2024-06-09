let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.innerText = turnO ? 0 : 'X';
        turnO = turnO ? false : true;
        box.disabled = true;
        checkWinner();
    })
})
function resetval(win){
    console.log('reset',win);
    turnO=true;
    boxes.forEach(box => {
         box.innerText='';
         box.disabled=false;
         
    });
    alert(win)
}
function checkWinner(){
    let winner;
    winPattern.forEach(element => {
        let pos1=boxes[element[0]].innerText;
        let pos2=boxes[element[1]].innerText;
        let pos3=boxes[element[2]].innerText;
        if(pos1!=='' && pos2!== ''&& pos3!=='')
           if(pos1 === pos2 && pos2=== pos3){
        
            resetval(pos1);
           }
          
        
    });

}
