<template>
  <div>
    <TheHeader />
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal :courseGoals="courseGoal">
      <template #iterationItem="slotProps">
        <p>{{ slotProps.item }} -- {{ slotProps}} </p>
      </template>
    </course-goal>
    <section>
      <button @click="setActiveTab('active-goals')">Active Goals</button>
      <button @click="setActiveTab('manage-goals')">Manage Goals</button>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
      <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
      <manage-goals v-else-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    </section>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal,
    ActiveGoals,
    ManageGoals
  },
  methods: {
    setActiveTab(activeTab) {
      this.selectedComponent = activeTab;
    }
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      courseGoal: [
        'Vue.js','Learn Vue.js',
      ],
      selectedComponent: 'active-goals',
      
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>