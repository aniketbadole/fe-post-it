<template>
  <div class="left-sidebar">
    <!-- User's profile information -->
    <div class="user-profile">
      <img :src="userProfileImage" alt="Profile Image" />
      <h3>{{ username }}</h3>
    </div>

    <!-- Link to the mentions page -->
    <router-link to="/mentions">Mentions</router-link>

    <!-- Button to post a tweet -->
    <button @click="openTweetModal">Post Tweet</button>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
  props: {
    username: String,
    userProfileImage: String
  },
  methods: {
    openTweetModal() {
      // Implement functionality to open the tweet modal
    }
  }
}
</script>

<style scoped>
/* Add styles specific to the LeftSidebar component */
</style>
