<template>
  <div>
    <input type="file" v-on:change="addImg" accept="image/*" id="file">
    <label for="file" class="btn-1">ADD IMAGE</label>
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
</style>
