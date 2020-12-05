<template>
  <div id="home">
    <h2>Feed</h2>
    <div class="feed">
      <FeedInput />
    </div>
    <div class="posts">
      <h3>Posts</h3>
      <div class="post-feed">
        <Feed />
      </div>
    </div>
  </div>
</template>

<script>
import FeedInput from "@/components/FeedInput.vue";
import Feed from "@/components/Feed.vue";

export default {
  components: {
    FeedInput, Feed
  }
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
