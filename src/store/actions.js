// this=={}
import axios from 'axios';
import {
  VIEW_NAV,
  VIEW_FOOT,
  VIEW_LOADING,
  UPDATE_HOME,
  UPDATE_FOLLOW,
  UPDATE_COLUMN,
  UPDATE_DETAIL,
  UPDATE_USER,
  UPDATE_BANNER
} from './types'

export default {

  [VIEW_NAV] : ({state,commit},payload) => commit(VIEW_NAV,payload),

  [VIEW_FOOT] : ({state,commit},payload) => commit(VIEW_FOOT,payload),

  [VIEW_LOADING] : ({state,commit},payload) => commit(VIEW_LOADING,payload),

  [UPDATE_HOME] : async ({state,commit},payload) => {
    let res = await axios({url:'/api/home',params:{_page:1,_limit:10}});
    commit(UPDATE_HOME,res.data.data)
  },

  /* [CLEAR_HOME] : async ({state,commit},payload) => {
    commit(UPDATE_HOME,[])
  }, */

  [UPDATE_FOLLOW] : async ({state,commit},payload) => {
    let res = await axios({url:'/api/follow',params:{_page:1,_limit:8}});
    commit(UPDATE_FOLLOW,res.data.data)
  },
  
  [UPDATE_COLUMN] : async ({state,commit},payload) => {
    let res = await axios({url:'/api/column',params:{_page:1,_limit:6}});
    commit(UPDATE_COLUMN,res.data.data)
  },

  [UPDATE_DETAIL] : async ({state,commit},{dataName,id}) => {
    let res = await axios({url:`/api/${dataName}/${id}`});
    commit(UPDATE_DETAIL,res.data.data)
  },

  [UPDATE_BANNER] : async ({state,commit},payload) => {
    let res = await axios({url:`/api/banner`,params:{_limit:3}});
    commit(UPDATE_BANNER,res.data.data)
  }

  //this == export default 的 {}
  
}