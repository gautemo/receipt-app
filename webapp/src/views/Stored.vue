<template>
  <div>
    <receipt v-for="r in receipts" :key="r.total" :img="r.img" :total="r.total"/>
  </div>
</template>

<script>
import firebase from "@/firebaseinit";
import "firebase/storage";

const storage = firebase.storage().ref();

export default {
  name: "stored",
  data() {
    return {
      receipts: [
        {
          img:
            "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg",
          total: "1kr"
        },
        {
          img:
            "https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg",
          total: "12kr"
        }
      ]
    };
  },
  components: {
    Receipt: () => import("@/components/Receipt.vue")
  }
};
</script>