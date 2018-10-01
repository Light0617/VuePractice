<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <button @click='selectedComponent = "appQuote"'> Quote </button>
                <button @click='selectedComponent = "appAuthor"'> Author </button>
                <button @click='selectedComponent = "appNew"'> New </button>
                <hr>
                <keep-alive>
                     <component :is='selectedComponent'>
                        <p>Default In</p>
                    </component>
                </keep-alive>
                <!-- <appQuote>
                    <h1 slot='title'>{{ quoteTitle }} </h1>
                    <h2 slot='subtitle'> World!</h2>
                    <p> HIHI</p>
                </appQuote> -->
                <appColorApp></appColorApp>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    import ColorApp from './ColorApp.vue';

    export default {
        data: function(){
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
            appColorApp: ColorApp
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
