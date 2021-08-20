<template>
<div>
  <Banner />
    <Row title="Trending" :fetchUrl=requests.fetchTrending :isLarge=true />
      <Row title="Top Rated" :fetchUrl=requests.fetchTopRated />
      <Row
        title="Netflix Originals"
        :fetchUrl=requests.fetchNetflixOriginals
      />
      <Row title="Action Movies" :fetchUrl=requests.fetchActionMovies />
      <Row title="Comedy Movies" :fetchUrl=requests.fetchComedyMovies />
      <Row title="Horror Movies" :fetchUrl=requests.fetchHorrorMovies />
      <Row title="Documentaries" :fetchUrl=requests.fetchDocumentaries />
      </div>
</template>

<script>
import Row from './components/Row.vue'
import Banner from './components/Banner.vue'
// import Nav from './components/Row.vue'

import requests from './api/requests' 
export default {
  name: 'App',
  components: {
    Row,Banner
  },
  data () {
    return {requests:requests};
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
  
}
body{
  margin:0;
  background-color:#111;
}
</style>
