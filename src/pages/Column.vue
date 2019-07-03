<template>
    <div class="column">
        <List :list="list" :dataName="column"></List>
    </div>
</template>
<script>
import List from '../components/List'
export default {
    data(){
        return {list:[]}
    },
    components:{
        List
    },
    mounted(){
        axios({
            url:'/api/column',
            params:{_page:1,_limit:10}
        }).then(
            res=>this.list = res.data.data
        )
    }
        

    
}
</script>
<style scoped>
.column{
  padding-top:.7rem;
}
</style>

