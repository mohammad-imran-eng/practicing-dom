


document.getElementById('btn-delete').addEventListener('click',()=> {
    document.getElementById('info').style.display = 'none'
})


document.getElementById('input-field').addEventListener('keyup',(event)=> {
    console.log(event.target.value)
    const deleteBtn = document.getElementById('btn-delete')
    if(event.target.value === 'delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else {
        deleteBtn.setAttribute('disabled',true)
    }
})