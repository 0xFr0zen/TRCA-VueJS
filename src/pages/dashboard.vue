<template>
  <CBox d="flex" w="100vw" h="100vh" v-if="login" bg="background">
    <CFlex w="100vw" h="100vh" flex-dir="column" align="center">
      <CFlex w="100vw" h="100vh" overflowX="hidden" gap="0">
        <CBox w="15rem" bg="sidebar" borderRight="1px solid rgba(255,255,255,0.1)">
          <CBox d="flex" flex-dir="column">
            <TwitchMod mod="cs" title="Commands" @openModal="modalOpen('Command', 'cs')" />
            <TwitchMod mod="rs" title="Redeems" @openModal="modalOpen('Redeems', 'rs')" />
          </CBox>
        </CBox>
        <CBox w="calc(100% - 35rem)" bg="transparent" align="center">
          <CBox d="flex" flex-dir="column"> hi</CBox>
        </CBox>
        <CBox w="20rem" bg="sidebar" direction="flex-end" borderLeft="1px solid rgba(255,255,255,0.1)">
          <CBox d="flex" flex-dir="column"> </CBox>
        </CBox>
      </CFlex>
    </CFlex>
    <CModal :isOpen="isModalOpen" :onClose="modalClose" :block-scroll-on-mount="true" :isCentered="true">
      <CModalContent ref="content">
        <CModalHeader>New {{ add_new_type_title }}</CModalHeader>
        <CModalCloseButton />
        <CModalBody>
          You can not scroll the content behind the modal
        </CModalBody>
        <CModalFooter>
          <CButton @click="addNewMod" variant-color="green" mr="3">
            Save
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
      add_new_type: undefined,
      add_new_type_title: ''
    };
  },
  methods: {
    modalOpen(title, krz) {
      this.add_new_type_title = title;
      this.add_new_type = krz;
      this.isModalOpen = true;
    },
    modalClose(type) {
      this.add_new_type = undefined;
      this.isModalOpen = false;
    },
    addNewMod() {
      let t = this.add_new_type;
      this.$axios({
        method: 'post',
        url: `/api/u/username/${t[0]}`,
        headers: {},
        data: {}
      })
        .then(rs => {
          if (rs.data.errors) {
            this.$toast({
              title: rs.data.errors[0].message,
              description: rs.data.errors[0].field,
              status: 'error',
              duration: 10000,
              position: 'bottom-right'
            });
            console.error(rs.data.errors);
          } else {
            console.log(rs);
          }
        })
        .catch(e => {
          console.log(e);
        });
      this.modalClose();
    }
  }
};
</script>

<style></style>
