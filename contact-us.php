<?php
include("header.php");
?>

<!-- Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li class="active">Contact Us</li>
    </ol>
</div>
<!-- end Breadcrumb -->

<!-- Page Content -->
<div id="page-content">
    <div class="container">
        <div class="row">
            <!--MAIN Content-->
            <div class="col-md-12">
                <div id="page-main">
                    <section id="contact">
                        <header><h1>Contact Us</h1></header>
                        <div class="row">
                            <div class="col-md-1"></div>
                            
                            <div class="col-md-4">
                                <address>
                                    <h3>The Stewart Agency</h3>
                                    <br>
                                    <span>275 Slater Suite 900</span>
                                    <br>
                                    <span>Ottawa, ON K1P 5H9</span>
                                    <br><br>
                                    <abbr title="Person">Contact Person:</abbr> Mohammed Cherkaoui 
                                    <br>
                                    <abbr title="Telephone">Telephone:</abbr> (613) 241-3682
                                    <br>
                                    <abbr title="Email">Email:</abbr> <a href="contact-us.html#">info@stewart-agency.com</a>
                                    <br>
                                    <abbr title="Fax">Fax:</abbr> (613) 241-3682
                                    <br>
                                </address>
                                <div class="icons">
                                    <a href="contact-us.html"><i class="fa fa-twitter"></i></a>
                                    <a href="contact-us.html"><i class="fa fa-facebook"></i></a>
                                    <a href="contact-us.html"><i class="fa fa-pinterest"></i></a>
                                    <a href="contact-us.html"><i class="fa fa-youtube-play"></i></a>
                                </div><!-- /.icons -->                             
                            </div>

                            <div class="col-md-6">
                                <div class="map-wrapper">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.389928525137!2d-0.11316612883517647!3d51.52440760342934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b48959f07e1%3A0xb6b70e6a76950525!2s5+Phoenix+Pl!5e0!3m2!1ssk!2s!4v1395674632609" width="100%" height="260px" frameborder="0" style="border:0"></iframe>
                                </div>
                            </div>

                            <div class="col-md-1"></div>

                        </div>
                    </section>
                    
                    <section id="contact-form" class="clearfix">
                        <div class="col-md-12">
                            <header><h2>Send Us a Message</h2></header>
                            <form class="contact-form" id="contactform" method="post" action="contact-us.html">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <div class="controls">
                                                <label for="name">Your Name</label>
                                                <input type="text" name="name" id="name" required>
                                            </div><!-- /.controls -->
                                        </div><!-- /.control-group -->
                                    </div><!-- /.col-md-4 -->
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <div class="controls">
                                                <label for="email">Your Email</label>
                                                <input type="email" name="email" id="email" required>
                                            </div><!-- /.controls -->
                                        </div><!-- /.control-group -->
                                    </div><!-- /.col-md-4 -->
                                </div><!-- /.row -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <div class="controls">
                                                <label for="orgname">Organisation</label>
                                                <input type="text" name="name" id="name" required>
                                            </div><!-- /.controls -->
                                        </div><!-- /.control-group -->
                                    </div><!-- /.col-md-4 -->
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <div class="controls">
                                                <label for="phone">Phone Number</label>
                                                <input type="number" name="number" id="phone">
                                            </div><!-- /.controls -->
                                        </div><!-- /.control-group -->
                                    </div><!-- /.col-md-4 -->
                                </div><!-- /.row -->
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <div class="controls">
                                                <label for="message">Your Message</label>
                                                <textarea name="message" id="message" required></textarea>
                                            </div><!-- /.controls -->
                                        </div><!-- /.control-group -->
                                    </div><!-- /.col-md-4 -->
                                </div><!-- /.row -->
                                <div class="pull-right">
                                    <input type="submit" class="btn btn-color-primary" id="submit" value="Send a Message">
                                </div><!-- /.form-actions -->
                                <div id="form-status"></div>
                            </form><!-- /.footer-form -->
                        </div>
                        
                    </section>
                </div><!-- /#page-main -->
            </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div>
<!-- end Page Content -->

<?php
include("footer.php");
?>