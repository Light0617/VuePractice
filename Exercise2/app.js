new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function() {
            alert('Alert!');
        },
        
        changeValue: function(event) {
            this.value = event.target.value;
        }
    }
});