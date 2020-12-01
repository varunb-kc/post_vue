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
import store from "@/store.js";

export default {
  data() {
    return {
      postId: this.$route.params.postId,
      post:null
    };
  },
  filters:{
      toDateString(d){
          return new Date(d).toDateString()
      }
  },
  created() {
    this.post = store.find((p) => String(p.id) === String(this.postId));
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
