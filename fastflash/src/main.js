import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount('#app');

// import Vue from "vue";
// import App from "./App.vue";

// import ApolloClient from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import VueApollo from "vue-apollo";


// Vue.use(VueApollo);


// const client = new ApolloClient({
//     link: 'http://localhost:4000/graphql',
//     cache: new InMemoryCache({
//         addTypename: true
//     })
// });

// const apolloProvider = new VueApollo({
//     defaultClient: client,
// })

// new Vue({
//     apolloProvider,
//     render: h => h(App)
// }).$mount("#app");

