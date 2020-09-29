
document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.container').classList.toggle('s-signup')
	}
);
$('button[name="submit"]').click(function() {
    if($('input[name="pass"]').val().length < 8) {
        alert('Minimum length = 8');
    } else {
        $('form').submit();
    }
});