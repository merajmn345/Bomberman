const bombs=[];
let gamePoints=0;
let canPlay=true;


function updateGamePoints(){
    const gamepointsElement=document.getElementById('gamePoints');
    gamepointsElement.innerHTML = "Game Points :-" + gamePoints;
}
function addGrid(){
    const appElement=document.getElementById('app');
    for(let i=0; i<9; i++){
        const row=document.createElement('div');
        row.style.display="flex";
        for(let j=0; j<9; j++){
            const index=i*9+j;
            row.style.display="flex";
            row.style.alignSelf='center';
            const column=document.createElement('div');
            column.style.display='inline-block';
            column.style.height='40px';
            column.style.width='40px';
            column.style.border='1px solid green';
            column.style.textAlign="center";
            column.style.verticalAlign="middle";
            column.setAttribute("index", index);

            column.addEventListener('click',function(){

                if(canPlay){
                    if(bombs.includes(index)){
                        column.innerHTML = "bomb";
                        column.style.backgroundColor = "red";
                        column.style.border="1px solid gold";
                        canPlay=false;
                        document.getElementById("loss").innerHTML="You Loss";
                        
                    }
                    else if(gamePoints >= 50){
                        document.getElementById("win").innerHTML="You Win";
                    }
                    
                    
                    else{

                        column.style.backgroundColor = "green";
                        gamePoints++;
                        
                        updateGamePoints();
                        
                    }
                }
                
                
            })
            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}


function generateBombs(){
    while(bombs.length < 10){
        const randomNum=Math.floor(Math.random()*100);
        if(randomNum<81 && !bombs.includes(randomNum)){
            bombs.push(randomNum);
            
        }
    }
}
addGrid();
generateBombs();
console.log(bombs);


