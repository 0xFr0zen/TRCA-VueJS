import Vue from 'vue';
import Chakra from '@chakra-ui/vue';

Vue.prototype.CLIENT_ID = require('../../config.json')['client-id'];
Vue.use(Chakra);
Vue.config.productionTip = true;
