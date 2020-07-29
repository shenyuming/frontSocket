<template>
    <div class="loginWrap">
        <div class="login">
            <!-- <img class="vmlogo" src="@/assets/image/logo.png"> -->
            <div class="content-holder">
                <div class="user-head">
                    <div class="text-box">
                        <strong class="subtitle">Hypescript</strong>
                        <p class="subInfo">Login with Discord to continue.</p>
                    </div>
                </div>
                <a :href="loginIn" class="detail-holder">Login</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            loginIn: this.URLS.logIn
        };
    },
    methods: {},
    created() {}
};
</script>

<style lang="scss" scoped>

.loginWrap {
    margin: 0 auto;
    .login {
        text-align: center;
        .vmlogo {
            width: 150px;
            margin-top: 60px;
            margin-bottom: 40px;
        }
        .content-holder {
            border: 2px solid #282f42;
            border-radius: 6px;
            background-color: rgba(0, 0, 0, .3);
            width: 500px;
            margin: 0 auto;
            margin-top: 100px;
            .user-head {
                font-size: 13px;
                line-height: 16px;
                font-weight: 300;
                text-align: center;
                padding: 20px 20px 10px 20px;
                border-radius: 6px;
                color: #6b7182;
                background: -webkit-linear-gradient(top, #171a2b 0%, #20253b 100%);
                background: linear-gradient(to bottom, #171a2b 0%, #20253b 100%);
                .subtitle {
                    font-size: 21px;
                    line-height: 25px;
                    color: #fff;
                    margin: 0 0 10px;
                }
                .subInfo {
                    line-height: 35px;
                    padding: 10px 0;
                    color: #6b7182;
                }
            }
            .detail-holder {
                display: block;
                padding: 15px 30px;
                font-size: 26px;
                width: 400px;
                margin: 20px auto;
                background: #735af4;
                cursor: pointer;
                border-radius: 10px;
                color: #fff;
            }
        }
    }
}
</style>
