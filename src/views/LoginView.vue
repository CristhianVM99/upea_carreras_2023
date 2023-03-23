<template>
  <!-- Contact Section Start -->
  <div class="contact-page-section pt-120 pb-120 md-pt-80 md-pb-80">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7 md-mb-30">
          <div class="login-image">
            <img src="src/assets/images/about/login.png" alt="" />
          </div>
        </div>
        <div class="col-lg-5 pl-30 md-pl-15">
          <div class="login-form">
            <div class="inner-part">
              <h2 class="title mb-15">Login</h2>
              <p>Log in to continue in our website</p>
            </div>
            <div class="social-login d-flex align-items-center">
              <button class="google-plus"><i class="fa fa-google-plus"></i> Google</button>
              <button class="facebook"><i class="fa fa-facebook"></i> Facebook</button>
            </div>
            <div id="form-messages"></div>
            <form
              id="contact-form"
              method="post"
              action="http://softcoders.net/demo/html/edula/mailer.php"
            >
              <div class="form-box d-flex align-items-center">
                <i class="fa fa-user-o"></i>
                <input
                  class="from-control"
                  type="email"
                  id="email-address"
                  name="email-address"
                  placeholder="Enter your email or phone number"
                />
              </div>
              <div class="form-box d-flex align-items-center">
                <i class="fa fa-lock"></i>
                <input
                  class="from-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <i class="fa fa-eye-slash" aria-hidden="true"></i>
              </div>
              <div
                class="check-box-area mb-30 d-flex align-items-center justify-content-center justify-content-between"
              >
                <div class="form-check text-start">
                  <input class="form-check-input" type="checkbox" value="" id="password" />
                  <label class="form-check-label" for="flexCheckDefault">Remember password</label>
                </div>
                <div class="forget-password">Forget Password?</div>
              </div>
              <div class="form-group mb-0">
                <input class="btn-send" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Section End -->
</template>
<script>
export default {
    name : 'LoginView',
}
</script>