<template>
  <!-- Main content Start -->
  <div class="main-content content-login">    

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
                <h2 class="title mb-15">Let’s Registered</h2>
                <p>Welcome back, you’ve been missed!</p>
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
                    type="text"
                    id="usermame"
                    name="usermame"
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div class="form-box d-flex align-items-center">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <input
                    class="from-control"
                    type="email"
                    id="email-address"
                    name="email-address"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div class="form-box d-flex align-items-center">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <input
                    class="from-control"
                    type="text"
                    id="phonenumber"
                    name="phone-number"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
                <div class="form-box d-flex align-items-center">
                  <input
                    class="from-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required=""
                  />
                  <i class="fa fa-eye-slash" aria-hidden="true"></i>
                  <i class="fa fa-lock"></i>
                </div>
                <div class="form-group mb-0">
                  <input class="btn-send" type="submit" value="Registered" />
                </div>
                <div class="mt-10 already-account text-start">
                  Already have an account? <a href="login.html">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Section End -->
  </div>
  <!-- Main content End -->
</template>
<script>
export default {
  name: 'RegisterView'
}
</script>
<style scoped>
.content-login{
    
}
</style>
