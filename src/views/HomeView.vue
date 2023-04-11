<template>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Banner Section Start -->
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    >
      <swiper-slide>
        <div class="bg" 
        v-for="(portada, id_img) in Institucion.portada" :key="id_img"
        >
          <img :src="this.url_api+'/InstitucionUpea/Portada/'+portada.portada_imagen" alt="" width="100px" height="200px">          
        </div>
      </swiper-slide>      
      <div id="sc-banner" class="sc-banner banner-style3 upposition-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
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
    </swiper>
    <!-- Banner Section End -->

    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 pb-120 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
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
                    Frameworks ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </blockquote>
                <div class="blog-desc mb-40">
                  <p>
                    Evolved from sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="tags-area">
                  <span class="tags">Tags</span>
                  <ul class="tags-list">
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Computer</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 md-mt-60">
            <div class="widget-area">
              <div class="widget-archives mb-50">
                <h3 class="widget-title">Links Externos</h3>
                <ul>
                  <li
                    v-for="(link, id_link) of Links"
                    :key="id_link"
                    :href="id_link"
                    target="_blank"
                    :style="
                      'background-image: url(' +
                      url_api +
                      '/InstitucionUpea/LinksExternos/' +
                      link.ei_imagen +
                      ');object-fit:cover;height:100px;'
                    "
                    class="links_externos"
                  >
                    <router-link to="/">{{ link.ei_nombre }}</router-link>
                  </li>
                </ul>
              </div>

              <div class="recent-posts-widget mb-50">
                <h3 class="widget-title">Mision</h3>
                <div class="show-featured">
                  <div class="post-desc">
                    <p v-html="Institucion.institucion_mision"></p>
                  </div>
                </div>
              </div>

              <div class="recent-posts-widget mb-50">
                <h3 class="widget-title">Vision</h3>
                <div class="show-featured">
                  <div class="post-desc">
                    <p v-html="Institucion.institucion_vision"></p>
                  </div>
                </div>
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
              <div class="sub-title position-relative">
                Frases <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color">
                La tecnología avanza a una velocidad increíble,<br />
                y si no estás al día, te quedas atrás.
              </h2>
            </div>
          </div>
          <div class="col-lg-6 hidden-md">
            <div class="img-part img-autor">
              <img src="../assets/images/cta/cta-autores.png" alt="Image" />
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
      class="sc-counter counter-bg1 pt-120 pb-120 md-pt-80 md-pb-50 sc-counter-bg position-relative arrow-animation-1"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              v-for="(conv, id_conv) of this.MenuConvocatorias"
              :key="id_conv"
              :to="'/convocatorias/' + conv.idtipo_conv_comun"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-laptop"></i>
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
              :to="'/cursos/' + cur.idtipo_curso_otros"
            >
              <div class="counter-item text-center ping-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-study"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ contarCur(cur.tipo_conv_curso_nombre) }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">{{ cur.tipo_conv_curso_nombre }}</h5>
              </div>
            </router-link>
            <router-link to="/eventos">
              <div class="counter-item text-center ping-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-study"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Eventos.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">EVENTOS</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link to="/servicios">
              <div class="counter-item text-center green-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-teacher"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Servicios.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">SERVICIOS</h5>
              </div>
            </router-link>
            <router-link to="/gaceta">
              <div class="counter-item text-center ping-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-study"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Gacetas.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">GACETA</h5>
              </div>
            </router-link>
            <router-link to="/videos">
              <div class="counter-item text-center ping-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-study"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Videos.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">VIDEOS</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link to="/ofertas">
              <div class="counter-item text-center yellow-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-monitor"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Ofertas.length }}</span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">OFERTAS ACADEMICAS</h5>
              </div>
            </router-link>
            <router-link to="/publicaciones">
              <div class="counter-item text-center green-color cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-teacher"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Publicaciones.length }} </span><span class="text">+</span>
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
      <div class="container">
        <div class="sec-title mb-30 text-center md-mb-10">
          <div class="sub-title primary">Autoridades<span class="heading-border-line"></span></div>
          <h2 class="title mb-0">Nuestras Autoridades</h2>
        </div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
        >
          <swiper-slide v-for="(autoridad, id_aut) of Institucion.autoridad" :key="id_aut">
            <div class="team-inner-item">
              <div class="team-wrap">
                <div class="team-img">
                  <img
                    :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad"
                    alt="img"
                    class="img_swiper"
                  />
                  <ul class="team-social">
                    <li>
                      <a :href="autoridad.facebook_autoridad" target="_blank" class="social-icon"
                        ><i class="fa fa-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        :href="'https://wa.me/+' + autoridad.celular_autoridad"
                        target="_blank"
                        class="social-icon"
                        ><i class="fa fa-whatsapp"></i
                      ></a>
                    </li>
                    <li>
                      <a :href="autoridad.twiter_autoridad" target="_blank" class="social-icon"
                        ><i class="fa fa-twitter"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="team-item-text">
                  <div class="team-details">
                    <h3 class="team-name">
                      <a href="team-single.html">{{ autoridad.nombre_autoridad }}</a>
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
    <div id="sc-about-instructor" class="sc-about-instructor pt-80 pb-90 md-pt-50 md-pb-70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 md-mb-45">
            <div class="img-part position-relative">
              <img class="" src="../assets/images/about/instructor.png" alt="About Image" />
            </div>
          </div>
          <div class="col-lg-7 pl-85 md-pl-15">
            <div class="sec-title mb-20">
              <div class="sub-title position-relative">
                institucion <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20">Organigrama</h2>
              <h3 class="des mb-40">Organización y estructura administrativa de la carrera.</h3>
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
          <div class="sub-title primary">Lo mas reciente</div>
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
          <swiper-slide>
            <div class="blog-item bg_box" v-if="Object.keys(latestConvocatoria).length != 0">
              <div class="image-part">
                <router-link :to="'/detalleConvocatoria/' + latestConvocatoria.idconvocatorias">
                  <img
                    class="img_swiper"
                    :src="url_api + '/Convocatorias/' + latestConvocatoria.con_foto_portada"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="blog-content">
                <ul class="blog-meta">
                  <router-link
                    :to="'/convocatorias/' + latestConvocatoria.tipo_conv_comun.idtipo_conv_comun"
                    ><li class="btn_tipo">
                      {{ latestConvocatoria.tipo_conv_comun.tipo_conv_comun_titulo }}
                    </li></router-link
                  >
                  <li><i class="fa fa-calendar"></i>{{ dmy(latestConvocatoria.con_fecha_inicio) }}</li>
                </ul>
                <h3 class="title">
                  <router-link :to="'/detalleConvocatoria/' + latestConvocatoria.idconvocatorias">{{
                    latestConvocatoria.con_titulo.toUpperCase()
                  }}</router-link>
                </h3>
                <div class="btn-btm">
                  <div class="rs-view-btn">
                    <router-link
                      :to="'/detalleConvocatoria/' + latestConvocatoria.idconvocatorias"
                      class="readon btn_link"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="blog-item bg_box" v-if="Object.keys(latestComunicado).length != 0">
              <div class="image-part">
                <router-link :to="'/detalleConvocatoria/' + latestComunicado.idconvocatorias">
                  <img
                    class="img_swiper"
                    :src="url_api + '/Convocatorias/' + latestComunicado.con_foto_portada"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="blog-content">
                <ul class="blog-meta">
                  <router-link
                    :to="'/convocatorias/' + latestComunicado.tipo_conv_comun.idtipo_conv_comun"
                    ><li class="btn_tipo">
                      {{ latestComunicado.tipo_conv_comun.tipo_conv_comun_titulo }}
                    </li></router-link
                  >
                  <li><i class="fa fa-calendar"></i>{{ dmy(latestComunicado.con_fecha_inicio) }}</li>
                </ul>
                <h3 class="title">
                  <router-link :to="'/detalleConvocatoria/' + latestComunicado.idconvocatorias">{{
                    latestComunicado.con_titulo.toUpperCase()
                  }}</router-link>
                </h3>
                <div class="btn-btm">
                  <div class="rs-view-btn">
                    <router-link
                      :to="'/detalleConvocatoria/' + latestComunicado.idconvocatorias"
                      class="readon btn_link"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="blog-item bg_box" v-if="Object.keys(latestAviso).length != 0">
              <div class="image-part">
                <router-link :to="'/detalleConvocatoria/' + latestAviso.idconvocatorias">
                  <img
                    class="img_swiper"
                    :src="url_api + '/Convocatorias/' + latestAviso.con_foto_portada"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="blog-content">
                <ul class="blog-meta">
                  <router-link :to="'/convocatorias/' + latestAviso.tipo_conv_comun.idtipo_conv_comun"
                    ><li class="btn_tipo">
                      {{ latestAviso.tipo_conv_comun.tipo_conv_comun_titulo }}
                    </li></router-link
                  >
                  <li><i class="fa fa-calendar"></i>{{ dmy(latestAviso.con_fecha_inicio) }}</li>
                </ul>
                <h3 class="title">
                  <router-link :to="'/detalleConvocatoria/' + latestAviso.idconvocatorias">{{
                    latestAviso.con_titulo.toUpperCase()
                  }}</router-link>
                </h3>
                <div class="btn-btm">
                  <div class="rs-view-btn">
                    <router-link
                      :to="'/detalleConvocatoria/' + latestAviso.idconvocatorias"
                      class="readon btn_link"
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
      class="sc-cta-section cta-bg-image right-bg-image2 pt-110 pb-120 md-pt-75 md-pb-80 position-relative arrow-animation-1"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div class="sec-title">
              <div class="sub-title position-relative">
                Frases<span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color">
                Un buen desarrollador de software trabaja con disciplina y constancia desde el
                primer día.
                <br />- Omar Bradley -
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
    <div id="sc-blog" class="sc-blog main-home pb-200 pt-110 md-pt-70 md-pb-160">
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary">Lo mas reciente</div>
          <h2 class="title mb-0">Cursos y Seminarios</h2>
        </div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          v-if="Object.keys(latestCurso).length + Object.keys(latestSeminario).length > 0"
        >
          <swiper-slide>
            <div class="blog-item bg_box" v-if="Object.keys(latestCurso).length != 0">
              <div class="image-part">
                <router-link :to="'/detalleCurso/' + latestCurso.iddetalle_cursos_academicos">
                  <img
                    class="img_swiper"
                    :src="url_api + '/Cursos/' + latestCurso.det_img_portada"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="blog-content">
                <ul class="blog-meta">
                  <router-link :to="'/cursos/' + latestCurso.idtipo_curso_otros"
                    ><li class="btn_tipo">
                      {{ latestCurso.tipo_curso_otro.tipo_conv_curso_nombre }}
                    </li></router-link
                  >
                  <li><i class="fa fa-calendar"></i>{{ dmy(latestCurso.det_fecha_ini) }}</li>
                </ul>
                <h3 class="title">
                  <router-link :to="'/detalleCurso/' + latestCurso.iddetalle_cursos_academicos">{{
                    latestCurso.det_titulo.toUpperCase()
                  }}</router-link>
                </h3>
                <div class="btn-btm">
                  <div class="rs-view-btn">
                    <router-link
                      :to="'/detalleCurso/' + latestCurso.iddetalle_cursos_academicos"
                      class="readon btn_link"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="blog-item bg_box" v-if="Object.keys(latestSeminario).length != 0">
              <div class="image-part">
                <router-link :to="'/detalleCurso/' + latestSeminario.iddetalle_cursos_academicos">
                  <img
                    class="img_swiper"
                    :src="url_api + '/Cursos/' + latestSeminario.det_img_portada"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="blog-content">
                <ul class="blog-meta">
                  <router-link :to="'/detalleCurso/' + latestSeminario.idtipo_curso_otros"
                    ><li class="btn_tipo">
                      {{ latestSeminario.tipo_curso_otro.tipo_conv_curso_nombre }}
                    </li></router-link
                  >
                  <li><i class="fa fa-calendar"></i>{{ dmy(latestSeminario.det_fecha_ini) }}</li>
                </ul>
                <h3 class="title">
                  <router-link :to="'/detalleCurso/' + latestSeminario.iddetalle_cursos_academicos">{{
                    latestSeminario.det_titulo.toUpperCase()
                  }}</router-link>
                </h3>
                <div class="btn-btm">
                  <div class="rs-view-btn">
                    <router-link
                      :to="'/detalleCurso/' + latestSeminario.iddetalle_cursos_academicos"
                      class="readon btn_link"
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
  <div class="pl-20 pr-20 contact-g-map mr-70 mb-150 bg-map">
    <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
    <iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>
  </div>
  <!-- Map End -->
  <!-- Main content End -->
