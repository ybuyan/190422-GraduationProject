<template>
 <div class="main">
	<mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
        <mu-button icon slot="left" to="/logic">
            <mu-icon value="chevron_left" ></mu-icon>
        </mu-button>
        Palppy Bird
    </mu-appbar>
    
	<iframe src="./static/qingwa/index.html" 
			width="100%"
			height="100%" 
			frameborder="0" 
			scrolling="no"
			name="qingwa"
			id="qingwa"
			ref="iframe"
			>
	</iframe>
</div>   
</template>

<script>
export default {
    data() {
		return {
			playtime:""
		}
	},
	methods:{
		 receiveMessageFromIframePage (event) {
			//console.log('receiveMessageFromIframePage', event.data)
			this.playtime = event.data;
			console.log(this.playtime)
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
	height: 90.5%;
}
</style>
