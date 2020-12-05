<template>
    <div class="borders">
        <div id="nav" >
            <router-link to="/" >Home</router-link>
            <router-link id="abt" to="/about">About</router-link>
            <router-link v-if="!isAuth" to="/login">Login</router-link>
            <Btn @press="logout" v-else >Logout</Btn>
        </div>
    </div>
</template>

<script>

import Btn from './Btn'

export default {
    computed:{
        isAuth(){
            return this.$store.state.auth
        }
    },
    components: {Btn},
    methods:{
        logout(){
            this.$store.dispatch('setAuth',false);
            this.$router.replace({ name:'Home' })
        }
    }
}
</script>

<style scoped>
    #nav{
        height: 100%;
        /* background: indianred; */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    a{
        margin: 2rem 0;
    }
    a#abt.router-link-active{
        color: #42b983;
    }
    .borders{
        height: 80%;
        border-right: 1px solid #00000020;
    }
</style>