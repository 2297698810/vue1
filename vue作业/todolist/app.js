let list = [
  {
    title:"我要这周把vue学会",
    isCompleted:false
  },
  {
    title:"下半年跳槽!!!!!!!!!!!",
    isCompleted:true
  }
];
var app = new Vue({
  el:"#todolist",
  data:{
    // 添加文本框的数据
    addInp:"",
    listItems:[{title:"123",isCompleted:false,isRevamp:false}]
  },
  methods:{
    // 添加列表
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false,isRevamp:false});
      this.addInp = "";
    },
    // 删除列表
    del:function(index){
      this.listItems.splice(index,1);
    },
    // 修改列表
    revamp:function(index){
      this.listItems[index].isRevamp = true;
      // this.listItems[index].className ="editing";
      // alert(index)
    }
  }
})
