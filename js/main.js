(function(){
	document.querySelector('.hamburger').addEventListener('click', function() {
		var header = document.querySelector('header.header');
		var body = document.querySelector('body');
		if(header.classList.contains('mobile-open')) {
			header.classList.remove('mobile-open');
			body.classList.remove('modal-open');

		}
		else {
			header.classList.add('mobile-open');
			body.classList.add('modal-open');
		}
	});
})();