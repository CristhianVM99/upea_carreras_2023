<template>
    <div id="sc-page-error" class="sc-page-error">
      <div class="error-text">
        <h1 class="error-code">404</h1>
        <h3 class="error-message">Page Not Found</h3>        
        <router-link :to="{ name : 'index3' }" class="readon">
          Back to Homepage 
          <i class="flaticon flaticon-right-arrow"></i>
        </router-link>
      </div>
    </div>
</template>
<script>
export default {
    name : 'errorSectionComp',
}
</script>