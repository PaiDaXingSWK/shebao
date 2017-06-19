<template>
  <div>
    <div>

      <v-peopleList></v-peopleList>

    </div>
    <div style="margin-left: 500px;width: 1400px">
      <fullcalendar :events="events" locale="en"></fullcalendar>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import peopleList from '../peopleList.vue'
  import fullcalendar from 'vue-fullcalendar'
  export default{
    data(){
      return {
        events: [
          {
            title: event1,
            start: '2017-5-10',
            YOUR_DATA: {}
          }, {
            title: event2,
            start: '2017-5-11',
            YOUR_DATA: {}
          }
        ]
      }
    },
    components: {'v-peopleList': peopleList, 'fullcalendar': fullcalendar}
  }
</script>
<style scoped>
  body {
  }
</style>
