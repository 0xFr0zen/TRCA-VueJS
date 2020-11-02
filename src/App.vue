<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" d="flex" w="100vw" h="100vh" p="2" bg="gray.100">
      <CFlex w="100vw" h="auto" flex-dir="column" p="2" align="center">
        <CHeading textAlign="center" pb="2" color="indigo.500">Twitch Redeem Command Alerts</CHeading>
        <CFlex justify="center" direction="column" p="4" w="50vw" h="auto" bg="gray.200" borderRadius="md">
          <CBox d="flex" flex-dir="column">
            <Commands />
            <Redeems />
          </CBox>
        </CFlex>
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import { CBox, CFlex, CHeading } from '@chakra-ui/vue';
import Commands from './components/Commands';
import Redeems from './components/Redeems';
import axios from 'axios';
export default {
  name: 'App',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    Commands,
    Redeems,
    CBox,
    CFlex,
    CHeading
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
      }
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
    this.loadRedeems();
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
    }
  }
};
</script>
