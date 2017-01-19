$(document).ready(function(){
	$(".my-profile-empty").hide;
	$(".my-profile").hide;

	var work_details = [];

	var individual_profile_details = localStorage.getItem("individual_profile_details");
	individual_profile_details = JSON.parse(individual_profile_details);

	var getWorks = function(){
		$.ajax({
			url: basepath+"/students/"+student_id+"/classes/"+class_id+"/works",
			type: "GET",
			dataType: "json",
			success: function(response){
				if(response.status===105){
					var data = response.data;
					if(data.length!=0){
						$.each(data, function(key, value){
							let json = {
								"work_id" : value['id'],
								"work_title": value['work_title'],
								"submit_date": value['submit_date'],
								"work_type" : value['work_type'],
								"subject": value['subject']
							}
							work_details.push(json);
						});
						localStorage.setItem("work_details", JSON.stringify(work_details));
					}
				}
			}
		});
	}


	if(individual_profile_details!=null){
		var user_id = localStorage.getItem('user_id');
		var fname = individual_profile_details[0].fname;
		var mname = individual_profile_details[0].mname;
		var lname = individual_profile_details[0].lname;
		var address = individual_profile_details[0].address;
		var contact = individual_profile_details[0].contact;
		var email = individual_profile_details[0].email;
		var dob = individual_profile_details[0].dob;
		var grade = individual_profile_details[0].grade;
		var student_id = individual_profile_details[0].student_id;
		var class_id = individual_profile_details[0].class_id;
		var join_date = individual_profile_details[0].join_date;

		if (mname===null)
			mname = " ";

		getWorks();
	}

	if(individual_profile_details==null){
		console.log('Please complete your profile to access.');
		return false;
	}


	$(".view-assignment").click(function(){
		var assignment_details = work_details.filter((assignment, index)=>assignment.work_type=='h');
		var str = "";
		var length = 0;
		console.log(assignment_details);
		$.ajax({
				url: basepath+"/students/"+student_id+"/results",
				type: "GET",
				dataType: "json",
				success: function(response){
					let data = response.data;
					console.log("-----------------");
					console.log(data.length);
					console.log("-----------------");
					if(data.length==0){

						$.each(assignment_details, function(key, value){
							length+=1;
							var subject = value['subject'];
							var work_title = value['work_title'];
							var submit_date = value['submit_date'];
							var work_id = value['work_id'];
							var student_id = individual_profile_details[0].student_id;
							str+=' <tr class="status-not-started">';
							str+='<th class="course-title"><a class = "assignment-questions" href="assignments.php?type=assignment&w='+work_id+'&sub='+subject+'">'+work_title+'</a></th>';
							str+='<th class="course-category"><a class = "assignment-questions" href="assignments.php?type=assignment&w='+work_id+'&sub='+subject+'">'+subject+'</a></th>';
							str+='<th>'+submit_date+'</th>';
							str+='</tr>'
							if(assignment_details.length==length){
								$("#assignment-table").html(str);
							}
						});
					}else{
						let count = 0;
							wk_id = "";

						$.each(data, function(keyData, valueData){
								 wk_id = valueData.work_id;
								assignment_details = assignment_details.filter((assignment, index)=>assignment.work_id!=wk_id);
						});

						$.each(assignment_details, function(key, value){
							length+=1;
							var subject = value['subject'];
							var work_title = value['work_title'];
							var submit_date = value['submit_date'];
							var work_id = value['work_id'];
							var student_id = individual_profile_details[0].student_id;
							str+=' <tr class="status-not-started">';
							str+='<th class="course-title"><a class = "assignment-questions" href="assignments.php?type=assignment&w='+work_id+'&sub='+subject+'">'+work_title+'</a></th>';
							str+='<th class="course-category"><a class = "assignment-questions" href="assignments.php?type=assignment&w='+work_id+'&sub='+subject+'">'+subject+'</a></th>';
							str+='<th>'+submit_date+'</th>';
							str+='</tr>'
							if(assignment_details.length==length){
								$("#assignment-table").html(str);
							}
						});
					}
				}
			});		
	});


	$(".result-assignment").click(function(){
		var assignment_details = work_details.filter((assignment, index)=>assignment.work_type=='h');
		console.log(student_id);
		var str = "";
		var length = 0;

		$.each(assignment_details, function(key, value){
			length+=1;
			var subject = value['subject'];
			var work_title = value['work_title'];
			var submit_date = value['submit_date'];
			var work_id = value['work_id'];
			$.ajax({
				url: basepath+ "/student/"+student_id+"/works/"+work_id+"/results",
				type: "get",
				dataType: "json",
				success: function(response){
					let data = response.data;
					console.log(data.length);

					if (data.length==0) {
						str+=' <tr class="status-not-started">';
						str+='<th class="course-title">'+work_title+'</th>';
						str+='<th class="course-category">'+subject+'</th>';
						str+='<th>'+submit_date+'</th>';
						str+='<th> Not Submitted </th>';
						str+='</tr>'
						if(assignment_details.length==length){
							$("#assignment-result-table").html(str);
						}
					}else{
						$.each(data, function(keyROw, valueRow){
							console.log("jkhkjhjk");
							str+=' <tr class="status-not-started">';
							str+='<th class="course-title">'+work_title+'</th>';
							str+='<th class="course-category">'+subject+'</th>';
							str+='<th>'+submit_date+'</th>';
							str+='<th>'+valueRow.obtained_marks+'</th>';
							str+='</tr>'
							if(assignment_details.length==length){
								$("#assignment-result-table").html(str);
							}
						});
					}
				}
			});
		});
		
	});


	$(".view-exam").click(function(){
		var exam_details = work_details.filter((exam, index)=>exam.work_type=='e');
		var str = "";
		var length = 0;
		console.log('inside exam');
		console.log(exam_details);
		$.ajax({
				url: basepath+"/students/"+student_id+"/results",
				type: "GET",
				dataType: "json",
				success: function(response){
					let data = response.data;
					console.log("-----------------");
					console.log(data.length);
					console.log("-----------------");
					if(data.length==0){
						$.each(exam_details, function(key, value){
							length+=1;
							var subject = value['subject'];
							var work_title = value['work_title'];
							var submit_date = value['submit_date'];
							var work_id = value['work_id'];
							var student_id = individual_profile_details[0].student_id;
							str+=' <tr class="status-not-started">';
							str+='<th class="course-title"><a class = "exam-questions" href="exams.php?type=exam&w='+work_id+'&sub='+subject+'">'+work_title+'</a></th>';
							str+='<th class="course-category"><a class = "exam-questions" href="exams.php?type=exam&w='+work_id+'&sub='+subject+'">'+subject+'</a></th>';
							str+='<th>'+submit_date+'</th>';
							str+='</tr>'
							if(exam_details.length==length){
								$("#exam-table").html(str);
							}
						});
					}else{
						let count = 0;
							wk_id = "";
							console.log('here...');

						$.each(data, function(keyData, valueData){
								wk_id = valueData.work_id;
								exam_details = exam_details.filter((exam, index)=>exam.work_id!=wk_id);
						});

						$.each(exam_details, function(key, value){
							length+=1;
							var subject = value['subject'];
							var work_title = value['work_title'];
							var submit_date = value['submit_date'];
							var work_id = value['work_id'];
							var student_id = individual_profile_details[0].student_id;
							str+=' <tr class="status-not-started">';
							str+='<th class="course-title"><a class = "exam-questions" href="exams.php?type=exam&w='+work_id+'&sub='+subject+'">'+work_title+'</a></th>';
							str+='<th class="course-category"><a class = "exam-questions" href="exams.php?type=exam&w='+work_id+'&sub='+subject+'">'+subject+'</a></th>';
							str+='<th>'+submit_date+'</th>';
							str+='</tr>'
							if(exam_details.length==length){
								$("#exam-table").html(str);
							}
						});
					}
				}
			});		
		
	});

	$(".result-exam").click(function(){
		console.log("this....");
		var exam_details = work_details.filter((exam, index)=>exam.work_type=='e');
		console.log(exam_details);
		var str = "";
		var length = 0;

		$.each(exam_details, function(key, value){
			length+=1;
			var subject = value['subject'];
			var work_title = value['work_title'];
			var submit_date = value['submit_date'];
			var work_id = value['work_id'];
			$.ajax({
				url: basepath+ "/student/"+student_id+"/works/"+work_id+"/results",
				type: "get",
				dataType: "json",
				success: function(response){
					console.log(response);
					let data = response.data;
					if (data.length==0) {
						console.log('eeeeeee.....');
						str+=' <tr class="status-not-started">';
						str+='<th class="course-title">'+work_title+'</th>';
						str+='<th class="course-category">'+subject+'</th>';
						str+='<th>'+submit_date+'</th>';
						str+='<th> Not Submitted </th>';
						str+='</tr>'
						if(exam_details.length==length){
							$("#exam-result-table").html(str);
						}
					}else{
						$.each(data, function(keyROw, valueRow){
							str+=' <tr class="status-not-started">';
							str+='<th class="course-title">'+work_title+'</th>';
							str+='<th class="course-category">'+subject+'</th>';
							str+='<th>'+submit_date+'</th>';
							str+='<th>'+valueRow.obtained_marks+'</th>';
							str+='</tr>'
							if(exam_details.length==length){
								$("#exam-result-table").html(str);
							}
						});
						
					}

				}
			});
		});
		
	});

	if(w_id){
		$("#objective-list").hide();
		$("#subjective-list").hide();
		console.log(w_id);
		var w_details = localStorage.getItem('work_details');
			w_details = JSON.parse(w_details);
			w_details = w_details.filter((work, index)=>work.work_id==w_id);
		$.ajax({
			url: basepath+"/student/"+student_id+"/works/"+w_id+"/questions",
			type: "GET",
			dataType: "json",
			success: function(response){
				if(response.status===105){
					var data = response.data;
					var option_data = data.option;
					var question_data = data.question;
					var select_objective_questions = question_data.filter((question, index)=>question.question_type=='o');
					var select_subjective_questions = question_data.filter((question, index)=>question.question_type=='s');

					var objective_question_length = select_objective_questions.length;
					var subjective_question_length = select_subjective_questions.length;
					console.log('subjective_length: '+select_subjective_questions);
					console.log('objective_length: '+select_objective_questions);

					var strObj, strSub, sn;

					if(subjective_question_length===0 && objective_question_length===0){
						$("#objective-list").hide();
						$("#subjective-list").hide();
						var strHtml = '<p> No question available yet.</p>';
						console.log(work_details);
						if(w_details[0].work_type=='h'){
						strHtml+='<a href = "my-account.php#tab-my-courses" class="btn btn-sm btn-primary btn-flat pull-left back">Back</a>';
						$("#tab-my-assignment").html(strHtml);
						}
						if(w_details[0].work_type=='e'){
						strHtml+='<a href = "my-account.php#tab-my-exams" class="btn btn-sm btn-primary btn-flat pull-left back">Back</a>';
						$("#tab-my-exam").html(strHtml);
						}
						
					}


					if(subjective_question_length!=0 && objective_question_length!=0){
						console.log("both");
						$("#objective-list").show();
						$("#subjective-list").show();
						strObj = " ";
						strSub = " ";
						sn = 0;
						$.each(select_objective_questions, function(key, value){
							strObj = " ";
							sn+=1;
							strObj+='<form class = "objective-list">';
							strObj+='<table style = "width:100%;">';
							strObj+='<tr>';
							strObj+='<th qid = "'+value.id+'" value = "'+value.id+'" class = "obj-question" colspan="2">&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
							strObj+='</tr><tr><th colspan="2">&nbsp&nbsp&nbsp</th></tr>';
							strObj+='</tr><tr><th colspan="2">Options:</th></tr>';

							 var options = option_data[sn-1];
							 var q_options = options.filter((option, index)=>option.question_id == value.id);
							 var opt_class = ["a", "b", "c", "d"]
							 var opt = 0;
							$.each(q_options, function(keyopt, valueOpt){
								strObj+='<tr><td></td><td><input type="radio" name = "a" value="'+valueOpt.id+'" class="opt-class '+opt_class[opt]+'"/>&nbsp&nbsp&nbsp'+valueOpt.label+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+valueOpt.opt+'</td></tr>';
								opt+=1;
							});
							strObj+='</tr><tr><th colspan="5"><hr></th></tr>';
							strObj+='</table>';
							strObj+='</form>';
							if(w_details[0].work_type=='h'){
								$("#assignment-opt-ques-table").append(strObj);
							}

							if(w_details[0].work_type=='e'){
								$("#exam-opt-ques-table").append(strObj);
							}
							
						});
						sn = 0;
						$.each(select_subjective_questions, function(key, value){
							sn+=1;
							console.log(sn);
							strSub+='<form class = "subjective-list">'
							strSub+='<table style = "width:100%;">';
							strSub+='<tr>';
							strSub+='<th colspan="2" value = "'+value.id+'" class = "sub-question" >&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
							strSub+='</tr>';
							strSub+='<tr><th colspan="2">&nbsp&nbsp&nbsp</th></tr>';
							strSub+='<tr><th colspan="2">Answer:</th></tr>';
							strSub+='<tr><th colspan="2"><textarea rows="10" class = "sub-answer" qid = "'+value.id+'"> </textarea></th></tr>';
							strSub+='</table>';
							strSub+='</form>';
						});

						if(w_details[0].work_type=='h'){
							$("#assignment-sub-ques-table").append(strSub);
						}

						if(w_details[0].work_type=='e'){
							$("#exam-sub-ques-table").append(strSub);
						}
					}

					if(subjective_question_length==0 && objective_question_length!=0){
						console.log("objective-list");
						$("#objective-list").show();
						$("#subjective-list").hide();

						strObj = " ";
						sn = 0;
						$.each(select_objective_questions, function(key, value){
							strObj = " ";
							sn+=1;
							strObj+='<form class = "objective-list">';
							strObj+='<table style = "width:100%;">';
							strObj+='<tr>';
							strObj+='<th qid = "'+value.id+'" value = "'+value.id+'" class = "obj-question" colspan="2">&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
							strObj+='</tr><tr><th colspan="2">&nbsp&nbsp&nbsp</th></tr>';
							strObj+='</tr><tr><th colspan="2">Options:</th></tr>';

							 var options = option_data[sn-1];
							 var q_options = options.filter((option, index)=>option.question_id == value.id);
							 var opt_class = ["a", "b", "c", "d"]
							 var opt = 0;
							$.each(q_options, function(keyopt, valueOpt){
								strObj+='<tr><td></td><td><input type="radio" name = "a" value="'+valueOpt.id+'" class="opt-class '+opt_class[opt]+'"/>&nbsp&nbsp&nbsp'+valueOpt.label+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+valueOpt.opt+'</td></tr>';
								opt+=1;
							});
							strObj+='</tr><tr><th colspan="5"><hr></th></tr>';
							strObj+='</table>'
							strObj+='</form>'
							if(w_details[0].work_type=='h'){
								$("#assignment-opt-ques-table").append(strObj);
							}

							if(w_details[0].work_type=='e'){
								$("#exam-opt-ques-table").append(strObj);
							}
							
						});
					}

					if(subjective_question_length!=0 && objective_question_length==0){
						console.log("subjective-list");
						$("#objective-list").hide();
						$("#subjective-list").show();
						strSub = " ";
						sn = 0;
						$.each(select_subjective_questions, function(key, value){
							sn+=1;
							console.log(sn);
							strSub+='<form class = "subjective-list">';
							strSub+='<table style = "width:100%;">';
							strSub+='<tr>';
							strSub+='<th colspan="2" value = "'+value.id+'" class = "sub-question">&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
							strSub+='</tr>';
							strSub+='<tr><th colspan="2">&nbsp&nbsp&nbsp</th></tr>';
							strSub+='<tr><th colspan="2">Answer:</th></tr>';
							strSub+='<tr><th colspan="2"><textarea rows="10" class = "sub-answer" qid = "'+value.id+'"> </textarea></th></tr>';
							strSub+='</table>';
							strSub+='</form>';
						});
						
						if(w_details[0].work_type=='h'){
							$("#assignment-sub-ques-table").append(strSub);
						}

						if(w_details[0].work_type=='e'){
							$("#exam-sub-ques-table").append(strSub);
						}
					}
				}
			}
		});
	}

	$(".submit-answer").click(function(){
		$("#tab-my-exam").hide();
		$("#tab-my-assignment").hide();
		$(".answer-submited").show();
		var final_submit;
		var objective_json = $(".objective-list").map(function(){
			var question = $(this).find(".obj-question").attr("value");
			var answer = $(this).find(".opt-class ").val();
			//console.log("question: "+question);
			var data = {
				"question": question,
				"answer": answer
			}
			return data
		}).get();	
		console.log(objective_json);

		var subjective_json = $(".subjective-list").map(function(){
			var question = $(this).find(".sub-question").attr("value");
			var answer = $(this).find(".sub-answer ").val();
			var data = {
				"question": question,
				"answer": answer
			}
			return data;
		}).get();
		console.log(subjective_json);

		if(objective_json.length!=0 && subjective_json.length!=0){
			var q_collection = [];
			var a_collection = [];
			for(var i = 0; i< objective_json.length; i++){
				q_collection.push(objective_json[i].question);
				a_collection.push(objective_json[i].answer);
			}
			for(var i = 0; i< objective_json.length; i++){
				q_collection.push(subjective_json[i].question);
				a_collection.push(subjective_json[i].answer);
			}
			final_submit = {
				"q_id" : q_collection,
				"answer": a_collection
			};
			console.log(final_submit);
			final_submit = JSON.stringify(final_submit);
			console.log(final_submit);
		}
		if(objective_json.length===0 && subjective_json.length!=0){
			console.log('subjective only');
			for(var i = 0; i< objective_json.length; i++){
				q_collection.push(subjective_json[i].question);
				a_collection.push(subjective_json[i].answer);
			}
			final_submit = {
				"q_id" : q_collection,
				"answer": a_collection
			};
			console.log(final_submit);
			final_submit = JSON.stringify(final_submit);
			console.log(final_submit);
		}

		if(objective_json.length!=0 && subjective_json.length===0){
			for(var i = 0; i< objective_json.length; i++){
				q_collection.push(objective_json[i].question);
				a_collection.push(objective_json[i].answer);
			}
			final_submit = {
				"q_id" : q_collection,
				"answer": a_collection
			};

			console.log(final_submit);
			final_submit = JSON.stringify(final_submit);
			console.log(final_submit);
		}

		var user_id = localStorage.getItem('user_id');
		var student_id = individual_profile_details[0].student_id;
		$.ajax({
			url : basepath+"/users/"+user_id+"/students/"+student_id+"/answers",
			type: "POST",
			dataType: "json",
			contentType: "application/json",
			data: final_submit,
			success: function(response){
				console.log(response);
			}
		});
	});
	
	$(".back-assignment-title").click(function(){
		$("#tab-my-assignment").hide();
		setTimeout(function() {
                window.location.href = "my-account.php#tab-my-courses";
            }, settimeout);
	});

	$(".back-exam-title").click(function(){
		$("#tab-my-exam").hide();
		setTimeout(function() {
                window.location.href = "my-account.php#tab-my-exams";
            }, settimeout);
	});
});