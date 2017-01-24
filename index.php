<?php
include("header.php");
?>

<!-- Page Content -->
<div id="page-content">
<!-- Slider -->
<div id="homepage-carousel">
    <div class="container">
        <div class="homepage-carousel-wrapper">
            <div class="row">
                <div class="col-md-6 col-sm-7">
                    <div class="image-carousel">
                        <div class="image-carousel-slide"><img src="assets/img/slide-1.jpg" alt=""></div>
                        <div class="image-carousel-slide"><img src="assets/img/slide-2.jpg" alt=""></div>
                        <div class="image-carousel-slide"><img src="assets/img/slide-3.jpg" alt=""></div>
                    </div><!-- /.slider-image -->
                </div><!-- /.col-md-6 -->
                <div class="col-md-6 col-sm-5">
                    <div class="slider-content">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Join the comunity of modern thinking students</h1>
                                <form id="slider-form" role="form" action="index.html" method="post">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input class="form-control has-dark-background" name="slider-name" id="slider-name" placeholder="Full Name" type="text" required>
                                            </div>
                                        </div><!-- /.col-md-6 -->
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <input class="form-control has-dark-background" name="slider-email" id="slider-email" placeholder="Email" type="email" required>
                                            </div>
                                        </div><!-- /.col-md-6 -->
                                    </div><!-- /.row -->
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <select name="slider-study-level" id="slider-study-level" class=" form-control has-dark-background">
                                                    <option value="- Not selected -">Language</option>
                                                    <option value="English">English</option>
                                                    <option value="French">French</option>
                                                </select>
                                            </div><!-- /.form-group -->
                                        </div><!-- /.col-md-6 -->
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <select name="slider-course" id="slider-course" class="form-control has-dark-background">
                                                    <option value="- Not selected -">Courses</option>
                                                    <option value="ILC">Individual Learning Course </option>
                                                    <option value="AW1">Administrative Writing I</option>
                                                    <option value="AW2">Administrative Writing II</option>
                                                    <option value="C1">Conversation I</option>
                                                    <option value="C2">Conversation II</option>
                                                </select>
                                            </div><!-- /.form-group -->
                                        </div><!-- /.col-md-6 -->
                                    </div><!-- /.row -->
                                    <button type="submit" id="slider-submit" class="btn btn-framed pull-right">Submit</button>
                                    <div id="form-status"></div>
                                </form>
                            </div><!-- /.col-md-12 -->
                        </div><!-- /.row -->
                    </div><!-- /.slider-content -->
                </div><!-- /.col-md-6 -->
            </div><!-- /.row -->
            <div class="background"></div>
        </div><!-- /.slider-wrapper -->
        <div class="slider-inner"></div>
    </div><!-- /.container -->
</div>
<!-- end Slider -->

<!-- COurses -->
<div class="block">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <section class="events small" id="events-small">
                    <header>
                        <h2>Our Courses</h2>
                    </header>
                    <div class="section-content">
                        
                        <article class="event">
                            <aside>
                                <header>
                                    <a href="course-detail.html">Individual Learning Course</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                    
                        <article class="event">
                            <aside>
                                <header>
                                    <a href="course-detail.html">Administrative Writing I (Intermediate - Level B)</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                        <article class="event">
                            <aside>
                                <header>
                                    <a href="course-detail.htmlcourse-detail.html#">Administrative Writing II (Advanced - Level C)</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                        <article class="event">
                            <aside>
                                <header>
                                    <a href="course-detail.html#">Conversation I (Intermediate - Level B)</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                        <article class="event">
                            <aside>
                                <header>
                                    <a href="course-detail.html#">Conversation II (Advanced - Level C)</a>
                                </header>
                            </aside>
                        </article><!-- /article -->

                    </div><!-- /.section-content -->
                </section><!-- /.events-small -->
            </div><!-- /.col-md-4 -->

            <div class="col-md-4 col-sm-12">
                <section class="events small" id="events-small">
                    <header>
                        <h2>Method Used</h2>
                    </header>
                    <div class="section-content">
                        
                        <article class="event">
                            <aside>
                                <header>
                                    <a>Communicative Teaching Approach</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                    
                        <article class="event">
                            <aside>
                                <header>
                                    <a>Learning Style Inventory Test</a>
                                </header>
                            </aside>
                        </article><!-- /article -->

                        <article class="event">
                            <aside>
                                <header>
                                    <a>Initial Language Evaluation & Selection of Appropriate Training Material</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                        <article class="event">
                            <aside>
                                <header>
                                    <a>Mid and End-of-Session Progress Reports</a>
                                </header>
                            </aside>
                        </article><!-- /article -->
                        <article class="event">
                            <aside>
                                <header>
                                    <a>Mid and End-of-Session Evaluation of Trainer and Training Methods.</a>
                                </header>
                            </aside>
                        </article><!-- /article -->

                    </div><!-- /.section-content -->
                </section><!-- /.events-small -->
            </div><!-- /.col-md-4 -->

            <div class="col-md-4 col-sm-12">
                <section id="about">
                    <header>
                        <h2>About Stewart Agency</h2>
                    </header>
                    <div class="section-content justify ">
                        <img src="assets/img/students.jpg" alt="" class="add-margin">
                        <p><strong>Welcome to The Stewart Agency</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet semper tincidunt.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet semper tincidunt.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>

                        <a href="about-us.html" class="read-more stick-to-bottom">Read More</a>
                    </div><!-- /.section-content -->
                </section><!-- /.about -->
            </div><!-- /.col-md-4 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</div>
