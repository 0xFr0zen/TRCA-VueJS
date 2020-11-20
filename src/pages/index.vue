<template>
  <CBox d="flex" w="100vw" h="100vh" p="2" bg="#10002B">
    <CFlex direction="column" w="100vw" h="auto">
      <CFlex m="auto" direction="column" align="center">
        <CHeading color="white" align="center" :fontSize="['1em', '2em', '4em', '6em']">TRCA</CHeading>
        <CLink :href="this.getLink" color="white">
          <CButton variant="solid" variant-color="indigo" size="lg">Login</CButton>
        </CLink>
      </CFlex>
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CFlex, CHeading, CLink } from '@chakra-ui/vue';
import TwitchMod from '../components/TwitchMod';
export default {
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CHeading
  },
  data() {
    return {
      login: false
    };
  },
  computed: {
    getLink: function() {
      return '/dashboard';
    }
  },
  methods: {}
};
</script>

<style></style>
