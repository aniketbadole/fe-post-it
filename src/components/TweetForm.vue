<template>
  <div class="tweet-form">
    <textarea v-model="newTweet" placeholder="What's happening?" rows="4"></textarea>
    <button @click="postTweet">Tweet</button>
  </div>
</template>

<script>
export default {
  name: 'TweetForm',
  data() {
    return {
      newTweet: ''
    }
  },
  methods: {
    postTweet() {
      // Implement functionality to post a new tweet
    }
  }
}
</script>

<style scoped>
/* Add styles specific to the TweetForm component */
</style>
