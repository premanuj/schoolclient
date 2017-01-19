<?php
    include("header.php");
?>

<!-- Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        <li><a href="register-sign-in.html#">Home</a></li>
        <li class="active">Log in</li>
    </ol>
</div>
<!-- end Breadcrumb -->

<!-- Page Content -->
<div id="page-content">
    <div class="container">
        <div class="row">
            <!--MAIN Content-->
            <div id="page-main">
                <div class="col-md-10 col-sm-10 col-sm-offset-1 col-md-offset-1">
                    <div class="row">
                        <div class="col-md-3">
                            
                        </div><!-- /.col-md-3 -->
                        <div class="col-md-6">
                            <section id="account-sign-in" class="account-block">
                                <header><h2>Have an Account?</h2></header>
                                <div>
                                    <span class="alert alert-green"></span>
                                    <span class="alert alert-red"></span>
                                </div>
                                <!-- <form role="form" class="clearfix" action="course-joined.html"> -->
                                <form role="form" class="clearfix" action="javascript:;">
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password">
                                    </div>
                                    <button class="btn pull-right" id="login">Log In</button>
                                </form>
                                <hr>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae tincidunt.</p>
                            </section><!-- /#account-block -->
                        </div><!-- /.col-md-6 -->
                        <div class="col-md-3">
                            
                        </div><!-- /.col-md-3 -->
                    </div><!-- /.row -->
                </div><!-- /.col-md-10 -->
            </div><!-- /#page-main -->

            <!-- end SIDEBAR Content-->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div>
<!-- end Page Content -->

<?php
    include("footer.php");
?>