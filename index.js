function addGrid(){
    const appElement=document.getElementById('app');
    for(let i=0; i<9; i++){
        const row=document.createElement('div');
        for(let j=0; j<9; j++){
            row.style.display="flex";
            row.style.alignSelf='center';
            const column=document.createElement('div');
            column.style.display='inline-block';
            column.style.height='60px';
            column.style.width='60px';
            column.style.border='1px solid green';
            column.style.textAlign="center";
            column.style.verticalAlign="middle";
            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}
addGrid();