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
  $("#phone-modal").mask("+7(999) 999-9999");
});

$(function() {
  $('.form__feedback-link').click(function(){
      $('.form__feedback-link').removeClass('checked-link');
      $(this).addClass('checked-link');
  })

   //modal
  $('.popup-open').click(function() {
		$('.popup-fade').fadeIn(150);
        $('body').css('overflow-y','hidden');
		return false;
	});

    // Клик по ссылке "Закрыть".
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut(150);
        $('body').css('overflow-y','auto');
		return false;
	});        

	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	

})