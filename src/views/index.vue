<template>
    <div class="mainWrap">
        <div class="top">
        </div>
        <div class="content">
            <div class="authorInfo">
                <el-select v-model="value" placeholder="Twitter">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="acceptContext">
                的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发
                的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发
                的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发
                的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发
                的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发 的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发的发大幅度发
            </div>
            <div class="keyInfo">
                <el-input v-model="valueInput" placeholder="URL keywords"></el-input>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                options: [{
                    value: '1',
                    label: 'Twitter'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
                value: '',
                valueInput: ''
            };
        },
        methods: {},
        created() {
            var json = {
                "Type": 1,
                "Data": {
                    "Author": "SEU_Crisis666",
                    "AuthorUrl": "https://twitter.com/SEU_Crisis666",
                    "TwitterContent": "https://t.co/Zufw171CQA\nhttps://t.co/MgqhPfgdEM",
                    "TwitterUrl": "https://twitter.com/SEU_Crisis666/status/1288107107363905538",
                    "Links": ["http://1341234234asdfasdf.com", "http://asdfasdf1.com"],
                    "TwitterTimestamp": "2020-07-28T21:40:40+08:00"
                },
                "MessageCreateTime": "2020-07-28T13:40:42.202955Z"
            }
        }
    };
</script>

<style lang="scss" scoped>
    .mainWrap {
        .top {
            width: 100%;
            height: 200px;
            background: url('../assets/image/logo.png') no-repeat center;
            background-size: 100%;
        }
        .content {
            width: 800px;
            margin: 0 auto;
            overflow: hidden;
            margin-top: 20px;
            background-color: #262e44;
            border: 1px solid #aaa;
            height: 450px;
            .acceptContext {
                padding: 20px;
                line-height: 20px;
                min-height: 150px;
                max-height: 280px;
                background-color: #262e44;
                border: 1px solid #1d1b31;
                color: #fff;
                margin: 0 20px;
                overflow: auto;
            }
             >>>.el-input__inner {
                background-color: #7c7b98;
                color: #fff;
                border: 1px solid #1d1b31;
            }
            .authorInfo {
                margin: 15px 0 10px 15px;
            }
            .keyInfo {
                margin: 15px 0 10px 15px;
                >>>.el-input__inner {
                    width: 500px;
                }
            }
        }
    }
</style>
