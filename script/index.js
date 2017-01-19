var profileDetails, emptyProfileDetails, w_id;
$(document).ready(function(){
	var individual_profile_details =[];
	var student_profile_details = [];
	var student_works_details = [];

	$(".after-login").hide();
	if(sessionStorage.getItem('access_token')){
		$(".after-login").show();
		$(".before-login").hide();
		var user_id = localStorage.getItem("user_id");

		profileDetails = function(){
			$.ajax({
				url: basepath+"/roles/2/users/"+user_id+"/students",
				type: "GET",
				dataType: "json",
				success: function(response){
					if (response.status===105){
						if(response.data.length!=0){
							$(".incomplete-profile").hide();
							$("#save-profile").show();
							$("#update-profile").hide();
							var student_data = response.data[0];
							var fname = student_data.fname;
							var mname = student_data.mname;
							var lname = student_data.lname;

							var address = student_data.address;
							var grade = student_data.grade;
							var contact = student_data.contact;
							var dob = student_data.dob;
							var email = student_data.email;
							var id = student_data.id;
							var class_id = student_data.class_id;
							var join_date = student_data.join_date;

							let json = {
								"fname": fname,
								"mname": mname,
								"lname": lname,
								"address": address,
								"grade": grade,
								"contact": contact,
								"dob": dob,
								"email": email,
								"student_id": id,
								"class_id": class_id,
								"join_date": join_date
							}
							individual_profile_details.push(json);	
							localStorage.setItem("individual_profile_details", JSON.stringify(individual_profile_details));
						}
						
						if(response.data.length==0){
							localStorage.setItem("individual_profile_details", null);
							$(".incomplete-profile").show();
							$("#save-profile").hide();
							$("#update-profile").show();

						}

					}
				}
			});
		}
		profileDetails();


	}
	$("#login").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
		console.log("logging in");
		if (!ifBlank("Email", email))
		    return false;
		if (!ifBlank("password", password))
		    return false;
		$.ajax({
		   	url: basepath+"/roles/2/users/login",
		   	type: "POST",
		   	dataType: "json",
		   	data: {email: email, password: password},
		   	success: function(response){
		   		if(response.status===105){
		   			var access_token = response.data.access_token;
		   			var user_id = response.data.id;
		   			var email = response.data.email;
		   			localStorage.setItem("user_id", user_id);
		   			localStorage.setItem("email", email);
		   			sessionStorage.setItem("access_token", access_token);
		   			console.log("I am logged in");
		   			showSuccess("Login Successful! Redirecting...");
                  	setTimeout(function() {
                      window.location.href = "index.php?ref="+access_token;
                  	}, settimeout);
		   		}else{
		   			showError("Invalid email or password");
		   		}
		   	},
		   	error: function(err){
		   		console.log(err);
		   	}
		});

	});

	$("#logout").click(function(){
		console.log("I am clicked");
		localStorage.clear();
		sessionStorage.clear();
		$(".after-login").hide();
		$(".before-login").show();
		individual_profile_details = [];
		setTimeout(function() {
                      window.location.href = "register-sign-in.php";
                  	}, settimeout);

	});

});