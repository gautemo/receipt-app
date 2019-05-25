<template>
  <div id="app">
    <nav>
      <router-link class="route" to="/">NEW RECEIPT</router-link>
      <router-link class="route" to="/stored">ALL RECEIPTS</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Patua+One&display=swap");

body {
  margin: 0;
  font-family: "Patua One", cursive;
}

#app {
  display: grid;
  grid-template-rows: 100px 1fr;
}

nav {
  background-image: linear-gradient(135deg, #f07d00 10%, #cf022b 100%);
  font-size: 2em;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.route {
  color: #333;
  font-weight: bold;
}
</style>
