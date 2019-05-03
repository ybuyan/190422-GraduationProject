<template>
    <div class="hello">
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa"  class="title" title="我的游戏" text-color="rgba(0, 0, 0, .54)">
            
            <mu-menu slot="left">
                <mu-button icon flat>
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                <mu-list slot="content">
                    <mu-list-item button @click="signout">
                        <mu-list-item-content>
                        <mu-list-item-title>登出</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    
                </mu-list>
            </mu-menu>    

            <mu-menu slot="right">
                <mu-button icon flat>
                    <mu-icon value="more_vert"></mu-icon>
                </mu-button>
            </mu-menu>              
        </mu-appbar>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'hello',
        data() {
            return {
                // theme: 'teal',
                // themes: {
                //     light,
                //     carbon,
                //     teal
                // },
                open: false,
                docked: true
            }
        },
        methods: {
            // changeTheme(theme) {
            //     this.theme = theme;
            //     console.log(this.theme)
            //     const styleEl = this.getThemeStyle()
            //     styleEl.innerHTML = this.themes[theme] || ''
            // },
            // getThemeStyle() {
            //     const themeId = 'muse-theme'
            //     let styleEl = document.getElementById(themeId)
            //     // console.log(styleEl)
            //     if (styleEl) return styleEl
            //     styleEl = document.createElement('style')
            //     styleEl.id = themeId
            //     document.body.appendChild(styleEl)
            //     // console.log(styleEl)
            //     return styleEl
            // },
            signout() {
                //console.log(localStorage)
                localStorage.removeItem("Flag");
                this.$router.push("/home/mine/login")
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    text-align: center;
}
</style>
