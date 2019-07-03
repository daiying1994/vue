<template>
    <div class="home">
        <Swiper></Swiper>
        <List :list="list" :dataName="'home'"></List>
    </div>
</template>
<script>
import Swiper from '../components/Swiper'
import List from '../components/List'
export default {
    data(){
        return {list:[]}
    },
   
    components:{
        List,Swiper
    },
    mounted(){
        axios({
            url:'/api/home',
            params:{_page:2,_limit:8}
        }).then(
            res=>this.list=res.data.data
        )
    }
}
</script>
