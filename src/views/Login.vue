<template>
    <div>
        <h3>Login</h3>
        <Btn @press="loginM" >Login</Btn>
        <h4> {{ isAuth }} </h4>
    </div>
</template>

<script>

import Btn from '@/components/Btn.vue'
import store from '@/storeX.js'

export default {
    methods: {
        loginM(){
            store.isAuth.value = true;
            this.$router.replace({ name:'Home' })
        }
    },
    computed:{
        isAuth(){
            return store.isAuth.value
        }
    },
    components: {
        Btn
    }
}

</script>