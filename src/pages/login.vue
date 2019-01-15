<template>
    <div>
    <div><text class="welcome">login</text></div>
    <div><text @click="jump('/login')" class="welcome">账号登录</text></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            firstOpen:false
        }
    },
    methods:{
        jump (src) {
            this.$router.push(src);
        },
        JumpNative(){
            //错误的方式
            var params = {'url':'/websocket','animated':'true'}
            navigator.push(params, function(e) {
                console.log('i am the callback.')
            });
        }
    }
}
</script>

<style scoped>

</style>
