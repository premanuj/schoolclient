<?php
	include("header.php");
?>

<section>
	<form enctype="multipart/form-data" action="#" method="POST" id="image-form">
	<input type="file" name="image" />
	<input type="submit" value="upload">
</form>	
</section>

<?php
	include("footer.php");
?>
<script type="text/javascript">
	$("#image-form").on("submit", function(){
		var form_data = new FormData(this);
		console.log("here");
		console.log(form_data);
	});
</script>