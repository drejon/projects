function generateDivs(num){
    let main = document.getElementById('main');
    for (let i = 0; i < num; i++){
        let div = document.createElement('div');
        main.appendChild(div);
    }
}
