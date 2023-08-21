<template>
  <div class="tweets">
    <div v-for="tweet in tweets" :key="tweet.id" class="tweet">
      <div class="user-info">
        <router-link :to="`/profile/${tweet.username}`">{{ tweet.username }}</router-link>
      </div>
      <div class="tweet-content">{{ tweet.content }}</div>
      <!-- Add tweet actions (like, retweet, reply) here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TweetList',
  props: {
    tweets: Array // Array of tweets from followed users
  }
}
</script>

<style scoped>
/* Add styles specific to the TweetList component */
</style>
