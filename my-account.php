<?php
    include("header.php");
?>

<!-- Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        <li><a href="my-account.php#">Home</a></li>
        <li class="active">My Profile</li>
    </ol>
</div>
<!-- end Breadcrumb -->

<!-- Page Content -->
<div id="page-content">
    <div class="container">
        <header><h1>My Account</h1></header>
        <div class="row">
            <div class="col-md-12">
                <section id="my-account">
                    <ul class="nav nav-tabs" id="tabs">
                        <li class="active"><a href="my-account.php#tab-profile" data-toggle="tab">Profile</a></li>
                        <li><a href="my-account.php#tab-my-courses" data-toggle="tab" class="view-assignment">My Assignments</a></li>
                        <li><a href="my-account.php#tab-my-assignment-result" data-toggle="tab" class="result-assignment">Assignments Result</a></li>
                        <li><a href="my-account.php#tab-my-exams" data-toggle="tab" class="view-exam">My Exams</a></li>
                        <li><a href="my-account.php#tab-my-exam-result" data-toggle="tab" class="result-exam">Exams Result</a></li>
                        <li><a href="my-account.php#tab-change-password" data-toggle="tab">Change Password</a></li>
                    </ul><!-- /#my-profile-tabs -->
                    <div class="tab-content my-account-tab-content">
                        <div class="tab-pane active" id="tab-profile">
                            <section id="my-profile">
                                <header><h3>My Profile</h3></header>
                                <div class="my-profile">
                                    <figure class="profile-avatar">
                                        <!-- <div class="image-wrapper"><img src="assets/img/profile-avatar.jpg"></div> -->
                                        <div class="image-wrapper"><img src="http://127.0.0.1:4040/images/user.png"></div>
                                    </figure>
                                    <article>
                                        <div class="table-responsive">
                                            <table class="my-profile-table">
                                                <tbody>
                                                <tr>
                                                    <td class="title" >Full Name</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="name">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Grade</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <select id="class_id" class="form-control" name="grade">
                                                            </select>
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Date of Birth</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="dob" readonly>
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Join Date</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="join-date" readonly>
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Contact </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="contact">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Address </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="address">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Primary Email </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="email" readonly>
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <!-- <tr>
                                                    <td class="title">Change Photo</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="file" id="change-photo">
                                                        </div>
                                                    </td>
                                                </tr> -->
                                                </tbody>
                                            </table>
                                        </div>
                                        <button class="btn pull-right update-profile">Save Changes</button>
                                        <button class="btn pull-right save-profile">Save Profile</button>
                                    </article>
                                </div><!-- /.my-profile -->
                            </section><!-- /#my-profile -->

                            <section id="my-profile-empty">
                                <header><h3>My Profile</h3></header>
                                <div class="my-profile">
                                <p class="incomplete-profile">Please Complete Your Profile:</p>
                                    <figure class="profile-avatar">
                                        <div class="image-wrapper"><img src="assets/img/profile-avatar.jpg"></div>
                                    </figure>
                                    <article>
                                        <div class="table-responsive">
                                            <table class="my-profile-table">
                                                <tbody>
                                                <tr>
                                                    <td class="title" >Full Name</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="new-name">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Grade</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <select id="new-class_id" class="form-control" name="grade">
                                                              <option class = "class-default" value="3">q</option>
                                                            </select>
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Date of Birth</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="date" class="form-control" id="new-dob">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Join Date</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="date" class="form-control" id="new-join-date">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Contact </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="new-contact">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Address </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="new-address">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Primary Email </td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="new-email" readonly>
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="title">Change Photo</td>
                                                    <td>
                                                        <div class="input-group">
                                                            <input type="file" id="change-photo">
                                                        </div><!-- /input-group -->
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button class="btn pull-right update-profile">Save Changes</button>
                                        <button class="btn pull-right save-profile">Save Profile</button>
                                    </article>
                                </div><!-- /.my-profile -->
                            </section><!-- /#my-profile -->
                        </div><!-- /tab-pane -->
                        <div class="tab-pane" id="tab-my-courses">
                            <section id="course-list">
                                <header><h3>My Assignments</h3></header>
                                <table class="table table-hover table-responsive course-list-table tablesorter">
                                    <thead>
                                    <tr>
                                        <th>Assignment Description</th>
                                        <th>Course Name</th>
                                        <th class="starts">Due Date</th>
                                    </tr>
                                    </thead>
                                    <tbody id = "assignment-table">
                                   
                                    </tbody>
                                </table>
                                <div class="center">
                                    <ul class="pagination">
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div>
                            </section><!-- /#course-list -->
                        </div><!-- /.tab-pane -->

                        <div class="tab-pane" id="tab-my-assignment-result">
                            <section id="course-list">
                                <header><h3>Assignments Result</h3></header>
                                <table class="table table-hover table-responsive course-list-table tablesorter">
                                    <thead>
                                    <tr>
                                        <th>Assignment Description</th>
                                        <th>Course Name</th>
                                        <th class="starts">Due Date</th>
                                        <th class="starts">Score</th>
                                    </tr>
                                    </thead>
                                    <tbody id = "assignment-result-table">
                                   
                                    </tbody>
                                </table>
                                <div class="center">
                                    <ul class="pagination">
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div>
                            </section><!-- /#course-list -->
                        </div><!-- /.tab-pane -->

                        <div class="tab-pane" id="tab-my-exams">
                            <section id="course-list">
                                <header><h3>My Exams</h3></header>
                                <table class="table table-hover table-responsive course-list-table tablesorter">
                                    <thead>
                                    <tr>
                                        <th>Exam Description</th>
                                        <th>Course Name</th>
                                        <th class="starts">Due Date</th>
                                    </tr>
                                    </thead>
                                    <tbody id = "exam-table">
                                   
                                    </tbody>
                                </table>
                                <div class="center">
                                    <ul class="pagination">
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div>
                            </section><!-- /#course-list -->
                        </div><!-- /.tab-pane -->

                        <div class="tab-pane" id="tab-my-exam-result">
                            <section id="course-list">
                                <header><h3>Exams Result</h3></header>
                                <table class="table table-hover table-responsive course-list-table tablesorter">
                                    <thead>
                                    <tr>
                                        <th>Assignment Description</th>
                                        <th>Course Name</th>
                                        <th class="starts">Due Date</th>
                                        <th class="starts">Score</th>
                                    </tr>
                                    </thead>
                                    <tbody id = "exam-result-table">
                                   
                                    </tbody>
                                </table>
                                <div class="center">
                                    <ul class="pagination">
                                        <li class="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div>
                            </section><!-- /#course-list -->
                        </div><!-- /.tab-pane -->

                        <div class="tab-pane" id="tab-change-password">
                            <section id="password">
                                <header><h3>Change Password</h3></header>
                                <div class="row">
                                    <div class="col-md-5 col-md-offset-4">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            In sollicitudin mi id urna pulvinar, in ornare dui scelerisque.
                                            Nunc nec odio eros
                                        </p>
                                        <form role="form" class="clearfix" action="course-joined.html">
                                            <div class="form-group">
                                                <label for="current-password">Current Password</label>
                                                <input type="password" class="form-control" id="current-password">
                                            </div>
                                            <div class="form-group">
                                                <label for="new-password">New Password</label>
                                                <input type="password" class="form-control" id="new-password">
                                            </div>
                                            <div class="form-group">
                                                <label for="repeat-new-password">Repeat New Password</label>
                                                <input type="password" class="form-control" id="repeat-new-password">
                                            </div>
                                            <button type="submit" class="btn pull-right">Change Password</button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div><!-- /.tab-content -->
                </section>
            </div> <!--col-md-12 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div>
<!-- end Page Content -->

<?php
include("footer.php");
?>
<script type="text/javascript" src="script/my-account.js"></script>
<script type="text/javascript" src="script/my-work.js"></script>