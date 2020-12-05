<template>
  <div class="weekly">
    <h3>Weekly</h3>
    <div class="week-tasks">
      <h3 v-for="day in weeklyTasks" :class="{fade: !day.tasks.length }" :key="day.day">
        {{ day.day }}<span v-if="day.tasks.length" > |  {{ day.tasks.length }} </span>
      </h3>
    </div>
  </div>
</template>


<script>

export default {
  computed: {
    weeklyTasks() {
      return this.$store.state.weekTasks
    },
  },
  created(){
    // this.$store.dispatch('initWeekTasks');
  }
};
</script>

<style scoped>
.weekly {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.week-tasks {
  flex: 1;
}
h3 {
  color: whitesmoke;
}
.week-tasks > .fade{
  opacity: 0.5;
}

</style>
