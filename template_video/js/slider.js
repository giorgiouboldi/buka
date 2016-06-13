var imgs = [
	'slide1.png',
	'slide2.png',
	'slide3.png',
	'slide4.png'
	]

var count = 0;

$('#slider').on('click', function(d){
	count++;
	if(count >= imgs.length){
		count = 0;
	}
	$('#slider img').attr('src', 'img/' + imgs[count])
})