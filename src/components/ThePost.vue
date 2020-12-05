<template>
  <div class="post">
    <h2>Post</h2>
    <div v-if="post">
      <h3>{{ post.text }}</h3>
      <p>Posted on {{ post.posted_on | toDateString }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postId: this.$route.params.postId,
    };
  },
  filters:{
      toDateString(d){
          return new Date(d).toDateString()
      }
  },
  computed:{
    post(){
      return this.$store.getters.thePost(this.postId)
    }
  },
};
</script>

<style scoped>
.post {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
