<template>
  <div class="about">
    <h1>Albums</h1>
  <!-- <ul>
    <li v-for="album in photos">{{album.id}}</li>
  </ul> -->
<div class="card-container">
  <div class="card" v-for="album in photos" :key="album.id">
    <h4 class="card-title">{{album.title}}</h4>
    <img :src="album.thumbnailUrl" alt=""/>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
data: () => ({
  photos: [],
  errors: []
}),
created() {
  axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(response => {
    this.photos = response.data
  })
  .catch(e => {
    this.errors.push(e)
  })
}

};
</script>

<style lang="scss">
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .card {
    margin: 1rem;
  }
  h4 {
    padding-top: 1rem;
  }
  img {
    margin-bottom: 1rem;
  }
}
</style>
