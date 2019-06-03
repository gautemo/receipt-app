<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from "@/firebaseinit";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "login",
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    const uiConfig = {
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style scoped>
#firebaseui-auth-container {
  margin-top: 50px;
}
</style>
