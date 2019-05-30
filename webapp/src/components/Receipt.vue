<template>
  <div>
    <img :src="img">
    <button @click="download">DOWNLOAD</button>
    <button @click="del" class="del">DELETE</button>
  </div>
</template>

<script>
import firebase from "@/firebaseinit";
import "firebase/storage";

const storage = firebase.storage().ref();

export default {
  name: "Receipt",
  props: {
    id: String,
    path: String
  },
  data() {
    return {
      img: require("@/assets/placeholder.png")
    };
  },
  methods: {
    download() {},
    del() {}
  },
  async created() {
    this.img = await storage.child(this.path).getDownloadURL();
  }
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 150px 300px 300px;
  grid-gap: 50px;
  align-items: center;
  justify-content: center;
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
