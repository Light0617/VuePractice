<template>
  <div>
    <label for="firstName">First Name</label>
      <input type="text" class="form-control" :value='firstName' @input='nameChanged(true, $event)'>
    <label for="lastName">Last Name</label>
      <input type="text" class="form-control" :value='lastName' @input='nameChanged(false, $event)'>
  </div>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      let name = {};
      if (isFirst) {
        name.firstName = event.target.value;
        name.lastName = this.value.lastName;
      } else {
        name.firstName = this.value.firstName;
        name.lastName = event.target.value;
      }
      this.$emit("input", name);
    }
  },
  computed: {
    firstName() {
      return this.value.firstName;
    },
    lastName() {
      return this.value.lastName;
    }
  }
};
</script>
