<template>
  <div class="abt-info">
    
    <div class="as-1">
      <div v-for="inf in options.info" :key="inf.id"  >
        <router-link :to="{ name: 'Detail', params : { detId: inf.id } }" >
              <h3> {{ inf.name }} </h3>
        </router-link>
      </div>
    </div>
    <div class="as-2">
      <router-view :key="$route.path" ></router-view>
    </div>
  </div>




</template>


<script>
import store from '@/storeX.js'

export default {
  data(){
    return {
      id: this.$route.params.infoId,
      options: {}
    }
  },
  mounted(){
    this.options = store.options.find( op => String(op.id) === (this.id) )
  }
}
</script>

<style scoped>

.abt-info{
  height: 100%;
  display: flex;
}

.as-1, .as-2{
  flex: 1;
}

.as-1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #00000020 ;
}

.as-3{
  flex: 1;
}

</style>