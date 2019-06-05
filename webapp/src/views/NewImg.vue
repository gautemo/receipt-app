<template>
  <div>
    <input type="file" v-on:change="addImg" accept="image/*" id="file">
    <label for="file" class="btn-1">ADD IMAGE</label>
  </div>
</template>

<script>
import firebase from "@/firebaseinit";
import "firebase/storage";
import "firebase/auth";

const storage = firebase.storage().ref();

function generateUniqueId() {
  return new Date().getTime();
}

export default {
  name: "newimg",
  methods: {
    addImg(e) {
      const file = e.target.files[0];
      const userId = firebase.auth().currentUser.uid;
      const receiptId = generateUniqueId();
      storage.child(`/${userId}/${receiptId}${file.name}`).put(file);
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
