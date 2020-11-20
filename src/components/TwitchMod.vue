<template>
  <CBox w="100%">
    <CFlex w="100%" pl="3" pr="3" pt="2" pb="2">
      <CHeading size="md" color="white" align="flex-start" m="auto" ml="0px" pt="1" mb="2" v-if="!search">{{
        this.$props.title
      }}</CHeading>
      <CInput
        v-if="search"
        ref="searchbar"
        type="phone"
        :placeholder="'Search ' + this.$props.title"
        color="white"
        variant="unstyled"
        pl="2"
        pr="0"
        @keyup="checkESC"
        focusBorderColor="transparent"
      />
      <CPseudoBox
        bg="transparent"
        p="6px"
        w="2.1rem"
        h="2.1rem"
        textAlign="center"
        borderRadius="md"
        cursor="pointer"
        color="white"
      >
        <CSpinner align="center" v-if="this.loading" thickness="1px" size="sm" />
      </CPseudoBox>
      <CFlex v-if="!this.loading && !error">
        <CPseudoBox
          bg="darken"
          :_hover="{ bg: 'lighten' }"
          p="6px"
          w="2rem"
          h="2rem"
          textAlign="center"
          borderRadius="md"
          cursor="pointer"
          color="white"
          @click="toggleSearch"
        >
          <CBox class="material-icons material-icons-round" fontSize="1.3em">{{ tmmode }}</CBox>
        </CPseudoBox>
        <CPseudoBox
          bg="darken"
          :_hover="{ bg: 'lighten' }"
          p="6px"
          w="2rem"
          h="2rem"
          textAlign="center"
          borderRadius="md"
          cursor="pointer"
          color="white"
          ml="2"
          @click="load"
        >
          <CBox class="material-icons material-icons-round" fontSize="1.3em">autorenew</CBox>
        </CPseudoBox>
      </CFlex>
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
      <CBox minHeight="50px">
        <CPseudoBox bg="darken" p="4" v-if="this.selectedtwitchmodules && this.selectedtwitchmodules.length === 0">
          <CText color="white">No Command</CText>
        </CPseudoBox>
        <CStack
          spacing="2"
          p="3"
          v-if="this.selectedtwitchmodules && this.selectedtwitchmodules.length > 0 && !loading && !error"
        >
          <CPseudoBox
            bg="darken"
            :_hover="{ bg: 'lighten' }"
            v-for="stm in this.selectedtwitchmodules"
            v-bind:key="stm.id"
            p="2"
            borderRadius="md"
            @click="chooseMod(stm)"
            cursor="pointer"
          >
            <CText color="white">{{ $props.mod === 'cs' ? '!' : '' }}{{ stm.name }}</CText>
          </CPseudoBox>
        </CStack>
        <CPseudoBox
          m="2"
          p="2"
          borderRadius="md"
          bg="trca.700"
          color="background"
          cursor="pointer"
          :_hover="{ bg: 'trca.750' }"
          :_active="{ bg: 'trca.775' }"
          @click="openParentModal"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="bold"
        >
          new command
        </CPseudoBox>
      </CBox>
    </CBox>
  </CBox>
</template>

<script>
import {
  CBox,
  CFlex,
  CHeading,
  CStack,
  CText,
  CInput,
  CInputGroup,
  CInputLeftElement,
  CLink,
  CPseudoBox
} from '@chakra-ui/vue';

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
    CInputLeftElement,
    CPseudoBox
  },
  props: {
    mod: '',
    title: ''
  },
  data() {
    return {
      search: false,
      loading: true,
      selectedtwitchmodules: undefined,
      twitchmodules: undefined,
      error: false,
      tmmode: 'search'
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
    this.load();
  },
  methods: {
    getBackground(name) {
      return 'darken';
    },
    sleep: async function(time) {
      return new Promise(resolve => {
        setTimeout(resolve, time);
      });
    },
    toggleSearch: function() {
      this.tmmode = this.search ? 'search' : 'close';
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
          this.tmmode = 'warning';
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
        this.tmmode = 'search';
      }
    },
    chooseMod: function(mod) {
      console.log(mod);
    },
    openParentModal: function() {
      this.$emit('openModal', this.$props.title);
    }
  }
};
</script>

<style></style>
