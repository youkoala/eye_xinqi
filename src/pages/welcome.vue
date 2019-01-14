<template>
    <div>
    <div><text class="welcome">welcome</text></div>
    <div><text @click="jump" class="welcome">JumpNative</text></div>
    </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
export default {
    data () {
        return {
            firstOpen:false
        }
    },
    methods:{
        jump () {
            this.$router.push('/websocket');
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
.welcome{font-size:28px;}
</style>
