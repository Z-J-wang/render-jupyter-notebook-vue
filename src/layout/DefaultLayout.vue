<template>
  <div class="home" :class="{ dark: !isLight }">
    <el-container class="dark:bg-black">
      <el-header class="bg-white dark:bg-black dark:text-white shadow sticky top-0 z-10">
        <div class="mx-auto flex flex-nowrap justify-between items-center" style="height: 60px">
          <div class="flex items-center gap-3">
            <a
              class="inline-flex items-center gap-3"
              href="https://github.com/Z-J-wang/render-jupyter-notebook-vue"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <el-image class="logo" :src="require('../assets/img/logo.png')" />
              <h2 class="text-xl font-bold">RenderJupyterNotebook</h2>
            </a>
            <el-tooltip class="box-item" effect="light" content="View introduction" placement="top">
              <el-button plain link @click.stop="drawer = true">
                <el-icon><Document class="dark:text-white" /></el-icon>
              </el-button>
            </el-tooltip>
          </div>
          <div class="inline-flex gap-3 items-center flex-shrink">
            <slot name="header-right" />
          </div>
        </div>
      </el-header>
      <el-main class="mx-auto mt-4 mb-20 w-full dark:bg-black">
        <slot />
      </el-main>

      <el-backtop class="bg-white" :right="50" :bottom="80">
        <el-icon color="#f37726"><CaretTop /></el-icon>
      </el-backtop>

      <el-footer class="bg-white dark:bg-black shadow-lg text-center py-4 h-auto">
        <el-text size="default" class="dark:text-white">
          Released under the
          <a class="underline hover:text-amber-500" href="https://github.com/vuejs/vitepress/blob/main/LICENSE"
            >MIT License</a
          >. <br />
          Copyright © 2024-present <a class="underline hover:text-amber-500" href="https://github.com/Z-J-wang">Jay</a>
        </el-text>
      </el-footer>

      <el-drawer v-model="drawer" direction="rtl" size="50%">
        <TheAbout />
      </el-drawer>
    </el-container>
  </div>
</template>

<script>
import { CaretTop, Document } from '@element-plus/icons-vue';
import TheAbout from '../components/TheAbout.vue';

export default {
  components: { CaretTop, Document, TheAbout },
  data() {
    return {
      drawer: false,
      isLight: true
    };
  },
  mounted() {
    this.isLight = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? false : true;
  }
};
</script>

<style lang="less" scoped>
.el-container {
  min-width: 1200px;
}

.el-header {
  & > div {
    max-width: 1200px;
  }

  .logo {
    height: 40px;
  }
}

.el-main {
  max-width: 1200px;
  min-height: calc(100vh - 140px - 6rem);
}

.el-backtop:hover {
  background-color: #fef1e9;
  transition: all 0.3s ease-in-out;
}
</style>
