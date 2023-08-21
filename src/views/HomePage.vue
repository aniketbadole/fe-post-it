<template>
  <div class="home-page">
    <left-sidebar :username="username" :userProfileImage="userProfileImage" />
    <main-section />
    <right-sidebar />
  </div>
</template>

<script>
import LeftSidebar from '@/components/LeftSidebar.vue'
import MainSection from '@/components/MainSection.vue'
import RightSidebar from '@/components/RightSidebar.vue'

export default {
  name: 'HomePage',
  components: {
    LeftSidebar,
    MainSection,
    RightSidebar
  },
  data() {
    return {
      username: 'YourUsername', // Replace with the user's username
      userProfileImage: 'profile.jpg' // Replace with the user's profile image URL
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f8f8;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
