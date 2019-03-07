export default {
  created() {
    this.$store.dispatch('robots/getRobotParts');
  },

  computed: {
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
