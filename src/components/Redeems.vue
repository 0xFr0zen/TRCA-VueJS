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
      <CSpinner
        v-if="!hasRedeems"
        thickness="2px"
        speed="0.65s"
        empty-color="indigo.100"
        color="indigo.300"
        size="md"
      />
      <CStack spacing="5" mb="3" v-if="hasRedeems">
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
import { CBox, CFlex, CHeading, CStack, CText, CInput, CInputGroup, CInputLeftElement, CSpinner } from '@chakra-ui/vue';
import axios from 'axios';

export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CBox,
    CFlex,
    CHeading,
    CStack,
    CText,
    CInput,
    CInputGroup,
    CInputLeftElement,
    CSpinner
  },
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      },
      redeeminput: '',
      state: { redeems: [] }
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
    }
  },
  created() {
    this.loadRedeems();
  },
  methods: {
    hasRedeems() {
      return this.state.redeems !== [];
    },
    loadRedeems() {
      axios
        .get('http://localhost:3000/u/oetziofficial/rs')
        .then(rs => (this.state.redeems = rs.data))
        .catch(e => console.error(e));
    },
    getRedeems(name) {
      axios
        .get(`http://localhost:3000/u/oetziofficial/r/${name}`)
        .then(rs => (this.state.redeems = [...rs.data]))
        .catch(e => console.error(e));
    }
  }
};
</script>

<style></style>
