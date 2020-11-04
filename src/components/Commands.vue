<template>
  <CBox w="100%">
    <CFlex w="100%" mb="2">
      <CHeading size="lg" color="indigo.500" align="flex-start" m="auto" ml="0px">Commands</CHeading>
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
          v-for="command in commands"
          v-bind:key="command.id"
          p="4"
          border-width="1px"
        >
          <CHeading size="lg" color="white">!{{ command.name }}</CHeading>
          <CText mt="4" color="white">{{ command.text }}</CText>
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
  name: 'Commands',
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
      commandinput: '',
      commands: []
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
    this.loadCommands();
  },
  methods: {
    loadCommands() {
      axios
        .get('http://localhost:3000/u/oetziofficial/cs')
        .then(cs => (this.commands = cs.data))
        .catch(e => console.error(e));
    },
    getCommand(name) {
      axios
        .get(`http://localhost:3000/u/oetziofficial/c/${name}`)
        .then(cs => (this.commands = [...cs.data]))
        .catch(e => console.error(e));
    }
  }
};
</script>

<style></style>
