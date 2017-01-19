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

	


	var getAssignmentQuestion = function(){

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
	}


	$(".view-assignment").click(function(){
		var assignment_details = work_details.filter((assignment, index)=>assignment.work_type=='h');
		var str = "";
		var length = 0;
		console.log(assignment_details);
		$.each(assignment_details, function(key, value){
			length+=1;
			var subject = value['subject'];
			var work_title = value['work_title'];
			var submit_date = value['submit_date'];
			var work_id = value['work_id'];
			str+=' <tr class="status-not-started">';
			str+='<th class="course-title"><a class = "assignment-questions" href="assignments.php?w='+work_id+'&sub='+subject+'">'+work_title+'</a></th>';
			str+='<th class="course-category"><a class = "assignment-questions" href="assignments.php?w='+work_id+'&sub='+subject+'">'+subject+'</a></th>';
			str+='<th>'+submit_date+'</th>';
			str+='</tr>'
			if(assignment_details.length==length){
				$("#assignment-table").html(str);
			}
		});
		
	});

	$(".view-exam").click(function(){
		var assignment_details = work_details.filter((assignment, index)=>assignment.work_type=='e');
		var str = "";
		var length = 0;

		$.each(assignment_details, function(key, value){
			length+=1;
			var subject = value['subject'];
			var work_title = value['work_title'];
			var submit_date = value['submit_date'];
			var work_id = value['work_id'];
			str+=' <tr class="status-not-started">';
			str+='<th class="course-title"><a href="exams.php?w='+work_id+'">'+work_title+'</a></th>';
			str+='<th class="course-category"><a href="exams.php?w='+work_id+'">'+subject+'</a></th>';
			str+='<th>'+submit_date+'</th>';
			str+='</tr>'
			if(assignment_details.length==length){
				$("#exam-table").html(str);
			}
		});
		
	});

	if(w_id){
		$.ajax({
			url: basepath+"/student/"+student_id+"/works/"+w_id+"/questions",
			type: "GET",
			dataType: "json",
			success: function(response){
				console.log(response);
				if(response.status===105){
					var data = response.data;
					var option_data = data.option;
					var question_data = data.question;

					var select_objective_questions = question_data.filter((question, index)=>question.question_type=='o');
					var select_subjective_questions = question_data.filter((question, index)=>question.question_type=='s');

					var objective_question_length = select_objective_questions.length;
					var subjective_question_length = select_subjective_questions.length;

					var strObj, strSub, sn;

					if(subjective_question_length!=0 && objective_question_length!=0){
						$("#objective-list").show();
						$("#subjective-list").show();
						strObj = " ";
						strSub = " ";
						sn = 0;
						$.each(select_objective_questions, function(key, value){
							strObj = " ";
							sn+=1;
							
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
							$("#assignment-opt-ques-table").append(strObj);
							
						});
						sn = 0;
						$.each(select_subjective_questions, function(key, value){
							sn+=1;
							console.log(sn);
							
							strSub+='<tr>';
							strSub+='<th colspan="2" value = "'+value.id+'" class = "sub-question" >&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
							strSub+='</tr><tr><th colspan="2">&nbsp&nbsp&nbsp</th></tr>';
							strSub+='</tr><tr><th colspan="2">Answer:</th></tr>';
							strSub+='</tr><tr><th colspan="2"><textarea rows="10" class = "sub-answer" qid = "'+value.id+'"> </textarea></th></tr>';

						});
						$("#assignment-sub-ques-table").append(strSub);
					}

					if(subjective_question_length==0 && objective_question_length!=0){
						$("#objective-list").show();
						$("#subjective-list").hide();

						strObj = " ";
						sn = 0;
						$.each(select_objective_questions, function(key, value){
							strObj = " ";
							sn+=1;
							
							strObj+='<tr>';
							strObj+='<th qid = "'+value.id+'" class = "obj-question" colspan="2">&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
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
							$("#assignment-opt-ques-table").append(strObj);
							
						});
					}

					if(subjective_question_length!=0 && objective_question_length==0){
						$("#objective-list").hide();
						$("#subjective-list").show();
						strSub = " ";
						sn = 0;
						$.each(select_subjective_questions, function(key, value){
							sn+=1;
							console.log(sn);
							
							strSub+='<tr>';
							strSub+='<th colspan="2" value = "'+value.id+'" class = "sub-question">&nbsp&nbsp&nbsp'+sn+'&nbsp&nbsp&nbsp'+value.question_title+'</th>';
							strSub+='</tr><tr><th colspan="2">&nbsp&nbsp&nbsp</th></tr>';
							strSub+='</tr><tr><th colspan="2">Answer:</th></tr>';
							strSub+='</tr><tr><th colspan="2"><textarea rows="10" class = "sub-answer" qid = "'+value.id+'"> </textarea></th></tr>';

						});
						$("#assignment-sub-ques-table").append(strSub);
					}
				}
			}
		});
	}

	$(".submit-answer").click(function(){
		var objective_json = $("#objective-list").map(function(){
			var question = $(this).find(".obj-question").val();
			var answer = $(this).find(".opt-class ").val();
			//console.log("question: "+question);
			var data = {
			//	"question": question,
				"answer": answer
			}
			return data
		}).get();	
		console.log(objective_json);

		var subjective_json = $("#subjectve-list").map(function(){
			var question = $(this).find(".sub-question").attr("value");
			var answer = $(this).find(".sub-answer ").val();
			var data = {
				"question": question,
				"answer": answer
			}
			return data;
		}).get();
		console.log(subjective_json);
	});
});