<template>
    <div id="feed-inp">
    <div class="inp">
        <textarea v-model="input" rows="2" placeholder="Write Something..." ></textarea>
    </div>
    <div class="btn">
        <Btn @press="post" >Post</Btn>
    </div>
    </div>
</template>

<style scoped>

</style>

<script>

import Btn from '@/components/Btn.vue'

export default {
    data: () => ({
        input: ''
    }),
    components:{
        Btn
    },
    methods:{
        post(){
            if(this.input){
                this.$emit('post',this.input)
                this.input = ''
            }
        }
    }
}
</script>

<style scoped>
    textarea{
        width: 90%;
        margin: auto;
        padding: 0.5rem;
        font-family: inherit;
        border-radius: 6px;
        border: 1px solid gray;
    }
    textarea:focus{
        outline-color: lightseagreen;
    }

    .btn{
        width: 90%;
        margin:auto;
        text-align: right;
    }
</style>