<template>
  <CBox v-bind="mainStyles[colorMode]" d="flex" w="100vw" h="100vh" p="2" bg="gray.100">
    <CFlex w="100vw" h="auto" flex-dir="column" p="2" align="center">
      <CHeading textAlign="center" pb="2" color="indigo.500">Twitch Redeem Command Alerts</CHeading>
      <CFlex justify="center" direction="column" p="4" w="50vw" h="auto" bg="gray.200" borderRadius="md">
        <CBox>
          <CBox d="flex" flex-dir="column" v-if="login">
            <Commands />
            <Redeems />
          </CBox>
        </CBox>
      </CFlex>
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CFlex, CHeading } from '@chakra-ui/vue';
import Commands from '../components/Commands';
import Redeems from '../components/Redeems';
export default {
  name: 'Dashboard',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    Commands,
    Redeems,
    CBox,
    CFlex,
    CHeading
  },
  data() {}
};
</script>

<style></style>
