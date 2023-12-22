<template>
    <div id="FooterGuideline">
        <div
            class="FooterGuide-item"
            :class="{ active: '/msite' === $route.path }"
            @click="goToPages('/msite')"
        >
            <span class="FooterGuide-Icon"
                ><font-awesome-icon icon="fa-solid fa-house"
            /></span>
            <span class="FooterGuide-Text">主页</span>
        </div>
        <div
            class="FooterGuide-item"
            :class="{ active: '/search' === $route.path }"
            @click="goToPages('/search')"
        >
            <span class="FooterGuide-Icon"
                ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
            /></span>
            <span class="FooterGuide-Text">搜索</span>
        </div>
        <div
            class="FooterGuide-item"
            :class="{ active: '/order' === $route.path }"
            @click="goToPages('/order')"
        >
            <span class="FooterGuide-Icon"
                ><font-awesome-icon icon="fa-regular fa-rectangle-list"
            /></span>
            <span class="FooterGuide-Text">订单</span>
        </div>
        <div
            class="FooterGuide-item"
            :class="{ active: '/profile' === $route.path }"
            @click="goToPages('/profile')"
        >
            <span class="FooterGuide-Icon"
                ><font-awesome-icon icon="fa-solid fa-user"
            /></span>
            <span class="FooterGuide-Text">我的</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterGuideline',
    methods: {
        goToPages(path) {
            if (this.$route.path !== path) {
                this.$router.push(path);
            }
        },
    },
};
</script>

<style scoped>
#FooterGuideline {
    position: fixed;
    z-index: 10;
    background-color: #fff;
    bottom: 0;
    border-top: 0.5px solid #ccc;
    border-left: 3px solid #ccc;
    border-right: 3px solid #ccc;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
}

.FooterGuide-item {
    flex: 1;
    display: block;
    text-align: center;
    padding: 5px;
    text-decoration: none;
}

.FooterGuide-Text {
    font-size: 14px;
}

.FooterGuide-item span {
    display: block;
}

.active {
    color: green;
}
</style>
