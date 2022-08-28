//acardion
let acc = document.getElementsByClassName("accordionn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//mask phone
jQuery(function($){
  $("#phone").mask("+7(999) 999-9999");

});

$(function() {
  $('.form__feedback-link').click(function(){
  if($(this).hasClass('checked-link')){
      $(this).removeClass('checked-link');
    } else{
      $(this).addClass('checked-link');
    }
  })
})