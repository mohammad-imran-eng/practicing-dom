

function red(){
    document.body.style.backgroundColor = "red";
}

const makeYellow = document.getElementById('make-yellow');
makeYellow.onclick = yellow;

const makePurple = document.getElementById('make-purple')
makePurple.onclick = function purple(){
    document.body.style.backgroundColor = 'purple';
}

document.getElementById('make-pink').addEventListener('click',()=> {
    document.body.style.backgroundColor = 'pink'
})

function yellow(){
    document.body.style.backgroundColor = "yellow"
}

function onHandleChange(){
    document.getElementById('d-text').innerText = 'New text show the screen.';
}

document.getElementById('name').addEventListener('click',()=> {
    document.getElementById('d-text').innerText = 'My wife name is Sirajam Munira';
})

