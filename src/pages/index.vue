<template>
  <CBox d="flex" w="100vw" h="100vh" p="2" bg="gray.100" v-if="login">
    <CFlex w="100vw" h="80vh" flex-dir="column" p="2" align="center">
      <CHeading textAlign="center" pb="2" color="indigo.500">Twitch Redeem Command Alerts</CHeading>
      <CFlex justify="center" direction="column" w="80vw" h="auto" bg="gray.200" borderRadius="md">
        <CBox w="10vw" flex-dir="column" bg="gray.300">
          <CBox d="flex" flex-dir="column">
            <TwitchMod mod="cs" title="Commands" />
            <TwitchMod mod="rs" title="Redeems" />
          </CBox>
        </CBox>
        <CBox w="10vw" flex-dir="column" bg="gray.300">
          <CBox d="flex" flex-dir="column"> </CBox>
        </CBox>
      </CFlex>
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CFlex, CHeading } from '@chakra-ui/vue';
import TwitchMod from '../components/TwitchMod';
export default {
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    TwitchMod,
    CBox,
    CFlex,
    CHeading
  },
  data() {
    return {
      login: true
    };
  }
};
</script>

<style></style>