<!-- end News, Events, About -->

<!-- Testimonial -->
<section id="testimonials">
    <div class="block">
        <div class="container">
            <div class="author-carousel">
                
                <div class="author">
                    <blockquote>
                        <figure class="author-picture"><img src="assets/img/student-testimonial1.jpg" alt=""></figure>
                        <article class="paragraph-wrapper">
                            <div class="inner">
                                <header class="justify">"Ernest Mulvey of the Stewart Agency came to teach for us at a time when we were having real problems meeting our ESL students' diverse needs. Five months later, some of the students were telling me that he is the best English teacher the Council has ever had."</header>
                                <footer>Balou Antia, Learning Advisor, NSERC/SSHRC </footer>
                            </div>
                        </article>
                    </blockquote>
                </div><!-- /.author -->

                <div class="author">
                    <blockquote>
                        <figure class="author-picture"><img src="assets/img/student-testimonial2.jpg" alt=""></figure>
                        <article class="paragraph-wrapper">
                            <div class="inner">
                                <header class="justify">"Maureen and Shelley were extraordinary teachers and I could not do it without them. They were patient, qualified and really nice to be with. I really enjoyed my month of immersion and I will certainly continue to recommend your school to potential CIDA clients.</header>
                                <footer>Suzanne Riverin, CIDA  </footer>
                            </div>
                        </article>
                    </blockquote>
                </div><!-- /.author -->

                <div class="author">
                    <blockquote>
                        <figure class="author-picture"><img src="assets/img/student-testimonial.jpg" alt=""></figure>
                        <article class="paragraph-wrapper">
                            <div class="inner">
                                <header class="justify">"I enrolled in classes offered by the Stewart Agency in order to practice and improve my spoken French. I began by taking a group class with fellow colleagues, and found our teacher to be organized, knowledgeable, and creative. She made class interesting and effective, even at nine o'clock in the morning. I decided to take private lessons with the same teacher, and as a result, I feel much more confident and fluent in French."</header>
                                <footer>Carmela Prinzo, CIDA/ACDI </footer>
                            </div>
                        </article>
                    </blockquote>
                </div><!-- /.author -->
            
            </div><!-- /.author-carousel -->
        </div><!-- /.container -->
    </div><!-- /.block -->
</section>
<!-- end Testimonial -->

<!-- Our Professors, Gallery -->
<div class="block">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4">
                <section id="our-professors">
                    <header>
                        <h2>Our Team</h2>
                    </header>
                    <div class="section-content">
                        <div class="professors justify">
                            <p>The minimum educational requirements for the Stewart Agency's staff of five are a BA, TESOL certificate (preference given to Masters), and/or 5 years of experience in their field of specialty (language trainer / translator).</p>
                            <p>Our Team combines <strong>a unique combination of creativity, experience, knowledge</strong> but most of all <strong>a shared 'can do' attitude</strong> to help clients get the very best support, advice and project management to achieve business goals.</p>

                            

                            <a href="more-about-us.html" class="read-more stick-to-bottom">Read More</a>
                        </div><!-- /.professors -->
                    </div><!-- /.section-content -->
                </section><!-- /.our-professors -->
            </div><!-- /.col-md-4 -->

            <div class="col-md-8 col-sm-8">
                <section id="gallery">
                    <header>
                        <h2>Gallery</h2>
                    </header>
                    <div class="section-content">
                        <ul class="gallery-list gallery-list-small">
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-01.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-02.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-03.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-04.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-05.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-06.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-07.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-08.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-09.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-10.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-11.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-12.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-13.jpg" alt=""></a></li>
                            <li><a href="assets/img/gallery-big-image.jpg" class="image-popup"><img src="assets/img/image-14.jpg" alt=""></a></li>
                        </ul>
                        <a href="gallery.html" class="read-more">Go to Gallery</a>
                    </div><!-- /.section-content -->
                </section><!-- /.gallery -->
            </div><!-- /.col-md-4 -->

        </div><!-- /.row -->
    </div><!-- /.container -->
</div>
<!-- end Our Professors, Gallery -->
</div>
<!-- end Page Content -->

<?php
include("footer.php");
?>