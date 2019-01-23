Vue.component('idea-input', {
    template: 
        '<div class="ui fluid input">' +
            '<input type="text" v-model="input">' +
            '<button class="ui button" v-on:click="add">Add Idea</button>' +
        '</div>', 
    data: function() {
        return {
            input: ''
        }        
    }, 
    methods: {
        add(){
            this.$root.add(this.input);
        }
    }    
});

Vue.component('idea', {
    props: ['content'],
    template:
        '<div class="ui message">' +
            '<div class="header">{{ content }}</div>' +
        '</div>',      
});

var app = new Vue({
    el: '#app', 
    data: function(){
        return{
            ideas: []
        }
    }, 
    methods:{
        add(input){
            var length = this.ideas.length;
            this.ideas.push({id: length, content: input});
        }
    }    
})

