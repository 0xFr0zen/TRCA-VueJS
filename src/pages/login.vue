<template>
  <CBox>
    <CFlex direction="column">
      <CBox w="100%" direction="flex-start" p="2" textAlign="center"
        >You are currently not logged in, please Login</CBox
      >
      <CBox align="center"
        ><CLink v-bind:href="loginLink()" is-external
          ><CButton variant-color="indigo" align="center">Login</CButton></CLink
        ></CBox
      >
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CButton, CFlex, CLink } from '@chakra-ui/vue';

const config = require('../../config.json');
export default {
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CButton,
    CFlex,
    CLink
  },
  data() {
    return {
      port: 3000,
      scopes: ['user:edit']
    };
  },
  computed: {},
  methods: {
    loginModalVisible() {
      this.loginvisible = true;
    },
    loginLink() {
      let clientID = config.client_id;
      if (!clientID) throw Error('no client ID');
      return `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${clientID}&redirect_uri=http://localhost:${
        this.port
      }/session&scope=${this.scopes.join('+')}`;
    }
  }
};
</script>

<style></style>
