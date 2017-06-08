<template>
  <div class="comments">
    <div class="comments-wrapper">
      <template v-for="c in aComments">
        <comment :comment-data="c"></comment>
      </template>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Comment from './comments/Comment.vue'
  export default {
    components: {
      Comment
    },
    created () {
      axios.get('https://api.box.es/api/users/47776/items/278878/comments.json?page=1').then(function (response) {
        let aComments = response.data.comments
        this.aComments = aComments.reverse()
      }.bind(this)).catch(function (error) {
        console.log(error)
      })
    },
    data () {
      return {
        aComments: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .comments-wrapper {
    border-top: 1px solid #e3e3e3;
    max-height: 227px;
    overflow-y: scroll;
    padding: 10px 10px 0 15px
  }
</style>
