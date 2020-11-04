import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// import { createApp } from "vue";
// import VueApollo from 'vue-apollo';
// import App from "./App.vue";

// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
//   cache: new InMemoryCache(),
// });

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// });

// const app = createApp(App);

// app.provider({ apolloProvider });
// app.mount('#app');