<template>
  <div class="grid">
    <receipt v-for="r in receipts" :storageRef="r" :key="r.name" v-on:remove="del(r.name)"/>
  </div>
</template>

<script>
import firebase from "@/firebaseinit";
import "firebase/auth";

export default {
  name: "stored",
  data() {
    return {
      receipts: []
    };
  },
  methods: {
    del(name) {
      this.receipts = this.receipts.filter(r => r.name !== name);
    }
  },
  components: {
    Receipt: () => import("@/components/Receipt.vue")
  },
  async created() {
    const userId = firebase.auth().currentUser.uid;
    const res = await firebase
      .storage()
      .ref(`${userId}`)
      .listAll();
    this.receipts = res.items.reverse();
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 250px;
}
</style>
