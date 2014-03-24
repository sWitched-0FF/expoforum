$(document).ready(function(){
	$('#partners').jcarousel({
		wrap: 'circular'
	});
	$('#prevslide').click(function() {
		$('#partners').jcarousel('scroll', '-=1');
		return false;
	});
	$('#nextslide').click(function() {
		$('#partners').jcarousel('scroll', '+=1');
		return false;
	});
});