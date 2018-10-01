<template>
    <div class="container">
        <form v-if='!isSubmitted'>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <div class="form-group">
                      <appFullNameInput v-model='userData.fullName'>
                      </appFullNameInput>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model='userData.email'>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model='userData.password'>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="yes">
                                <input
                                        type="radio"
                                        id="yes"
                                        value="true"
                                        v-model='isStoreData'> Yes
                            </label>
                            <label for="no">
                                <input
                                        type="radio"
                                        id="no"
                                        value="false"
                                        v-model='isStoreData'> No
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary"
                                    @click.prevent='submitted'>Submit!
                            </button>
                        </div>
                    </div>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if='isSubmitted'>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName.firstName + ' ' + userData.fullName.lastName }} </p>
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Store in Database?: {{ isStoreData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullNameInput from "./FullNameInput.vue";

export default {
  components: {
    appFullNameInput: FullNameInput
  },
  data: function() {
    return {
      userData: {
        fullName: {
          firstName: "Max",
          lastName: "Yo"
        },
        email: "",
        password: ""
      },
      isStoreData: false,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
