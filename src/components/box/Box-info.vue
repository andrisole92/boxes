<template>
  <div class="box-info" >
    <description :description-data="description"></description>
    <user-profile :user-data="user" :avatar = "userAvatar"></user-profile>
    <div class="desc">
      <p>{{description.description}}</p>
    </div>
    <comments></comments>

    <feedback v-bind:feedback-data="feedback"></feedback>
  </div>
</template>

<script>
  import axios from 'axios'
  import Comments from './box_info/Comments.vue'
  import Description from './box_info/Description.vue'
  import Feedback from './box_info/Feedback.vue'
  import UserProfile from './box_info/UserProfile.vue'

  export default {
    components: {
      Comments,
      Description,
      Feedback,
      UserProfile
    },
    created () {
      axios.get('https://api.box.es/api/users/47776/items/278878.json').then(function (response) {
        console.log(response.data)
        let oItem = response.data.item
        let oDescription = {}
        let oUser
        let oFeedback = {}

        oDescription.name = oItem.name
        oDescription.location_details = oItem.location_details
        oDescription.description = oItem.description
        oDescription.user = {}
        oUser = oItem.user
        this.user = oUser
        this.userAvatar = this.user.avatar.small_url
        this.description = oDescription

        oFeedback.likes_count = oItem.likes_count
        oFeedback.reposts_count = oItem.reposts_count
        oFeedback.wants_count = oItem.wants_count
        this.feedback = oFeedback
      }.bind(this)).catch(function (error) {
        console.log(error)
      })
    },
    data () {
      return {
        description: {description: ''},
        user: {},
        userAvatar: '',
        feedback: {likes_count: 0, reposts_count: 0, wants_count: 0}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .desc{
    line-height: 14px;
    text-align: left;
    color: #646464;
    margin-top: 12px;
    /*max-width: 342px;*/
    padding-left: 50px;
    position: relative;
    padding-right: 12px;
    font-family: "Whitney SSm A","Whitney SSm B", sans-serif;
    font-size: 11px;
  }
  .box-info{
    display: inline-block;
    width: 40%;
    position: absolute;
    right: 0;
    height: 100%;
  }
</style>
