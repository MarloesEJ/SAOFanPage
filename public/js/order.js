document.getElementById('orderinput').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('toHomeBtn').addEventListener('click', function(){
  window.location.href = "index.html";
});

