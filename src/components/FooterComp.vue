<template>
    <!-- Footer Secton Start -->
    <footer id="sc-footer" class="sc-footer footer-style2 footer-bg-image arrow-animation-1 mt-20">
            <div class="container">
                <div class="footer-newsletter subscribe-bg-image">
                    <div class="row align-items-center">
                        <div class="col-lg-6 md-text-center">
                            <h3 class="title white-color mb-0">Subscribe Our Newsletter</h3>
                            <div class="des">Excepteur sint occaecat cupidatat non proident, sunt in </div>
                        </div>
                        <div class="col-lg-6 text-right md-text-center">
                            <form class="newsletter-form">
                                <input type="email" name="email" placeholder="E-mail Address" required="">
                                <button type="submit">Subscribe <i class="flaticon flaticon-right-arrow"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-62 pb-70 md-pb-5">
                    <div class="row">
                        <div class="col-lg-4 footer-widget">
                            <div class="about-widget pr-15">
                                <div class="logo-part mb-30">
                                    <a href="index.html"><img src="src/assets/images/white-logo.png" alt="Footer Logo"></a>
                                </div>
                                <p class="desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                <h4 class="social-title white-color">Follow Us</h4>
                                <ul class="footer-social">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 md-mb-32 footer-widget md-mt-45">
                            <h4 class="widget-title">Company</h4>
                            <ul class="widget-menu">
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Course</a></li>
                                <li><a href="#">Learning</a></li>
                                <li><a href="#">Testiminial</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 md-mb-32 footer-widget">
                            <h4 class="widget-title">Learn Course</h4>
                            <ul class="widget-menu">
                                <li><a href="#">General Education</a></li>
                                <li><a href="#">Computer Science</a></li>
                                <li><a href="#">Civil Engineering</a></li>
                                <li><a href="#">Artificial Intelligence</a></li>
                                <li><a href="#">Business Studies</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 md-mb-32 footer-widget">
                            <h4 class="widget-title">Contact Info</h4>
                            <ul class="address-widget pr-40">
                                <li>
                                    <i class="flaticon flaticon-call"></i>
                                    <a href="tel:+(111)256352">Call: +(111)256 352</a>
                                </li>
                                <li>
                                    <i class="flaticon flaticon-mail"></i>
                                    <a href="mailto:infosimple@gmail.com">infosimple@gmail.com</a>
                                </li>
                                <li>
                                    <i class="flaticon flaticon-maps-and-flags"></i>
                                    <div class="desc">
                                        202 Raffles Ave, Carlisle CA2 7EF, United Kingdon
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 sm-mb-10 text-md-start">
                            <div class="copyright">
                                <p>© Copyright 2021 Edula. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-md-6 text-end">
                            <ul class="copyright-menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="animated-arrow-1 animated-arrow left-right-new">
                <img src="src/assets/images/arrow-8.png" alt="">
            </div>
            <div class="animated-arrow-2 animated-arrow up-down-new">
                <img src="src/assets/images/arrow-9.png" alt="">
            </div>

            <div class="animated-arrow-3 animated-arrow up-down-new">
                <img src="src/assets/images/arrow-3.png" alt="">
            </div>
            <div class="animated-arrow-4 animated-arrow left-right-new">
                <img src="src/assets/images/arrow-7.png" alt="">
            </div>
        </footer>
        <!-- Footer Secton End -->



        <!-- start scrollUp  -->
        <div id="scrollUp">
            <i class="fa fa-angle-up"></i>
        </div>
        <!-- End scrollUp  -->

        <!-- Search Modal Start -->
        <div aria-hidden="true" id="search-modal" class="modal fade search-modal" role="dialog" tabindex="-1">

            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <i class="flaticon-close"></i>
            </button>


            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="search-block clearfix">
                        <form>
                            <div class="form-group">
                                <input class="form-control" placeholder="Search Here..." type="text">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search Modal End -->
</template>
<script>
export default {
    name : 'FooterComp',
}
</script>