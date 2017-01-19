$(document).ready(function(){
	$("#my-profile-empty").hide();
	$("#my-profile").hide();

	var individual_profile_details = localStorage.getItem("individual_profile_details");
	individual_profile_details = JSON.parse(individual_profile_details);
	console.log(individual_profile_details);
	

	var user_id = localStorage.getItem('user_id');
	var email = localStorage.getItem('email');

	if(sessionStorage.getItem('access_token')){
		$(".after-login").show();
		$(".before-login").hide();
		//return;
	}else{
		setTimeout(function() {
           window.location.href = "register-sign-in.php";
        }, 1000);
	}	

	var getGrades = function(){
		$("#my-profile").show();
		$("#my-profile-empty").hide();
		$(".save-profile").hide();
		$(".update-profile").show();
		console.log("getGrades");
		$.ajax({
			url: basepath+"/classes",
			type: "GET",
			dataType: "json",
			success: function(response){
				var data = response.data;
				var str = "";
				$.each(data, function(key, value){
					var new_class_id = value['id'];
					var grade = value['grade'];
					console.log("User Grade: "+ user_grade)
					if(grade == user_grade) {						
						str+='<option value = "'+new_class_id+'" selected>Grade'+grade+'</option>';
					} else {
						str+='<option value = "'+new_class_id+'">Grade'+grade+'</option>';
					}
				});
				$("#name").val(fname+ " " +mname+ " "+ lname);
				//$("#class_id .class-default").val(grade);
				$("#dob").val(dob);
				$("#address").val(address);
				$("#contact").val(contact);
				$("#email").val(email);
				$("#join-date").val(join_date);
				$("#class_id").append(str);
			}
		});
	}

	var getEmptyGrades = function(){
		$("#my-profile").hide();
		$("#my-profile-empty").show();
		$(".update-profile").hide();
		$(".save-profile").show();
		var email = localStorage.getItem('email');
		console.log('getEmptyGrades');
		$.ajax({
			url: basepath+"/classes",
			type: "GET",
			dataType: "json",
			success: function(response){
				var data = response.data;
				var str = "";
				$.each(data, function(key, value){
					var new_class_id = value['id'];
					var grade = value['grade'];
					str+='<option value = "'+new_class_id+'">Grade'+grade+'</option>';
				});
				$("#new-name").val();
				//$("#class_id .class-default").val(grade);
				$("#new-dob").val();
				$("#new-address").val();
				$("#new-contact").val();
				$("#new-email").val(email);
				$("#new-join-date").val();
				$("#new-class_id").append(str);
			}
		});
	}


	if(individual_profile_details!=null){
		var fname = individual_profile_details[0].fname;
		var mname = individual_profile_details[0].mname;
		var lname = individual_profile_details[0].lname;
		var address = individual_profile_details[0].address;
		var contact = individual_profile_details[0].contact;
		var email = individual_profile_details[0].email;
		var dob = individual_profile_details[0].dob;
		var user_grade = individual_profile_details[0].grade;
		var student_id = individual_profile_details[0].student_id;
		var class_id = individual_profile_details[0].class_id;
		var join_date = individual_profile_details[0].join_date;

		if (mname===null)
			mname = " ";

		getGrades();
	}
		
	if(individual_profile_details==null){
		getEmptyGrades();
	}


	$(".update-profile").click(function(){
		console.log("update-profile");
		var full_name = $("#name").val();
		//$("#class_id .class-default").val(grade);
		dob = $("#dob").val();
		address = $("#address").val();
		contact = $("#contact").val();
		email = $("#email").val();
		class_id = $("#class_id").val();

		if (!ifBlank("Email", email)){
			console.log("email");
		    return false;
		}
		if (!ifBlank("Address", address))
			{
				console.log("address");
		    return false;
			}
		if (!ifBlank("Contact", contact))
			{
				console.log("contact");
		    return false;
			}
		if (!ifBlank("Name", full_name))
			{
				console.log("name");
		    return false;
			}

		full_name = full_name.split(" ");
		if(full_name.length==3){
			fname = full_name[0];
			mname = full_name[1];
			lname = full_name[2];
		}
		if(full_name.length==2){
			fname = full_name[0];
			lname = full_name[1];
		}
		if(full_name.length==1){
			fname = full_name[0];
		}

		$.ajax({
			url: basepath+"/roles/2/students/"+student_id,
			type: "PUT",
			dataType: "json",
			contextType: "application/json",
			data: {fname: fname, mname: mname, lname: lname, contact: contact, address: address, dob: dob, join_date:join_date, class_id: class_id},
			success: function(response){
				if(response.status===104){
					profileDetails();
				}else{
					console.log("updation failed");
				}
				
			},
			error: function(err){
				console.log(err);
			}
		});
	});


	$(".save-profile").click(function(){
		console.log("save-profile");
		var full_name = $("#new-name").val();
		//$("#class_id .class-default").val(grade);
		dob = $("#new-dob").val();
		address = $("#new-address").val();
		contact = $("#new-contact").val();
		email = $("#new-email").val();
		join_date = $("#new-join-date").val();
		class_id = $("#new-class_id").val();

		var user_id = localStorage.getItem('user_id');

		if (!ifBlank("Email", email)){
			console.log("email");
		    return false;
		}
		if (!ifBlank("Address", address))
			{
				console.log("address");
		    return false;
			}
		if (!ifBlank("Contact", contact))
			{
				console.log("contact");
		    return false;
			}
		if (!ifBlank("Name", full_name))
			{
				console.log("name");
		    return false;
			}

		full_name = full_name.split(" ");
		if(full_name.length==3){
			fname = full_name[0];
			mname = full_name[1];
			lname = full_name[2];
		}
		if(full_name.length==2){
			fname = full_name[0];
			lname = full_name[1];
		}
		if(full_name.length==1){
			fname = full_name[0];
		}

		$.ajax({
			url: basepath+"/users/"+user_id+"/students",
			type: "POST",
			dataType: "json",
			//contextType: "application/json",
			data: {fname: fname, mname: mname, lname: lname, contact: contact, address: address, dob: dob, join_date:join_date, class_id: class_id},
			success: function(response){
				console.log(response);
				if(response.status===105){
					profileDetails();
					getGrades();
				}else{
					console.log("updation failed");
				}
				
			},
			error: function(err){
				console.log(err);
			}
		});
	});

});