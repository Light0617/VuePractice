<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p> User name : {{ switchName() }} </p>
        <p> User age : {{ userAge }} </p>
        <button @click='resetName'> reset</button>
        <button @click='resetFn()'> reset</button>
    </div>
</template>

<script>
import { eventBus} from '../main';

export default {
    props: {
        //validate type
        //clone name to myName
        myName: {
            type: String,
            default: 'Max'
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName() {
            return this.myName.split("").reverse().join("");
        },
        resetName() {
            this.myName = 'Max';
            //without that, parent myName is Anna not Max
            //with that, parent myName will be Max
            this.$emit('nameWasReset', this.myName);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
