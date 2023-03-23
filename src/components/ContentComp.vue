<template>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img">
        <img src="../assets/images/breadcrumbs/1.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">{{ tipo.toUpperCase() }} <br> VIGENTES EN LA CARRERA</h1>
        <ul>
          <li>
            <router-link :to="{ name : 'home' }" class="active">Home ></router-link>
          </li>
          <li class="active">{{ tipo }}</li>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 pb-120 md-pt-80 md-pb-80 pl-40 pr-40">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-deatails">
              <div class="sc-gallery-section pt-30 pb-30 md-pt-80 md-pb-80">
                <div class="container">
                  <div class="row masonry-grid">
                    <div class="col-lg-4 col-md-6 loadgallery addgallery">
                      <div class="gallery-item mb-30">
                        <img src="../assets/images/gallery/1.jpg" alt="Gallery Image" />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/1.jpg"
                          title="Overall Rolling trophy"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                      <div class="gallery-item mb-30">
                        <img src="../assets/images/gallery/2.jpg" alt="Gallery Image" />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/2.jpg"
                          title="Overall Rolling trophy"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/m1.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/m1.jpg"
                          title="Overall Rolling trophy"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 loadgallery addgallery">
                      <div class="gallery-item mb-30">
                        <img src="../assets/images/gallery/3.jpg" alt="Gallery Image" />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/3.jpg"
                          title="Annual Sports Meet 2021"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/m2.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/m2.jpg"
                          title="Annual Sports Meet 2021"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                      <div class="gallery-item mb-30">
                        <img src="../assets/images/gallery/4.jpg" alt="Gallery Image" />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/4.jpg"
                          title="Annual Sports Meet 2021"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 loadgallery addgallery">
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/m3.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/m3.jpg"
                          title="Inter House Islamic Quiz"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/5.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/5.jpg"
                          title="Inter House Islamic Quiz"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/6.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/6.jpg"
                          title="Inter House Islamic Quiz"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 loadgallery addgallery hidecourse">
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/7.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/7.jpg"
                          title="Inter House Islamic Quiz"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 loadgallery addgallery hidecourse">
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/8.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/8.jpg"
                          title="Inter House Islamic Quiz"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 loadgallery addgallery hidecourse">
                      <div class="gallery-item mb-30">
                        <img
                          src="../assets/images/gallery/9.jpg"
                          alt="Gallery Image"
                          width="415px"
                          height="500px"
                        />
                        <a
                          class="popup-galley"
                          href="assets/images/gallery/9.jpg"
                          title="Inter House Islamic Quiz"
                        >
                          <i class="flaticon flaticon-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="loadmore" class="text-center mt-30">
                    <a class="readon" href="#"
                      >Learn More <i class="flaticon flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 md-mt-60">
            <div class="widget-area">
              <div class="search-widget mb-50">
                <div class="search-wrap">
                  <input
                    type="search"
                    placeholder="Searching..."
                    name="s"
                    class="search-input"
                    value=""
                  />
                  <button type="submit" value="Search">
                    <i class="flaticon flaticon-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div class="widget-archives mb-50">
                <h3 class="widget-title">Categories</h3>
                <ul>
                  <li>
                    <a href="#">General Education <span>2</span></a>
                  </li>
                  <li>
                    <a href="#">Computer Science <span>4</span></a>
                  </li>
                  <li>
                    <a href="#">Civil Engineering <span>7</span></a>
                  </li>
                  <li>
                    <a href="#">Artificial Intelligence <span>5</span></a>
                  </li>
                  <li>
                    <a href="#">Business Studies <span>2</span></a>
                  </li>
                  <li>
                    <a href="#">Computer Engineering <span>4</span></a>
                  </li>
                </ul>
              </div>

              <div class="posts-tags mb-50 md-mb-0">
                <h3 class="widget-title">Tags</h3>
                <ul>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Civil Engineering</a></li>
                  <li><a href="#">Learning</a></li>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Instructor</a></li>
                  <li><a href="#">Training</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- Blog Single End -->
  </div>
  <!-- Main content End -->
</template>
<script>
export default {
  name: 'ContentComp',
  props: {
    tipo: {
      type: String,
      default: ''
    }
  }
}
</script>
