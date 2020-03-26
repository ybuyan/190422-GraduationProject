<template>
    <div class="main">
        
        <iframe src="./static/zqdzjs/index.html" 
                width="100%"
                height="100%" 
                frameborder="0" 
                scrolling="no"
                >
        </iframe>
    </div>
</template>

<script>
export default {
    data() {
		return {
			score:"",
			gamename:"足球大战僵尸"
		}
	},
	watch:{  
		score : function(newValue, oldValue){  
			// this.updatedScore();
			console.log(newValue)  
			let phone = localStorage.getItem("phone");
			let score = newValue
			let apiUrl = this.$store.state.apiUrl+"game/updateReaction";
			axios({
				method:"post",
				url:apiUrl,
				data:{
					phoneNumber: phone,
					gamename: this.gamename,
					highscore: score
				}
			}).then(res => {
				console.log(res.data)
				if(res.data == false){
					this.$Message.info("继续加油，去超越你自己吧！！")
				}else{
					this.$Message.info("Congratulation，已超越你自己！！")
				}
			})
		}
	},  
	methods:{
		 receiveMessageFromIframePage (event) {
			//console.log('receiveMessageFromIframePage', event.data)
			this.score = event.data/1000;
			console.log(this.score)
		}
	},
	created() {
		window.addEventListener('message',this.receiveMessageFromIframePage,false);
	},
	mounted() {
		// // 这里就拿到了iframe的对象
		// console.log(this.$refs.iframe)
		// // 这里就拿到了iframe的window对象
		// console.log(this.$refs.iframe.contentWindow)
	}
}
</script>

<style scoped>
.main{
	height: 100%;
}
</style>
