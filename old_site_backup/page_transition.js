let timeout;
function page_transition (string){
    for(let i=0;i<document.getElementsByClassName('disappear').length;i++){
        document.getElementsByClassName('disappear')[i].style.opacity=0;
        document.getElementsByClassName('disappear')[i].style.transition='opacity 0.5s ease-in';
    }
    setTimeout(
        function(){
            document.getElementsByClassName('content_box')[0].remove();
            document.getElementsByClassName('line')[0].remove();
            document.getElementsByClassName('ul')[0].remove();
        },
        500
    ); 
    document.getElementById('banner').style.height='calc(100vh - 50px)';
    document.getElementById('banner').style.transition='height 1s ease-in';
    document.getElementById('name').innerHTML='Loading...';
    document.getElementById('name').style.color='green';
    document.getElementById('name').animate([
        // key frames
        { opacity:0 },
        { opacity:1 }
      ], {
        // sync options
        duration: 1500,
        iterations: 2
      });
      setTimeout(
        function(){
            window.location.href =string;
        },3000); 
}
   
