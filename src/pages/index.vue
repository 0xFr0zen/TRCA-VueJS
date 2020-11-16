<template>
  <CBox d="flex" w="100vw" h="100vh" p="2" bg="gray.900" v-if="login">
    <CFlex w="100vw" h="80vh" flex-dir="column" p="2" align="center">
      <CHeading textAlign="center" pb="6" color="indigo.200">Twitch Redeem Command Alerts</CHeading>
      <CGrid
        w="80vw"
        h="auto"
        bg="gray.200"
        borderRadius="md"
        overflow="hidden"
        template-columns="repeat(3, 1fr)"
        column="3"
        autoFlow="column dense"
        gap="0"
      >
        <CBox bg="indigo.400">
          <CBox d="flex" flex-dir="column">
            <TwitchMod mod="cs" title="Commands" />
            <TwitchMod mod="rs" title="Redeems" />
          </CBox>
        </CBox>
        <CBox w="55vw" h="70vh" bg="gray.800">
          <CBox d="flex" flex-dir="column"> hi</CBox>
        </CBox>
        <CBox bg="indigo.400">
          <CBox d="flex" flex-dir="column"> </CBox>
        </CBox>
      </CGrid>
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CFlex, CHeading, CGrid } from '@chakra-ui/vue';
import TwitchMod from '../components/TwitchMod';
export default {
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    TwitchMod,
    CBox,
    CFlex,
    CHeading,
    CGrid
  },
  data() {
    return {
      login: true
    };
  }
};
</script>

<style></style>
