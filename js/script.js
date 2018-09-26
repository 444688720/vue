new Vue({
	el:"#app",
	data:{
		names:""	
	},
	created:function(){
		this.$http.get("json/data.json").then(function(res){
			console.log(res.body);
			this.names = res.body;
		},function(){
			console.log("请求失败处理")
		})
	},
})