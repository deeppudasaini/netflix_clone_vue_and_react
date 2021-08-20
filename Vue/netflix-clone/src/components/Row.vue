<template>
  <div class="row">
      <h2>{{title}}</h2>
      
      <div class="row_posters">
        <img v-for="movie in movies"
            :class="{row_poster:true, row_posterLarge:isLarge}"
            :key="movie.id"
            :src=" isLarge ? this.imageBaseUrl + movie.poster_path :this.imageBaseUrl +  movie.backdrop_path"
            :alt="movie.name"
          />
      </div>
    </div>
</template>

<script>
import axios from '../api/axios';
export default {
name:'Row',
props:{
    title:String,
    fetchUrl:String,
    isLarge:{ 
      type:Boolean,
      default:false
    }
},
data()
{
    return {
        movies:[],
        
        imageBaseUrl:"https://image.tmdb.org/t/p/original/"
    }
},
created()
{
  
  return axios.get(this.fetchUrl).then((response)=>{
    this.movies = response.data.results;
  });
}

}
</script>

<style scoped>
.row_posters {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
}
.row {
  margin-left: 20px;
  color: white;
}
.row_poster {
  object-fit: contain;
  width: 100%;
  max-height: 100px;
  margin-right: 10px;
  transition: 450ms;
}
.row_poster:hover {
  transform: scale(1.08);
}
.row_posters::-webkit-scrollbar {
  display: none;
}
.row_posterLarge {
  max-height: 250px;
}
.row_posterLarge:hover {
  transform: scale(1.09);
}


</style>