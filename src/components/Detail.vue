<template>
  <div class="centered" >
    <h3 class="abt-h3" > Detail </h3>
    <p> {{ infoId }} | {{ detId }} </p>
  </div>
</template>

<script>
export default {

  data(){
    return{
      infoId:'',
      detId:''
    }
  },
  mounted(){
    this.infoId = this.$route.params.infoId;
    this.detId = this.$route.params.detId
  }
}
</script>

<style scoped>
  .centered{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>