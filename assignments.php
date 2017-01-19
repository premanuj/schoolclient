<?php
    include("header.php");
?>

<script type="text/javascript">
    var w_id = <?php echo $_GET['w'];?>;
    var type = "<?php echo $_GET['type'];?>";
</script>

<!-- Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        <li><a href="my-account.php#">Home</a></li>
        <li class="active">My Assignment</li>
        <li class="active"><?php echo $_GET['sub']; ?></li>
    </ol>
</div>
<!-- end Breadcrumb -->

<!-- Page Content -->
<div id="page-content">
    <div class="container">
        <header><h1>My Assignments</h1></header>
        <div class="row">
            <div class="col-md-12">
                <!-- <section class = "answer-submited">
                    <div>
                        <p>Answer submitted Successfully</p>
                        <button class="btn btn-sm btn-primary btn-flat pull-left back-assignment-title">Back</button>
                     </div>
                </section> -->
                <section id="my-account">
                    <ul class="nav nav-tabs" id="tabs">
                        <li class="active"><a href="assignments.php#tab-my-assignment" data-toggle="tab" class="view-assignment"><?php echo $_GET['sub']; ?></a></li>
                    </ul><!-- /#my-profile-tabs -->
                    <section class = "answer-submited">
                        <div>
                            <p>Answer submitted Successfully</p>
                            <button class="btn btn-sm btn-primary btn-flat pull-left back-assignment-title">Back</button>
                         </div>
                    </section>
                    <div class="tab-content my-account-tab-content">
                        <div class="tab-pane active" id="tab-my-assignment">
                            <section id="objective-list">
                                <header><h3>Objective Questions</h3></header>
                                <table style="width:100%;">
                                    <thead>
                                    <tr>
                                        <th class="starts" colspan="2">Apptempt All</th>
                                    </tr>
                                    <tr><th colspan="4"><hr></th>></tr>
                                    </thead>
                                    <tbody id = "assignment-opt-ques-table">
                                        
                                    </tbody>
                                </table>
                            </section><!-- /#course-list -->
                            <section id="subjectve-list">
                                <header><h3>Subjective Questions</h3></header>
                                <table style="width:100%;">
                                    <thead>
                                    <tr>
                                        <th class="starts" colspan="2">Apptempt All</th>
                                    </tr>
                                    <tr><th colspan="4"><hr></th>></tr>
                                    </thead>
                                    <tbody id = "assignment-sub-ques-table">
                                        
                                    </tbody>
                                </table>
                            </section><!-- /#course-list -->
                            <button class="btn btn-sm btn-primary btn-flat pull-left submit-answer">Submit</button>
                        </div><!-- /.tab-pane -->
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