<template>
  <div>
    <img class="small" :src="img" @click="zoom = true">
    <div v-if="zoom" @click="zoom = false" class="modal">
      <img class="big" :src="img" @click.stop>
      <button class="btn del" @click.stop="del">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Receipt",
  props: {
    storageRef: Object
  },
  data() {
    return {
      img: require("@/assets/placeholder.png"),
      zoom: false
    };
  },
  methods: {
    async del() {
      await this.storageRef.delete();
      this.$emit("remove");
    }
  },
  async created() {
    this.img = await this.storageRef.getDownloadURL();
  }
};
</script>

<style scoped>
.small {
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}

.big {
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.8);
}

.modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20vh 10vw;
  background: rgba(0, 0, 0, 0.4);
}

.del {
  --color: #ff2600;
  --second-color: #fd0000;
}
</style>
