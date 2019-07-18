<template>
    <div id="app">
        <Login v-if="isLogin==false" :checkLogin="checkLogin"/>
        <ManagerCenter v-if="isLogin==true" :checkLogin="checkLogin"/>
    </div>
</template>

<script>
    import Login from './components/Login'
    import ManagerCenter from './components/ManagerCenter'

    export default {
        name: 'app',
        components: {
            Login,
            ManagerCenter
        },
        data() {
            return {
                isLogin: true
            }
        },
        methods: {
            checkLogin(flag) {
                this.isLogin = flag
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
