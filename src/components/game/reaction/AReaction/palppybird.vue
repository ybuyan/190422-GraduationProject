<template>
<div class="main">
	<mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
        <mu-button icon slot="left" to="/reaction">
            <mu-icon value="chevron_left" ></mu-icon>
        </mu-button>
        Palppy Bird
    </mu-appbar>
    
	<iframe src="./static/falppybird/palppybird.html" 
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
                
            }
        },
    }
 </script>

<style scoped>
.main{
	height: 36rem;
}
</style>
