<template>
    <button v-if="preventDel" @click.stop="theEmit" > <slot></slot> </button>
    <button v-else @click="theEmit" > <slot></slot> </button>
</template>

<script>
export default {
    methods:{
        theEmit(){
            this.$emit('press')
        }
    },
    props:['preventDel'],
    created(){
        // console.log('preventDel ',this.preventDel)
    }
}
</script>

<style scoped>
    button{
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        background: lightseagreen;
        color: whitesmoke;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        box-shadow: 0px 2px 8px 0px #00000030 ;
    }
    button:hover{
        filter: brightness(0.9);
    }

</style>