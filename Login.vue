<template>
    <el-row>
        <el-col :span="8">&nbsp;</el-col>
        <el-col :span="8">
            <el-container>
                <el-header>登录</el-header>
            </el-container>
            <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
                <el-form-item label="登录账号:" prop="loginName">
                    <el-input type="input" v-model="loginForm.loginName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="8">&nbsp;</el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Login",
        props: {
            checkLogin: Function
        },
        data() {
            return {
                loginForm: {
                    loginName: '',
                    password: "",
                },
                rules: {
                    loginName: [
                        {
                            validator: (rule, value, callback) => {
                                if (value === '') {
                                    callback(new Error('请输入用户名'));
                                } else {
                                    callback()
                                }
                            }, trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            validator: (rule, value, callback) => {
                                if (value === '') {
                                    callback(new Error('请输入密码'));
                                } else {
                                    callback()
                                }
                            }, trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.checkLogin(true)
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>