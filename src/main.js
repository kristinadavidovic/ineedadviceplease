import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// styling
import './scss/app.scss';

// import the Auth0 configuration
import env from './utils/env';

import { Auth0Plugin } from './auth';

Vue.use(Auth0Plugin, {
    domain: env('domain'),
    clientId: env('clientId'),
    onRedirectCallback: (appState) => {
        router.push(
            appState && appState.targetUri
                ? appState.targetUri
                : window.location.pathname
        );
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
