<template>
  <CBox d="flex" w="100vw" h="100vh" p="2" v-if="login">
    <CFlex w="100vw" h="80vh" flex-dir="column" p="2" align="center">
      <CHeading textAlign="center" pb="6" color="indigo.200">Twitch Redeem Command Alerts</CHeading>
      <CGrid
        w="80vw"
        h="auto"
        bg="gray.200"
        borderRadius="md"
        overflowX="hidden"
        template-columns="repeat(3, 1fr)"
        column="3"
        autoFlow="column dense"
        gap="0"
        boxShadow="md"
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
    <CModal :isOpen="isModalOpen" :onClose="modalClose" :block-scroll-on-mount="blockScrollOnMount" :isCentered="true">
      <CModalContent ref="content">
        <CModalHeader>Modal Title</CModalHeader>
        <CModalCloseButton />
        <CModalBody>
          You can not scroll the content behind the modal
        </CModalBody>
        <CModalFooter>
          <CButton variant-color="blue" mr="3">
            Close
          </CButton>
          <CButton @click="modalClose" variant-color="red">Cancel</CButton>
        </CModalFooter>
      </CModalContent>
      <CModalOverlay />
    </CModal>
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
      login: true,
      isModalOpen: false,
      blockScrollOnMount: false
    };
  },
  events: {
    openModal: function(data) {
      console.log('loool');
      this.modalOpen();
    },
    closeModal: function(data) {
      this.modalClose();
    }
  },
  methods: {
    modalOpen() {
      this.isOpen = true;
    },
    modalClose() {
      this.isOpen = false;
    }
  }
};
</script>

<style></style>
