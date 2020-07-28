<template>
  <div>
    <div>{{ dataddd }}luckfine2{{ vueData }}</div>

    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    //text: 'luckfine'
  },
  computed: {
    ...mapState({
      vueData: (state) => state.data.dataList,
      dataddd: (state) => state.data.dataddd,
    }),
  },
  mounted() {
    this.$store.dispatch("data/getList");
  },
};
</script>
<style>
</style>