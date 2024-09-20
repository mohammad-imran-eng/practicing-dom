document.getElementById('post-btn').addEventListener('click',()=> {
   const commentBox = document.getElementById('comment').value;
   console.log(commentBox)
   const commentContainer = document.getElementById('comment-container');
   const p = document.createElement('p');
   p.innerText = commentBox;
   commentContainer.appendChild(p);
   document.getElementById('comment').value = '';
})

document.getElementById('btn').addEventListener('mouseover',()=>{
    alert("mouseover")
})

