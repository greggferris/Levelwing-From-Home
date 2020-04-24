$('.blue-boxes span').click(function(e) {
	$(e.target).next('ul').slideToggle('fast');
});