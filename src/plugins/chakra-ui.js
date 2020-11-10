import Vue from 'vue';
import Chakra from '@chakra-ui/vue';
const config = require('../../config.json');
Vue.prototype.CLIENT_ID = config['client-id'];
Vue.prototype.SERVER_BACKEND = config['server-backend'];
Vue.use(Chakra);
Vue.config.productionTip = true;
