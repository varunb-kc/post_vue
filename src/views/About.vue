<template>
  <div class="about">
    <h2>About</h2>

    <div class="abt-content">
      
      <div class="abt-sec">
        <div  class="abt-links" v-for="opt in options" :key="opt.id"  > 
          <router-link :to="{ name: 'Info', params: { infoId : `${opt.id}` } }" >
            <h3> {{ opt.name }} </h3>
          </router-link>
        </div>
      </div>
      <div class="abt-sec as-2">
        <router-view :key="$route.path" ></router-view>
      </div>
    </div>
  </div>
</template>


<script>

import store from '@/storeX.js';
// import Detail from '@/components/Detail.vue';

export default {
  data(){
    return {
      options : store.options,
      matched: false
    }
  },
  // beforeRouteEnter(to,from,next){
  //   console.log(to,from,next);
  //   next();
  // },
  watch:{
    $route(){
      if( !this.$route.params.infoId ){
      this.$router.push({ name:'Info', params: { infoId : '1' } })
    }
      this.matched = this.$route.params.infoId ;
    }
  },
  mounted(){
    if( !this.$route.params.infoId ){
      this.$router.push({ name:'Info', params: { infoId : '1' } })
    }
    this.matched = this.$route.params.infoId ;
  }
}
</script>

<style scoped>

.about{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.abt-content{
  flex: 1;
  display: flex;
}
.abt-sec{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #00000020 ;
}

.router-link-active h3 {
  color: indianred;
}

.as-2{
  flex: 2;
}

</style>