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
const week = [
      { day: "Sunday", tasks: [] },
      { day: "Monday", tasks: [] },
      { day: "Tuesday", tasks: [] },
      { day: "Wednesday", tasks: [] },
      { day: "Thursday", tasks: [] },
      { day: "Friday", tasks: [] },
      { day: "Saturday", tasks: [] },
];

export default {
  props: ["posts"],
  computed: {
    weeklyTasks() {
      const weeks = [...week]
      this.posts.forEach((post) => {
        let resultIndex = new Date(post.posted_on).getDay(), day = weeks[resultIndex]
        weeks[resultIndex] = {...day, tasks : [...day.tasks, post ] }
      });
      return weeks
    },
  },
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
