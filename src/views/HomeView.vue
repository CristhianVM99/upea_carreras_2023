<template>
  <loading-page></loading-page>
  <!-- Main content Start -->
  <div class="main-content">
    <!--========================= PARA LA UNIVERSIDAD PUBLICA DE EL ALTO ================-->
    <div class="bg-principal-slide-content-main" v-if="this.carrera_id == 0">
      <!-- Banner Section Start -->
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 12000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: false
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper bg-principal-slide-content-upea"
        v-if="this.carrera_id == 0"
      >
        <swiper-slide class="bg-principal-slide">
          <div class="bg-principal-content-upea">
            <video autoplay muted loop id="bg-video" class="bg-principal-video-upea">
              <source src="../assets/video/upea.mp4" type="video/mp4" />
            </video>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-principal-slide">
          <img src="../assets/images/upeabg3.jpg" alt="" class="bg-principal-img-upea" />
        </swiper-slide>
        <swiper-slide class="bg-principal-slide">
          <div class="bg-principal-content-upea">
            <video autoplay muted loop id="bg-video" class="bg-principal-video-upea">
              <source src="../assets/video/videoplayback.mp4" type="video/mp4" />
            </video>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-principal-slide">
          <img src="../assets/images/upeabg3.jpg" alt="" class="bg-principal-img-upea" />
        </swiper-slide>
      </swiper>

      <!-- Banner Section End -->
      <div
        id="sc-banner"
        class="sc-banner banner-style3 upposition-relative bg-principal-view-upea"
        v-if="this.carrera_id == 0"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <!--<img src="src/assets/images/upeabg2.jpg" alt="" class="content-principal-img">-->
              <div class="content-principal-img"></div>
              <div class="banner-content content-principal-text">
                <div
                  class="sub-title wow position-relative mb-8 fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  {{ Institucion.institucion_iniciales }}
                  <span class="heading-border-line"></span>
                </div>

                <h1
                  class="banner-title mb-15 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2500ms"
                >
                  {{ Institucion.institucion_nombre }}
                </h1>
                <h5
                  class="banner-des mb-35 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="3000ms"
                  v-if="Institucion.institucion_objetivos != null"
                  v-html="Institucion.institucion_objetivos"
                ></h5>
                <!--<form class="newsletter-form mt-40">
                <input type="text" name="email" placeholder="search course..." />
                <button type="submit"><i class="flaticon flaticon-magnifying-glass"></i></button>
              </form>-->
              </div>
            </div>
            <div class="col-lg-6 hidden-md">
              <div class="banner-img upea-rector hidden-sm">
                <img
                  class="wow fadeInRight"
                  src="src/assets/images/rectorvicerector.png"
                  alt="Banner Image"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                />
              </div>
              <!--<div
              class="view-students-img wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2000ms"
            >
              <img src="src/assets/images/banner/view-students.png" alt="Banner Image" />
            </div>
            -->
              <div class="animate-circle"></div>
            </div>
          </div>
        </div>
        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="../assets/images/banner/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="../assets/images/banner/arrow-4.png" alt="" />
        </div>
        <div class="animated-arrow-5 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-5.png" alt="" />
        </div>
        <div class="animated-arrow-7 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-6.png" alt="" />
        </div>
        <div class="animated-arrow-8 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-7.png" alt="" />
        </div>
        <div class="animated-arrow-9 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-8.png" alt="" />
        </div>
        <div class="animated-arrow-10 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-9.png" alt="" />
        </div>
        <div class="animated-arrow-11 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-9.png" alt="" />
        </div>
      </div>
    </div>

    <div class="bg-principal-slide-content-second">
      <!-- ======================== PARA LAS CARRERAS =================-->
      <!-- Banner Section Start -->
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: false
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper bg-principal-slide-content"
        v-if="this.carrera_id != 0"
      >
        <swiper-slide
          v-for="(portada, id_img) in Institucion.portada"
          :key="id_img"
          class="bg-principal-slide"
        >
          <div class="bg-principal-content">
            <img
              class="bg-img bg-principal-img"
              :src="this.url_api + '/InstitucionUpea/Portada/' + portada.portada_imagen"
              alt="{{ id_img }}"
            />
            <!--<img class="bg-principal-img" src="https://www.upea.bo/assets/upea/fondos/BackGround-UPEA-08.jpg" alt="" />-->
          </div>
        </swiper-slide>
      </swiper>

      <!-- Banner Section End -->
      <div
        id="sc-banner"
        class="sc-banner banner-style3 upposition-relative bg-principal-view"
        v-if="this.carrera_id != 0"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 box-p">
              <span></span>
              <div class="banner-content content-p">
                <div
                  class="sub-title wow position-relative mb-8 fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  {{ Institucion.institucion_iniciales }}
                  <span class="heading-border-line"></span>
                </div>

                <h1
                  class="banner-title mb-15 wow fadeInUp inst-nombre"
                  data-wow-delay="300ms"
                  data-wow-duration="2500ms"
                >
                  {{ Institucion.institucion_nombre }}
                </h1>
                <h5
                  class="banner-des mb-35 wow fadeInUp inst-objetivos"
                  data-wow-delay="300ms"
                  data-wow-duration="3000ms"
                  v-if="Institucion.institucion_objetivos != null"
                  v-html="Institucion.institucion_objetivos"
                ></h5>
                <!--<form class="newsletter-form mt-40">
                <input type="text" name="email" placeholder="search course..." />
                <button type="submit"><i class="flaticon flaticon-magnifying-glass"></i></button>
              </form>-->
              </div>
            </div>
            <div class="col-lg-6 hidden-md">
              <div class="banner-img hidden-sm">
                <img
                  class="wow fadeInRight"
                  src="src/assets/images/banner/banner-image3.png"
                  alt="Banner Image"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                />
              </div>
              <!--<div
              class="view-students-img wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2000ms"
            >
              <img src="src/assets/images/banner/view-students.png" alt="Banner Image" />
            </div>
            -->
              <div class="animate-circle"></div>
            </div>
          </div>
        </div>
        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="../assets/images/banner/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="../assets/images/banner/arrow-4.png" alt="" />
        </div>
        <div class="animated-arrow-5 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-5.png" alt="" />
        </div>
        <div class="animated-arrow-7 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-6.png" alt="" />
        </div>
        <div class="animated-arrow-8 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-7.png" alt="" />
        </div>
        <div class="animated-arrow-9 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-8.png" alt="" />
        </div>
        <div class="animated-arrow-10 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-9.png" alt="" />
        </div>
        <div class="animated-arrow-11 animated-arrow up-down-new">
          <img src="../assets/images/banner/arrow-9.png" alt="" />
        </div>
      </div>
    </div>

    <!-- ===================== CARRERAS ==============-->
    <swiper
      :slidesPerView="5"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      class="mySwiper swiper-carreras"
      v-if="this.carrera_id == 0"
    >
      <swiper-slide v-for="(carrera, id_carrera) in Carreras" :key="id_carrera">
        <span>{{ carrera.carrera }}</span>     
      </swiper-slide>
    </swiper>
    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 pb-120 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="blog-deatails">
              <div class="post-img">
                <iframe
                  :src="Institucion.institucion_link_video_vision"
                  frameborder="0"
                  style="width: 100%; min-height: 400px"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
              <div class="blog-full">
                <div class="blog-desc">
                  <h4 class="title_home">{{ Institucion.institucion_nombre }}</h4>
                  <p v-html="Institucion.institucion_sobre_ins"></p>
                </div>
                <blockquote>
                  <p>
                    La Universidad Pública de El Alto no solo forma profesionales altamente
                    capacitados en diversas áreas del conocimiento, sino que también es un espacio
                    de encuentro y diálogo intercultural, donde se fomenta el respeto y la
                    valoración de la diversidad de saberes y culturas
                  </p>
                </blockquote>
                <!--<div class="blog-desc mb-40">
                  <p>
                    Evolved from sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>-->
                <!--<div class="tags-area">
                  <span class="tags">Tags</span>
                  <ul class="tags-list">
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Computer</a></li>
                  </ul>
                </div>-->
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-12 md-mt-60">
            <div class="widget-area">
              <div class="widget-archives mb-50" v-if="this.carrera_id != 0">
                <h3 class="widget-title">Links Externos</h3>
                <ul>
                  <li v-for="(link, id_link) of Links" :key="id_link" class="links_externos">
                    <img
                      :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen"
                      alt=""
                      class="links_externos_img"
                    />
                    <a :href="link.ei_link" target="_blank" class="links_externos_link">{{
                      link.ei_nombre
                    }}</a>
                  </li>
                </ul>
              </div>

              <div class="recent-posts-widget mb-50">
                <h3 class="widget-title">Misión</h3>
                <div class="show-featured">
                  <div class="post-desc">
                    <p v-html="Institucion.institucion_mision"></p>
                  </div>
                </div>
              </div>

              <div class="recent-posts-widget mb-50">
                <h3 class="widget-title">Visión</h3>
                <div class="show-featured">
                  <div class="post-desc">
                    <p v-html="Institucion.institucion_vision"></p>
                  </div>
                </div>
              </div>

              <!--<div class="posts-tags mb-50 md-mb-0">
                <h3 class="widget-title">Tags</h3>
                <ul>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Civil Engineering</a></li>
                  <li><a href="#">Learning</a></li>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Instructor</a></li>
                  <li><a href="#">Training</a></li>
                </ul>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog Single End -->

    <!-- CTA Section Start -->
    <div
      class="sc-cta-section cta-bg-image3 cta md-pt-75 md-pb-80 position-relative arrow-animation-1"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div class="sec-title">
              <div class="sub-title position-relative cta-span">
                Frases <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color cta-text">
                "En la Universidad Pública de El Alto formamos profesionales con un compromiso ético
                y social para transformar nuestra sociedad."
              </h2>
            </div>
          </div>
          <div class="col-lg-6 hidden-md">
            <div class="img-part cta-img">
              <img src="../../public/bgPerson.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="../assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="../assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="../assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="../assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-6 animated-arrow left-right-new">
        <img src="../assets/images/arrow-7.png" alt="" />
      </div>
    </div>
    <!-- CTA Section End -->

    <!-- Counter Section Start -->
    <div
      class="sc-counter categoria-content pt-120 pb-120 md-pt-80 md-pb-50 sc-counter-bg position-relative arrow-animation-1"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              v-for="(conv, id_conv) of this.MenuConvocatorias"
              :key="id_conv"
              :to="{
                name: 'convocatorias',
                params: {
                  tipo: conv.tipo_conv_comun_titulo.toLowerCase()
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-study"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ contarConv(conv.tipo_conv_comun_titulo) }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">{{ conv.tipo_conv_comun_titulo }}</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              v-for="(cur, id_cur) of MenuCursos"
              :key="id_cur"
              :to="{
                name: 'cursos',
                params: {
                  tipo: cur.tipo_conv_curso_nombre.toLowerCase()
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-teacher"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ contarCur(cur.tipo_conv_curso_nombre) }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">{{ cur.tipo_conv_curso_nombre }}</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'eventos',
                params: {
                  tipo: 'eventos'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-apartment"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Eventos.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">EVENTOS</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              :to="{
                name: 'servicios',
                params: {
                  tipo: 'servicios'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-computer"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Servicios.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">SERVICIOS</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'ofertasacademicas',
                params: {
                  tipo: 'ofertasacademicas'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-book"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Gacetas.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">GACETA</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'videos',
                params: {
                  tipo: 'videos'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-play"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Videos.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">VIDEOS</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              :to="{
                name: 'ofertasacademicas',
                params: {
                  tipo: 'ofertasacademicas'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-shopping-bag"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Ofertas.length }}</span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">OFERTAS ACADEMICAS</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'publicaciones',
                params: {
                  tipo: 'publicaciones'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-monitor"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Publicaciones.length }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">PUBLICACIONES</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="../assets/images/arrow-5.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="../assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="../assets/images/arrow-4.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="../assets/images/arrow-3.png" alt="" />
      </div>
    </div>
    <!-- Counter Section End -->

    <!-- Team Section Start -->
    <div
      class="sc-team team-style-1 gray-bg arrow-animation-1 position-relative pt-110 pb-90 md-pt-70 md-pb-50"
    >
      <div class="pt-60">
        <div class="sec-title mb-30 text-center md-mb-10">
          <div class="sub-title primary">Autoridades<span class="heading-border-line"></span></div>
          <h2 class="title mb-0">Nuestras Autoridades</h2>
        </div>
        <swiper :slides-per-view="3" :space-between="50" class="autoridades-content">
          <swiper-slide v-for="(autoridad, id_aut) of Institucion.autoridad" :key="id_aut">
            <div class="team-inner-item autoridades-target">
              <div class="team-wrap">
                <div class="team-img">
                  <img
                    :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad"
                    alt="img"
                    class="img_swiper"
                  />
                  <ul class="team-social wrapper">
                    <li class="icon facebook">
                      <a :href="autoridad.facebook_autoridad" target="_blank" class="social-icon">
                        <span class="tooltip">Facebook</span>
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="icon whatsapp">
                      <a
                        :href="'https://wa.me/+' + autoridad.celular_autoridad"
                        target="_blank"
                        class="social-icon"
                      >
                        <span class="tooltip">WhatsApp</span>
                        <i class="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li class="icon twitter">
                      <a :href="autoridad.twiter_autoridad" target="_blank" class="social-icon">
                        <span class="tooltip">Twitter</span>
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="team-item-text">
                  <div class="team-details">
                    <h3 class="team-name">
                      <h4>{{ autoridad.nombre_autoridad }}</h4>
                    </h3>
                    <span class="team-title">{{ autoridad.cargo_autoridad }}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="../assets/images/arrow-5.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="../assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="../assets/images/arrow-4.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="../assets/images/arrow-3.png" alt="" />
      </div>
    </div>
    <!-- Team Section End -->

    <!-- About Instructor Section Start -->
    <div
      id="sc-about-instructor"
      class="sc-about-instructor pt-80 pb-90 md-pt-50 md-pb-70 organigrama"
      v-if="carrera_id != 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 md-mb-45">
            <div class="img-part position-relative organigrama-pdf">
              <!--<img class="" src="../assets/images/about/instructor.png" alt="About Image" />-->
              <a
                :href="url_api + '/InstitucionUpea/' + Institucion.institucion_organigrama"
                target="_blank"
              >
                <vue-pdf-embed
                  :source="url_api + '/InstitucionUpea/' + Institucion.institucion_organigrama"
                  :page="1"
                  height="410"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-7 pl-85 md-pl-15">
            <div class="sec-title mb-20">
              <div class="sub-title position-relative">
                institucion <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20 organigrama-text">Organigrama</h2>
              <h3 class="des mb-40 organigrama-text">
                Organización y estructura administrativa de la carrera.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Instructor Section End -->

    <!-- Blog Section Start -->
    <div id="sc-blog" class="sc-blog main-home pb-200 pt-110 md-pt-70 md-pb-160">
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary txt-reciente">lo más reciente</div>
          <h2 class="title mb-0">Convocatorias, Comunicados y Avisos Recientes</h2>
        </div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          v-if="
            Object.keys(latestConvocatoria).length +
              Object.keys(latestComunicado).length +
              Object.keys(latestAviso).length >
            0
          "
        >
          <!-- CONVOCATORIAS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestConvocatoria).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Convocatorias/' + latestConvocatoria.con_foto_portada"
                  alt="img"
                />
                <span>{{
                  latestConvocatoria.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase()
                }}</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestConvocatoria.con_titulo.toUpperCase() }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i
                    >{{ dmy(latestConvocatoria.con_fecha_inicio) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestConvocatoria.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                          idconv: latestConvocatoria.idconvocatorias
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- COMUNICADOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestComunicado).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Convocatorias/' + latestComunicado.con_foto_portada"
                  alt="img"
                />
                <span>Comunicados</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestComunicado.con_titulo.toUpperCase() }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i
                    >{{ dmy(latestComunicado.con_fecha_inicio) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestComunicado.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                          idconv: latestComunicado.idconvocatorias
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!--  AVISOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestAviso).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Convocatorias/' + latestAviso.con_foto_portada"
                  alt="img"
                />
                <span>Avisos</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestAviso.con_titulo.toUpperCase() }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(latestAviso.con_fecha_inicio) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestAviso.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                          idconv: latestAviso.idconvocatorias
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Blog Section End -->

    <!-- CTA Section Start -->
    <div
      class="sc-cta-section cta-bg-image5 cta pt-40 pb-30 right-bg-image2 md-pt-75 md-pb-80 position-relative arrow-animation-1"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div class="sec-title">
              <div class="sub-title position-relative cta-span">
                Frases<span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color cta-text">
                "La educación es el camino para construir una sociedad más equitativa y la
                Universidad Pública de El Alto es la institución que lidera este proceso en Bolivia"
                <span>Upea</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="../assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="../assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="../assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="../assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-6 animated-arrow left-right-new">
        <img src="../assets/images/arrow-7.png" alt="" />
      </div>
    </div>
    <!-- CTA Section End -->

    <!-- Blog Section Start -->
    <div id="sc-blog" class="sc-blog main-home pb-200 pt-120 md-pt-70 md-pb-160">
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary txt-reciente">lo más reciente</div>
          <h2 class="title mb-0">Cursos y Seminarios</h2>
        </div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          v-if="Object.keys(latestCurso).length + Object.keys(latestSeminario).length > 0"
        >
          <!-- CURSOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestCurso).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Cursos/' + latestCurso.det_img_portada"
                  alt="img"
                />
                <span>Cursos</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestCurso.det_titulo }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(latestCurso.det_fecha_ini) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      class="btn-conv"
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestCurso.tipo_curso_otro.tipo_conv_curso_nombre.toLowerCase(),
                          idconv: latestCurso.iddetalle_cursos_academicos
                        }
                      }"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- SEMINARIOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestSeminario).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Cursos/' + latestSeminario.det_img_portada"
                  alt="img"
                />
                <span>Seminarios</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestSeminario.det_titulo }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(latestSeminario.det_fecha_ini) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestSeminario.tipo_curso_otro.tipo_conv_curso_nombre.toLowerCase(),
                          idconv: latestSeminario.iddetalle_cursos_academicos
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Blog Section End -->
  </div>
  <!-- Map Start -->

  <div class="map-card">
    <div class="map-tools">
      <div class="map-circle">
        <span class="map-red map-box"></span>
      </div>
      <div class="map-circle">
        <span class="map-yellow map-box"></span>
      </div>
      <div class="map-circle">
        <span class="map-green map-box"></span>
      </div>
    </div>
    <div class="map-card__content">
      <div class="">
        <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
        <iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>
      </div>
    </div>
  </div>
  <!-- Map End -->
  <!-- Main content End -->
</template>
<script>
import { mapState } from 'vuex'
import Services from '@/services/Services'
import { Swiper, SwiperSlide } from 'swiper/vue'
import VuePdfEmbed from 'vue-pdf-embed'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper'
import LoadingPage from '../components/LoadingComp.vue'
import { onMounted } from 'vue'

export default {
  name: 'HomeView',
  data() {
    return {
      Carreras: [],
      Convocatorias: 0,
      latestConvocatoria: {},
      latestComunicado: {},
      latestAviso: {},

      Cursos: 0,
      latestCurso: {},
      latestSeminario: {},

      Servicios: [],
      Ofertas: [],
      Publicaciones: [],
      Gacetas: [],
      Eventos: [],
      Videos: [],
      ObjetivosCarrera: [],

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0
    }
  },
  computed: {
    ...mapState([
      'url_api',
      'Institucion',
      'MenuConvocatorias',
      'MenuCursos',
      'Links',
      'carrera_id'
    ])
  },
  components: {
    Swiper,
    SwiperSlide,
    VuePdfEmbed,
    LoadingPage
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, FreeMode, Pagination, Navigation]
    }
  },
  methods: {
    async getCarreras() {
      try {
        const response = await Services.getCarreras()
        this.Carreras = response.data
      } catch (e) {
        console.log(e)
      }
    },

    async getConvocatoriasAll() {
      try {
        //optenemos todas la convocatoarias de la api
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = response.data

        //obtenemos los ultimos comunicados de convocatorias, comunicados y avisos
        if (response != null) {
          this.Convocatorias.forEach((conv) => {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'CONVOCATORIAS' &&
              conv.con_estado == '1'
            ) {
              this.latestConvocatoria = conv
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'COMUNICADOS' &&
                conv.con_estado == '1'
              ) {
                this.latestComunicado = conv
              } else {
                if (
                  conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'AVISOS' &&
                  conv.con_estado == '1'
                ) {
                  this.latestAviso = conv
                }
              }
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    },

    async getCursosAll() {
      try {
        //optenemos todos los registros de cursos de la api
        const response = await Services.getCursosAll()
        this.Cursos = response.data

        //obtenemos los ultimos cursos y seminarios
        this.Cursos.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == 'CURSOS' && cur.det_estado == '1') {
            this.latestCurso = cur
          } else {
            if (
              cur.tipo_curso_otro.tipo_conv_curso_nombre == 'SEMINARIOS' &&
              cur.det_estado == '1'
            ) {
              this.latestSeminario = cur
            }
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    //optencion de todos los servicios, ofertas, publicaciones, gacetas, eventos y videos.
    async getServiciosAll() {
      try {
        const response = await Services.getServiciosAll()
        this.Servicios = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getOfertasAll() {
      try {
        const response = await Services.getOfertasAll()
        this.Ofertas = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getPublicaciones() {
      try {
        const response = await Services.getPublicaciones()
        this.Publicaciones = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getGacetaAll() {
      try {
        const response = await Services.getGacetaAll()
        this.Gacetas = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getEventos() {
      try {
        const response = await Services.getEventos()
        this.Eventos = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getVideos() {
      try {
        const response = await Services.getVideos()
        this.Videos = response.data
      } catch (e) {
        console.log(e)
      }
    },

    async setImage(id, img) {
      try {
        await document
          .querySelector('.' + id)
          .setAttribute('style', 'background-image: url("' + img + '");')
      } catch (e) {
        console.log(e)
      }
    },
    contarConv(tipo) {
      if (tipo && this.Convocatorias) {
        let count = 0
        this.Convocatorias.forEach((conv) => {
          if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
            count++
          }
        })
        return count
      }
    },
    contarCur(tipo) {
      if (tipo && this.Cursos) {
        let count = 0
        this.Cursos.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
            count++
          }
        })
        return count
      }
    },
    dmy(fecha) {
      if (fecha != undefined) {
        const meses = [
          'enero',
          'febrero',
          'marzo',
          'abril',
          'mayo',
          'junio',
          'julio',
          'agosto',
          'septiembre',
          'octubre',
          'noviembre',
          'diciembre'
        ]
        let fechaCadena = fecha.substr(0, 10)
        let fechaArray = fechaCadena.split('-')
        return fechaArray[2] + ' de ' + meses[fechaArray[1] - 1] + ' de ' + fechaArray[0]
      }
    },
    isLoad() {
      var load = document.getElementById('loading')
      load.style.display = 'none'
    },
    async createdComponent() {
      await this.getCarreras()
      if (this.carrera_id != 0) {
        await this.getConvocatoriasAll()
        await this.getCursosAll()
        await this.getServiciosAll()
        await this.getOfertasAll()
        await this.getPublicaciones()
        await this.getGacetaAll()
        await this.getEventos()
        await this.getVideos()
      }
      this.isLoad()
    }
  },
  created() {
    this.createdComponent()
  },
  updated() {
    if (this.isLoad == 8) {
    }
  }
}
</script>
<style scoped>
.title_home {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(to left, var(--main-color), var(--main-color-2));
  padding: 10px;
  color: #fff;
  letter-spacing: 2px;
}

.inst-objetivos {
}

.inst-nombre {
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.8);
}

.inst-nombre::first-letter {
  color: var(--main-color-2);
}
/* ============================== diseño de los links externos  ====================== */
.links_externos {
  /*display: flex;
  justify-content: flex-start;
  align-items: center;
  background-repeat: no-repeat !important;
  background-position: right !important;
  background-size: contain !important;
  padding: 20px !important;*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 5px !important;
}
.links_externos_img {
  height: 100px !important;
  object-fit: contain;
}
.links_externos_link {
  width: 10em;
  height: 2.3em;
  margin: 0.5em;
  background: var(--main-color);
  color: #fff !important;
  border: none;
  border-radius: 0.625em;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-align: center;
  padding: 7px 20px;
}

.links_externos_link:hover {
  color: var(--main-color-2) !important;
}

.links_externos_link:after {
  content: '';
  background: white;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}

.links_externos_link:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

/*=============================== FRASES INTERMEDIAS  ===================== */
.cta {
  position: relative;
  background-attachment: fixed;
}

.cta-img {
  padding-top: 20px;
  width: 250px;
  margin-left: 40%;
  position: relative;
  z-index: 3;
  display: grid;
  place-items: center;
}

.cta-img::before {
  content: '';
  position: absolute;
  width: 350px;
  height: 350px;
  background: linear-gradient(to top, var(--main-color-2), var(--main-color));
  border-radius: 50%;
  z-index: -1;
}

.cta-text {
  background: var(--main-color-2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  opacity: 0.95;
  position: relative;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  text-align: center;
  position: relative;
}
.cta-text span {
  width: 3em;
  height: 1.5em;
  position: absolute;
  background: var(--main-color);
  bottom: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 10px;
}
.cta-span {
  font-size: 1.5em;
  margin-bottom: 15px;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding-left: 20px;
}

.img_swiper {
  height: 400px;
  object-fit: cover;
}

.btn_link {
  color: #fff !important;
  padding: 5px 10px !important;
}

.btn_tipo {
  background: #f24d5d;
  color: #fff;
  padding: 5px 10px !important;
  border-radius: 5px;
}

.bg_box {
  background: rgb(4, 59, 80 / 10%);
  /*box-shadow: 0px 0px 16px ;
  box-shadow: 0px 0px 16px red;*/
  padding: 15px;
  height: 700px;
}
.bg-map {
  text-align: center;
  width: 100%;
}
/*=================== SLIDE PRINCIPAL BACKGROUND ============== */
.bg-principal-slide-content {
  position: absolute;
  width: 100%;
  height: 100vh;
}

.swiper .swiper-button-prev,
.swiper .swiper-button-next {
  z-index: 1000;
  border: 1px solid red !important;
  color: red !important;
}
.bg-principal-slide {
}
.bg-principal-content {
}
.bg-principal-img {
  width: 100%;
  height: 100vh;
}
.bg-principal-view {
}
/*==================== SLIDE PRINCIPAL UPEA ================= */
.bg-principal-slide-content-main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.bg-principal-slide-content-upea {
  display: block;
  position: relative;
  z-index: 1;
}

.bg-principal-video-upea {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-principal-img-upea {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.bg-principal-view-upea {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
.upea-rector {
}
.upea-rector:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 550px;
  height: 550px;
  background: linear-gradient(to left, var(--main-color), var(--main-color-2));
  border-radius: 50%;
  z-index: -1;
}
.content-principal-img {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 93%;
  object-fit: cover;
  object-position: right;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  clip-path: polygon(0 0, 20% 0, 40% 100%, 0% 100%);
}
.content-principal-text {
  background: rgba(0, 0, 0, 0.8);
}

/*===================== SWIPER CARRERAS =================== */

.swiper-carreras {
  border: 1px solid red;
  height: 200px;
}

/*==================== PDF INSTITUCION ========== */
.organigrama-pdf {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
}

.organigrama-pdf::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transform: rotate(-5deg);
  background: var(--main-color);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.organigrama-text {
  color: #fff !important;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}

.organigrama {
  background: url(../../public/bgUpea.jpg);
  background-size: cover;
  background-repeat: none;
}

/*================ autoridades target ============== */

.autoridades-content {
  padding: 50px 50px;
}
.team-inner-item.autoridades-target {
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
}
.team-inner-item.autoridades-target .team-wrap {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
}
.team-inner-item {
}

/*================== icon part =============== */
.cat {
  transition: 0.5s;
  margin: 20px 0px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.cat:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.icon-part {
  border-radius: 50;
  background: var(--main-color) !important;
}

.icon-part i {
  color: #fff;
}
.categoria-content {
  background: #fff;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/*==================== icon social ================== */
.wrapper {
  display: inline-flex;
  list-style: none;
  height: 120px;
  width: 100%;
  padding-top: 40px;
  font-family: 'Poppins', sans-serif;
  justify-content: center;
}

.wrapper .icon {
  position: relative;
  background: #fff;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .icon a i {
  background: transparent !important;
  font-size: 1.3em;
  color: #000 !important;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.wrapper .icon a {
  background: transparent !important;
}
.wrapper .icon:hover a i {
  color: #fff !important;
}
.wrapper .icon::before {
  content: '' !important;
}
.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #fff;
  color: #fff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: '';
  height: 8px;
  width: 8px;
  background: #fff;
  bottom: -3px;
  left: 20%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877f2;
  color: #fff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background: #1da1f2;
  color: #fff;
}

.wrapper .whatsapp:hover,
.wrapper .whatsapp:hover .tooltip,
.wrapper .whatsapp:hover .tooltip::before {
  background: #25d366;
  color: #fff;
}

/*================== card de comunicados cursos etc. ==============*/
.txt-reciente {
  color: var(--main-color);
  font-size: 1.5em;
  text-transform: uppercase;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
}
.txt-reciente::after {
  content: '...';
}

.txt-reciente::first-letter {
  font-size: 1.7em;
}

.card-content {
  padding: 20px;
}
.card {
  width: 100%;
  height: 50vh;
  position: relative;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  overflow: hidden;
}

/*Image*/
.card-image {
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #0a3394;
  background: linear-gradient(to top, #0a3394, #4286f4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-image img {
  object-fit: cover;
}
.card-image span {
  position: absolute;
  background: var(--main-color);
  top: 2%;
  right: 2%;
  padding: 5px 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px var(--main-color-2);
  color: #fff;
}
/*Description */
.card-description {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 0.5em;
  flex-direction: column;
  background-color: #f5f5f5;
  color: #212121;
  height: 70%;
  bottom: -100%;
  border-radius: 16px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
}
/*Text*/
.card-description .title {
  font-size: 1em !important;
  font-weight: 700;
  text-align: center;
}

/* Hover states */
.card:hover .card-description {
  transform: translateY(-49vh);
}
/* =========================== Boton Convocatorias ================= */
.btn-conv {
  --color: var(--main-color);
  font-family: inherit;
  display: inline-block;
  text-align: center;
  width: 8em;
  height: 2.6em;
  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--color);
}

.btn-conv:before {
  content: '';
  position: absolute;
  z-index: -1;
  background: var(--color);
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

.btn-conv:hover {
  color: #fff;
}

.btn-conv:before {
  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

.btn-conv:hover:before {
  top: -30px;
  left: -30px;
}

.btn-conv:active:before {
  background: #3a0ca3;
  transition: background 0s;
}

/*=================== MAPA ================= */
.map-card {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  z-index: 1;
  padding: 20px;
}

.map-tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.map-circle {
  padding: 0 4px;
}

.map-box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.map-red {
  background-color: #ff605c;
}

.map-yellow {
  background-color: #ffbd44;
}

.map-green {
  background-color: #00ca4e;
}
/*=========================== PRINCIPAL PAGINA =================== */
.box-p {
  position: relative;
  width: 700px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 1;
}

.box-p::before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  text-decoration: none;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

.box-p::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(30px);
}

.box-p:hover:before,
.box-p:hover:after {
  transform: skewX(0deg) scaleX(1.3);
}

.box-p:before,
.box-p:after {
  background: linear-gradient(315deg, var(--main-color-2), var(--main-color));
}

.box-p span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  pointer-events: none;
}

.box-p span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.1s;
  animation: animate 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.box-p span::before {
  top: -40px;
  left: 40px;
  width: 50px;
  height: 50px;
  opacity: 1;
}

.box-p span::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  animation-delay: -1s;
}

.box-p span:after {
  bottom: -40px;
  right: 40px;
  width: 50px;
  height: 50px;
  opacity: 1;
}

.box-p .content-p {
  position: relative;
  width: 690px;
  height: 500px;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  transform: 0.5s;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

.box-p .content-p h2 {
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}
.box-p .content-p h5 {
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
}
</style>
