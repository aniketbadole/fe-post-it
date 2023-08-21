<template>
  <div class="reset-password">
    <h2>Reset your password</h2>
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="currentPassword">Current Password:</label>
        <input type="password" id="currentPassword" v-model="currentPassword" required />
      </div>
      <div class="form-group">
        <label for="newPassword">New Password:</label>
        <input type="password" id="newPassword" v-model="newPassword" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPassword: '',
      newPassword: ''
    }
  },
  methods: {
    resetPassword() {
      // In a real application, you would perform authentication here
      // For this example, let's just log the username and password
      console.log('Username:', this.currentPassword)
      console.log('Password:', this.newPassword)
    }
  }
}
</script>

<style>
.reset-password {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
</style>
