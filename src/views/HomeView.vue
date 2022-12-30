<template>
  <div>
    <n-scrollbar class="content" style="max-height: calc(100vh - 140px)">
      <div>
        <n-h2>介绍</n-h2>
        <p>
          无缺工作室（武汉悟确科技有限公司）2020年由一群狂热的客制化键盘玩家创立，总部位于湖北省武汉市东湖新技术开发区，并在深圳、东莞设有分公司和自营工厂。秉承“以前沿视觉呈现与技术革新给玩家带来最新奇体验”的核心理念，从资深研发团队、贴心技术支持、到完善的售后服务，无缺工作室都致力于提供贴合键盘DIY改装者需求的优质原创产品。短短数年便成长为国内为数不多的具备设计、研发、制造、营销全产业链覆盖的客制化键盘头部供应商。
        </p>
      </div>
      <n-divider />
      <h2>产品</h2>
      <div>
        <n-grid x-gap="2" :cols="2">
          <n-gi>
            <n-ul>
              <n-li>键盘</n-li>
              <n-ul>
                <n-li>ikki68 Aurora R1/R2 </n-li>
                <n-li>Mammoth 75/20X</n-li>
                <n-li>Promise 87</n-li>
              </n-ul>
              <n-li>键帽</n-li>
              <n-ul>
                <n-li>WS Kraken海妖键帽 </n-li>
                <n-li>WS BOW键帽</n-li>
              </n-ul>
              <n-li>轴体</n-li>
              <n-ul>
                <n-li>WuqueStudio Aurora 系列轴体</n-li>
                <n-li>MMswitch™ 客制化分体轴</n-li>
              </n-ul>
              <n-li>其他周边</n-li>
              <n-ul>
                <n-li>WuqueStudio 钛合金拔轴器</n-li>
                <n-li>WuqueStudio 无缺信仰尺</n-li>
              </n-ul>
            </n-ul>
          </n-gi>
          <n-gi>
            <n-carousel show-arrow autoplay>
              <img class="carousel-img" src="@/assets/imgs/slider/1.png" />
              <img class="carousel-img" src="@/assets/imgs/slider/2.jpg" />
              <img class="carousel-img" src="@/assets/imgs/slider/3.png" />
              <img class="carousel-img" src="@/assets/imgs/slider/4.jpg" />
              <template #arrow="{ prev, next }">
                <div class="custom-arrow">
                  <button
                    type="button"
                    class="custom-arrow--left"
                    @click="prev"
                  >
                    <n-icon><ArrowBack /></n-icon>
                  </button>
                  <button
                    type="button"
                    class="custom-arrow--right"
                    @click="next"
                  >
                    <n-icon><ArrowForward /></n-icon>
                  </button>
                </div>
              </template>
              <template #dots="{ total, currentIndex, to }">
                <ul class="custom-dots">
                  <li
                    v-for="index of total"
                    :key="index"
                    :class="{ ['is-active']: currentIndex === index - 1 }"
                    @click="to(index - 1)"
                  ></li>
                </ul>
              </template> </n-carousel
          ></n-gi>
        </n-grid>
      </div>
      <n-divider />
      <n-h2>联系我们</n-h2>
      <div></div>
    </n-scrollbar>
  </div>
</template>
<script setup lang="ts">
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
