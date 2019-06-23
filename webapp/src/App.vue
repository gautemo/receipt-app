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
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr;
}

nav {
  background-image: linear-gradient(135deg, #f07d00 10%, #cf022b 100%);
  font-size: calc(1.2vw + 10px);
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.route {
  color: #333;
  font-weight: bold;
}

[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

[type="file"] + label,
.btn {
  --color: #f07d00;
  --second-color: #ff591a;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem 30px;
  position: relative;
  vertical-align: middle;
  background-color: var(--color);
  box-shadow: 0 6px var(--second-color);
}

[type="file"] + label:hover,
.btn:hover {
  box-shadow: 0 3px var(--second-color);
  top: 2px;
}

.btn {
  font-family: inherit;
}
</style>
