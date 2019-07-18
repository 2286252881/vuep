<template>
    <el-container style="height: 95%; border: 1px solid #eee">
        <el-aside width="menu.menuLength" style="background-color: rgb(238, 241, 246)">
            <el-menu
                    class="el-menu-vertical-demo"
                    :router="true"
                    :default-active="$route.path"
                    :active="$route.path"
                    :default-openeds="['/sys']"
                    :unique-opened="true"
                    :collapse="menu.isCollapse">
                <el-menu-item index="/index">
                    <i class="el-icon-menu"></i>
                    <span slot="title">主页</span>
                </el-menu-item>
                <el-submenu index="/sys">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">系统管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/userInfo">用户管理</el-menu-item>
                        <el-menu-item index="/rolesInfo">角色管理</el-menu-item>
                        <el-menu-item index="/permsInfo">权限管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="text-align: right;font-size: 12px">
                <span style="margin-right: 15px">{{user.username}}</span>
                <el-dropdown>
                    <i class="el-icon-setting"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <a href="javascript:void(0);" @click="logout()" style="text-decoration: none">
                            <el-dropdown-item>退出</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "ManagerCenter",
        props: {
            checkLogin: Function
        },
        data() {
            return {
                fullWidth: document.documentElement.clientWidth,
                menu: {
                    isCollapse: false,
                    menuLength: '200px',
                    activePath: "",
                },
                user: {
                    username: "差不多先生."
                }
            }
        },
        mounted() {
            this.handleDeviceSize()
            const that = this;
            window.onresize = () => {
                return (() => {
                    that.fullWidth = document.documentElement.clientWidth
                })()
            }
        },
        watch: {
            fullWidth(val) {
                if (!this.timer) {
                    this.fullWidth = val;
                    this.timer = true
                    this.handleDeviceSize()
                    let that = this
                    setTimeout(function () {
                        // 打印fullWidth变化的值
                        //console.log(that.fullWidth)
                        that.timer = false
                    }, 1000)
                }
            }
        },
        methods: {
            handleDeviceSize() {
                if (this.fullWidth >= 992) {
                    this.menu.isCollapse = false
                    this.menu.menuLength = '200px'
                } else {
                    this.menu.isCollapse = true
                    this.menu.menuLength = '56px'
                }
            },
            logout() {
                this.checkLogin(false)
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
        min-height: 400px;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>