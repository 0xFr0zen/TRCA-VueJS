<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" d="flex" w="100vw" h="100vh" p="2" bg="gray.100">
      <CFlex w="100vw" h="auto" flex-dir="column" p="2" align="center">
        <CHeading textAlign="center" pb="2" color="indigo.500">Twitch Redeem Command Alerts</CHeading>
        <CFlex justify="center" direction="column" p="4" w="50vw" h="auto" bg="gray.200" borderRadius="md">
          <CBox d="flex" flex-dir="column">
            <CBox d="flex" w="100%">
              <CText size="sm" color="indigo.500" p="2" fontWeight="500">Load Commands</CText>
              <CIconButton @click="loadCommands" icon="search" />
            </CBox>
            <CBox>
              <CHeading size="lg" d="flex" pb="2" color="indigo.500">Commands</CHeading>
              <CBox>
                <CStack spacing="5" is-inline mb="3">
                  <CBox
                    bg="indigo.300"
                    borderRadius="md"
                    v-for="command in commands"
                    v-bind:key="command.id"
                    p="4"
                    border-width="1px"
                    cursor="pointer"
                  >
                    <CHeading size="lg" color="white">!{{ command.name }}</CHeading>
                    <CText mt="4" color="white">{{ command.text }}</CText>
                    <CImage mt="4"></CImage>
                  </CBox>
                </CStack>
                <CBox d="flex" flex-dir="row">
                  Hello
                </CBox>
              </CBox>
            </CBox>
          </CBox>
        </CFlex>
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import { CBox, CFlex, CHeading, CStack, CText, CIconButton } from '@chakra-ui/vue';
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
    CIconButton
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
      commands: [{}]
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
  methods: {
    showToast(title, description) {
      this.$toast({
        title,
        description,
        status: 'info',
        duration: 10000,
        isClosable: true,
        position: 'bottom-right',
        variant: 'solid'
      });
    },
    async loadCommands() {
      axios
        .get('http://localhost:3000/u/oetziofficial/cs')
        .then(cs => (this.commands = cs.data))
        .catch(e => console.error(e));
    }
  }
};
</script>
