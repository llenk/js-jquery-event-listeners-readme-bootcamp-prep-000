//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}
function frameIt() {
  $('img').on('load', function () {
    $(this).addClass('tasty');
  })
}
function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which === '71') {
      alert();
    }
  }) 
}
function submitIt() {
  $('')
}

$(document).ready(function(){

// call functions here


});
