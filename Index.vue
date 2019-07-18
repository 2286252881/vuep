<template>
    <div class="block">
        <div class="radio">
            排序：
            <el-radio-group v-model="reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
            </el-radio-group>
        </div>
        <el-divider></el-divider>
        <el-timeline :reverse="reverse">
            <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    :timestamp="activity.timestamp">
                <a href="" style="text-decoration: none; color: blue">
                    {{activity.content}}...
                </a>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                reverse: false,
                activities: [{
                    content: '基于session共享',
                    timestamp: '2018-04-12 20:46',
                    size: 'large',
                    type: 'primary',
                    icon: 'el-icon-more'
                }, {
                    content: '支持https',
                    timestamp: '2018-04-06 20:46',
                    color: '#0bbd87'
                }, {
                    content: '增加用户角色',
                    timestamp: '2018-04-03 20:46',
                    size: 'large',
                    color: '#0bbd87'
                }, {
                    content: '增加用户管理',
                    timestamp: '2018-04-02 20:46',
                    color: '#0bbd87'
                }]
            }
        }
    }
</script>

<style scoped>

</style>