<template>
  <div>
    <img :src="img">
    <p>Total: {{ total }}</p>
    <button @click="download">DOWNLOAD</button>
    <button @click="del" class="del">DELETE</button>
  </div>
</template>

<script>
export default {
  name: "Receipt",
  props: {
    img: String,
    total: String
  },
  methods: {
    download() {},
    del() {}
  }
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 150px auto 300px 300px;
  grid-gap: 20px;
  align-items: center;
  padding: 15px 50px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
}

img {
  height: 120px;
  width: 100%;
  object-fit: cover;
}

.del {
  --color: #ff2600;
  --second-color: #fd0000;
}
</style>
