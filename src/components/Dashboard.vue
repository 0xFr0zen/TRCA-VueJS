<template>
  <CBox>
    <Login v-if="!login" />
    <CBox d="flex" flex-dir="column" v-if="login">
      <Commands />
      <Redeems />
    </CBox>
  </CBox>
</template>

<script>
import Commands from './Commands';
import { CBox } from '@chakra-ui/vue';
import Redeems from './Redeems';
import Login from './Login';
export default {
  name: 'Dashboard',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    Commands,
    Redeems,
    CBox,
    Login
  },
  data() {
    return {
      login: false
    };
  }
};
</script>

<style></style>
