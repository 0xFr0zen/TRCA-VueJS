<template>
  <CBox w="100%" bg="indigo.600">
    <CFlex w="100%" pt="2" pb="2">
      <CHeading size="md" color="white" align="flex-start" m="auto" ml="0px" pt="1" pl="3" mb="2" v-if="!search">{{
        this.$props.title
      }}</CHeading>
      <CInput
        v-if="search"
        ref="searchbar"
        type="phone"
        :placeholder="'Search ' + this.$props.title"
        color="white"
        variant="filled"
        @keyup="checkESC"
        focusBorderColor="transparent"
      />

      <CFlex p="2" flex-direction="row" v-if="this.loading">
        <CSpinner align="center" color="indigo.100" thickness="1px" size="sm" />
      </CFlex>
      <CBox
        cursor="pointer"
        @click="toggleSearch"
        v-if="!this.loading"
        class="material-icons"
        color="white"
        align="flex-end"
        p="2"
        >{{ !search ? 'search' : 'close' }}</CBox
      >
    </CFlex>
    <CBox>
      <CPseudoBox
        class="material-icons"
        color="white"
        v-if="error"
        p="2"
        @click="this.load"
        cursor="pointer"
        w="100%"
        textAlign="center"
        :_hover="{ color: 'white.200' }"
        :_active="{ bg: 'white.300' }"
        >warning</CPseudoBox
      >
      <CStack spacing="0" v-if="this.selectedtwitchmodules && !loading && !error">
        <CPseudoBox
          bg="indigo.300"
          :_hover="{ bg: 'indigo.200' }"
          :_active="{ bg: 'indigo.400' }"
          v-for="stm in this.selectedtwitchmodules"
          v-bind:key="stm.id"
          p="4"
          border="1px solid rgba(255, 255, 255, 0.1)"
          cursor="pointer"
        >
          <CText color="white" textTransform="uppercase">{{ stm.name }}</CText>
        </CPseudoBox>
      </CStack>
      <CPseudoBox
        p="2"
        cursor="pointer"
        color="white"
        bg="indigo.300"
        :_hover="{ bg: 'indigo.200' }"
        :_active="{ bg: 'indigo.400' }"
        @click="this.load"
        v-if="!this.loading && !error"
      >
        <CText align="center">
          Reload
        </CText>
      </CPseudoBox>
    </CBox>
  </CBox>
</template>

<script>
import { CBox, CFlex, CHeading, CStack, CText, CInput, CInputGroup, CInputLeftElement } from '@chakra-ui/vue';

export default {
  name: 'TwitchMod',
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
  props: {
    mod: '',
    title: ''
  },
  data() {
    return { search: false, loading: true, selectedtwitchmodules: undefined, twitchmodules: undefined, error: false };
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
    this.load();
  },
  methods: {
    sleep: async function(time) {
      return new Promise(resolve => {
        setTimeout(resolve, time);
      });
    },
    toggleSearch: function() {
      this.search = !this.search;

      this.$nextTick(() => {
        if (this.search) {
          this.$refs.searchbar.$el.focus();
        }
      });
    },
    async load() {
      this.loading = true;
      let mod = this.$props.mod;
      await this.sleep(2000);
      this.$axios
        .$get(`/api/u/oetziofficial/${mod}`, { progress: false })
        .then(rs => {
          this.twitchmodules = rs;
          this.selectedtwitchmodules = this.twitchmodules;
          this.loading = false;
        })
        .catch(e => {
          this.error = e;
        });
    },
    getTwitchModule(name) {
      if (typeof this.twitchmodules !== 'undefined' && this.twitchmodules.length > 0)
        this.selectedtwitchmodules = this.twitchmodules.filter(tm => tm.name.match(name));
    },
    checkESC: function(e) {
      if (e.keyCode === 27) {
        this.search = false;
      }
    }
  }
};
</script>

<style></style>
