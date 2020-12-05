<template>
    <div>
        <h3>Login</h3>
        <Btn @press="loginM" >Login</Btn>
        <h4> {{ isAuth }} </h4>
    </div>
</template>

<script>

import Btn from '@/components/Btn.vue'

export default {
    methods: {
        loginM(){
            this.$store.dispatch('setAuth',true);
            this.$router.replace({ name:'Home' })
        }
    },
    computed:{
        isAuth(){
            return this.$store.state.auth
        }
    },
    components: {
        Btn
    }
}

</script>