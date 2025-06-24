<template>
    <div class="unauthorized">
      <h1>🚫 Toegang geweigerd</h1>
      <p>Je hebt geen toestemming om deze pagina te bekijken.</p>
      <router-link to="/login">Terug naar start</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Unauthorized"

  };
  </script>
  
<style scoped>
    .unauthorized {
      text-align: center;
      margin-top: 100px;
    }
</style>
