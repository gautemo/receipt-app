<template>
  <div>
    <input type="file" v-on:change="addImg" accept="image/*" id="file">
    <label for="file" class="btn-1">ADD</label>
  </div>
</template>

<script>
export default {
  name: "newimg",
  methods: {
    addImg(e) {
      console.log(e.target.files[0]);
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

[type="file"] + label {
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem 50px;
  position: relative;
  vertical-align: middle;
  background-color: #ff8100;
  box-shadow: 0 6px #ff591a;
}

[type="file"] + label:hover {
  box-shadow: 0 3px #ff591a;
  top: 2px;
}
</style>
