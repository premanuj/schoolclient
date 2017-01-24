<html>
<head>
	<title>File upload Node.</title>
</head>
<body>
	<form id="uploadForm" enctype="multipart/form-data" method="post">
	<input type="file" name="userPhoto" id="inputFile" />
	<input type="text" name="text" id="text" />
	<input type="submit" value="Upload Image" name="submit"><br>
	<span id = "status"></span>
</form>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
<script>
	$(document).ready(function() {
		$('#uploadForm').submit(function() {
			console.log("here...");
			var formData = new FormData(document.forms.namedItem("uploadForm"));
			console.log(formData);
			$("#status").empty().text("File is uploading...");
			$.ajax({
				url: 'http://127.0.0.1:3040/api/upload',
				type: 'POST',
				data: formData,
				contentType: false,
			    processData: false,
			    cache: false,
				//dataType: 'json',
				success: function(response){
					console.log(response);
				},
				error: function(err){
					console.log(err);
				}
			});
		});     
	});
</script>
</body>
</html>