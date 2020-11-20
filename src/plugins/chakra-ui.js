import Vue from 'vue';
import Chakra from '@chakra-ui/vue';
import trcaTheme from './trcaTheme.js';
Vue.use(Chakra, { extendTheme: trcaTheme });
Vue.config.productionTip = true;