</template>
<script>
import { mapState } from 'vuex'
import Services from '@/services/Services'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
  name: 'HomeView',
  data() {
    return {
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
    ...mapState(['url_api', 'Institucion', 'MenuConvocatorias', 'MenuCursos', 'Links'])
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, Pagination, Navigation],
      };
  },
  methods: {
    async getConvocatoriasAll() {
      try {
        //optenemos todas la convocatoarias de la api
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = response.data

        //obtenemos los ultimos comunicados de convocatorias, comunicados y avisos
        if (response != null) {
          this.Convocatorias.forEach((conv) => {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo == 'CONVOCATORIAS' &&
              conv.con_estado == '1'
            ) {
                this.latestConvocatoria = conv                
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo == 'COMUNICADOS' &&
                conv.con_estado == '1'
              ) {
                  this.latestComunicado = conv
              } else {
                if (
                  conv.tipo_conv_comun.tipo_conv_comun_titulo == 'AVISOS' &&
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
    createdComponent() {
      this.getConvocatoriasAll()
      this.getCursosAll()
      this.getServiciosAll()
      this.getOfertasAll()
      this.getPublicaciones()
      this.getGacetaAll()
      this.getEventos()
      this.getVideos()      
    }
  },
  created() {
    this.createdComponent()
  }
}
</script>
<style scoped>

.title_home{
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  background: var(--main-color);
  padding: 10px;
  color: #fff;
  letter-spacing: 2px;
}
.cat {
  transition: 0.5s;
  margin: 20px 0px;
}
.cat:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.links_externos {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat !important;
  background-position: right !important;
  background-size: contain !important;
}
.links_externos a {
  background-color: crimson;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  color: #ffffff !important;
  padding: 7px 20px;
  width: 10em;
  border-radius: 20px;
  text-align: center;
}
.cta {
  position: relative;
}
.cta::after {
  position: absolute;
  width: 100%;
  height: 20%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
  content: '';
  left: 0;
  top: 0;
}
.cta::before {
  position: absolute;
  width: 100%;
  height: 20%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  content: '';
  left: 0;
  bottom: 0;
}
.img-autor {
  margin: 40px !important;
  position: relative;
  text-align: center;
}
.img-autor img {
  width: 400px !important;
  margin: 10px 0px;
}
.img-autor::before {
  content: 'Kevin Mitnick';
  top: 20px;
  right: 125px;
  position: absolute;
  width: 100px;
  color: #fff;
  padding-left: 15px;
  background: #f24d5d;
  text-align: center;
  letter-spacing: 1px;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
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
.bg{
  z-index: -1;
  position: absolute;
}
</style>
