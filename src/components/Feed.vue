<template>
  <div class="app">
    <div class="feed">
      <div class="the-real-feed">
        <div
          v-for="p in sortedPosts"
          :key="p.id"
          class="post"
          @click="$router.push({ name: 'Post', params: { postId: p.id } })"
        >
          <p class="feed-p">{{ p.text }}</p>
          <div class="feed-post-info" >
            <p class="feed-date">posted on {{ p.posted_on | dateStr }}</p>
            <Btn @press="deletePost(p)" v-if="auth" :preventDel="true"  >Delete</Btn>
          </div>
        </div>
      </div>
    </div>
    <div class="weeks">
      <Week :posts="posts" />
    </div>
  </div>
</template>

<script>
import Week from "@/components/Week.vue";
import Btn from '@/components/Btn.vue'

export default {
  components: { Week, Btn },
  filters: {
    dateStr(val) {
      return new Date(val).toDateString();
    },
  },
  methods: {
    deletePost(post) {
      this.$store.dispatch('delPost',post)
    },
  },
  computed: {
    posts(){
      return this.$store.state.posts
    },
    auth(){
      return this.$store.state.auth
    },
    sortedPosts() {
      return [...this.posts].sort((p1, p2) =>
        new Date(p1.posted_on) < new Date(p2.posted_on) ? +1 : -1
      );
    },
  },
};
</script>

<style scoped>
.app {
  height: 100%;
  display: flex;
  overflow: hidden;
}
.feed {
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
}
.the-real-feed {
  flex: 1;
  overflow: auto;
}
.weeks {
  width: 180px;
  background: lightseagreen;
}
.post {
  padding: 1rem;
  width: 70%;
  margin: auto;
  box-shadow: 0px 2px 8px 0px #00000025;
  margin: 1rem auto;
  border-radius: 6px;
}
.feed-p {
  margin: 1rem 0;
  font-weight: bold;
  text-align: left;
  white-space: pre;
}
.feed-date {
  text-align: right;
  font-size: 12px;
  color: gray;
}
.feed-post-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
a {
  display: block;
}
</style>
