<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading textAlign="center" mb="4">Twitch Redeem Command Alerts</CHeading>
      <CFlex justify="center" direction="column" align="center">
        
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import {
  CBox,
  CFlex,
  CHeading
} from "@chakra-ui/vue";

export default {
  name: "App",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    CBox,
    CFlex,
    CHeading
  },
  data() {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: "gray.700",
          color: "whiteAlpha.900"
        },
        light: {
          bg: "white",
          color: "gray.900"
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
  methods: {
    showToast() {
      this.$toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 10000,
        isClosable: true
      });
    }
  }
};
</script>