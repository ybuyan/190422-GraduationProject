<template>
<div class="main">
	<!-- <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
        <mu-button icon slot="left" to="/reaction">
            <mu-icon value="chevron_left" ></mu-icon>
        </mu-button>
        Palppy Bird
    </mu-appbar> -->
    
	<iframe src="./static/falppybird/index.html" 
			width="100%"
			height="100%" 
			frameborder="0" 
			scrolling="no"
            ref="iframe"
			>
	</iframe>

</div>
</template>

<script>

export default {
    data() {
		return {
			playtime:"",
			gamename:"坠落的小鸟"
		}
	},
	watch:{  
		playtime : function(newValue, oldValue){  
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
			this.playtime = event.data;
			//console.log(this.playtime)
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
