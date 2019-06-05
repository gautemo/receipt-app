<template>
  <div>
    <receipt v-for="r in receipts" :key="r.id" :path="r.path" :id="r.id"/>
  </div>
</template>

<script>
import firebase from "@/firebaseinit";
import "firebase/firestore";
import "firebase/auth";

export default {
  name: "stored",
  data() {
    return {
      receipts: []
    };
  },
  components: {
    Receipt: () => import("@/components/Receipt.vue")
  },
  created() {
    const userId = firebase.auth().currentUser.uid;
    const userCollection = firebase.firestore().collection(userId);

    userCollection.orderBy("created_at").onSnapshot(snapshot => {
      for (const change of snapshot.docChanges()) {
        if (change.type === "added") {
          this.receipts.unshift({
            id: change.doc.id,
            path: change.doc.data().path
          });
        } else if (change.type === "removed") {
          this.receipts.splice(
            this.receipts.findIndex(i => i.id === change.doc.id),
            1
          );
        }
      }
    });
  }
};
</script>