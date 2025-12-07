const closed = document.querySelector('.closed')
const open = document.querySelector('.open')

//add event listener

closed.addEventListener('click', () => {
    if(open.classList.contains('open')) {
        open.classList.add('active');
        closed.classList.remove('active');
    }
})

open.addEventListener('click', ()=> {
    if(closed.classList.contains('closed'))
        closed.classList.add('active');
        open.classList.remove('active');
})


const arrayWithElements = new Array();

function clickListener(e) 
{   
    var clickedElement=(window.event)
                        ? window.event.srcElement
                        : e.target,
        tags=document.getElementsByTagName(clickedElement.tagName);

    for(var i=0;i<tags.length;++i)
    {
      if(tags[i]==clickedElement)
      {
        arrayWithElements.push({tag:clickedElement.tagName,index:i}); 
        console.log(arrayWithElements);
      }    
    }
}

document.onclick = clickListener;

console.log(clickListener);