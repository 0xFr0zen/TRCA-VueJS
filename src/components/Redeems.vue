<template>
  <CBox w="100%">
    <CFlex w="100%" mb="2">
      <CHeading size="lg" color="indigo.500" align="flex-start" m="auto" ml="0px">Redeems</CHeading>
      <CInputGroup align="flex-end">
        <CInputLeftElement><CBox class="material-icons" color="gray.500">search</CBox></CInputLeftElement>
        <CInput type="phone" placeholder="Search Commands" variant="filled" />
      </CInputGroup>
    </CFlex>
    <CBox>
      <CStack spacing="5" mb="3">
        <CBox
          bg="indigo.300"
          borderRadius="md"
          v-for="redeem in state.redeems"
          v-bind:key="redeem.id"
          p="4"
          border-width="1px"
        >
          <CHeading size="lg" color="white">{{ redeem.name }}</CHeading>
          <CText mt="4" color="white">{{ redeem.text }}</CText>
          <CImage mt="4"></CImage>
        </CBox>
      </CStack>
    </CBox>
  </CBox>
</template>

<script>
import { CBox, CFlex, CHeading, CStack, CText, CInput, CInputGroup, CInputLeftElement } from '@chakra-ui/vue';
import axios from 'axios';

export default {
  name: 'Redeems',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CFlex,
    CHeading,
    CStack,
    CText,
    CInput,
    CInputGroup,
    CInputLeftElement
  },
  data() {
    return {
      redeeminput: '',
      redeems: []
    };
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
    theme() {
      return this.$chakraTheme();
    },
    toggleColorMode() {
      return this.$toggleColorMode;
    },
    hasRedeems() {
      return this.redeems !== [];
    }
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get('http://localhost:3000/u/oetziofficial/rs')
        .then(rs => (this.redeems = rs.data))
        .catch(e => console.error(e));
    },
    getRedeem(name) {
      return this.redeems.filter(redeem => redeem.name === name)[0];
    }
  }
};
</script>

<style></style>
