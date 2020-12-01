<template>
  <div id="home">
    <h2>Feed</h2>
    <div class="feed">
      <FeedInput @post="addPost($event)" />
    </div>
    <div class="posts">
      <h3>Posts</h3>
      <div class="post-feed">
        <Feed :posts="posts" @del="deletePost($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import FeedInput from "@/components/FeedInput.vue";
import Feed from "@/components/Feed.vue";
import posts from "@/store.js";

export default {
  data:() => ({
    posts : [...posts]
  }),
  components: {
    FeedInput, Feed
  },
  methods: {
    addPost(val) {
      const post = {
        text: val,
        id: Date.now(),
        posted_on: new Date().toString(),
      };
      posts.unshift(post);
      this.posts.unshift(post);
    },
    deletePost(id){
      let index = this.posts.findIndex( p => p.id === id )
      posts.splice(index,1);
      this.posts.splice(index,1);
    }
  },
};
</script>

<style scoped>
#home,
.posts {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.post-feed {
  flex: 1;
  overflow:  hidden;
}

.feed {
  width: 75%;
  margin: auto;
}
</style>
