<template>
  <CBox>
    <CFlex v-if="!$parent.login && !loginvisible" direction="column">
      <CBox w="100%" direction="flex-start" p="2" textAlign="center"
        >You are currently not logged in, please Login</CBox
      >
      <CBox align="center"
        ><CButton variant-color="indigo" align="center" @click="loginModalVisible">Login</CButton></CBox
      >
    </CFlex>
    <CFlex v-if="loginvisible" direction="column">
      <CHeading size="lg" color="indigo.500" align="center">Login</CHeading>
      <CBox w="60%" align="center" justify="center">
        <CForm p="2" align="center" w="60%">
          <CInput align="center" type="text" mb="2" placeholder="Username" />
          <CInput align="center" type="password" mb="2" placeholder="Password" />
        </CForm>
      </CBox>
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CButton, CFlex, CHeading, CInput, CForm } from '@chakra-ui/vue';

export default {
  name: 'Login',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CButton,
    CFlex,
    CHeading,
    CForm,
    CInput
  },
  data() {
    return {
      loginvisible: false
    };
  },
  computed: {},
  methods: {
    loginModalVisible() {
      this.loginvisible = true;
    }
  }
};
</script>

<style></style>
