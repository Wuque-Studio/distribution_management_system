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
        <n-grid x-gap="2" :cols="3">
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
                <n-li>Aurora x Mizu AE Bundle</n-li>
              </n-ul>
              <n-li>轴体</n-li>
              <n-ul>
                <n-li>WuqueStudio Aurora 系列轴体</n-li>
                <n-li>MMswitch™ 客制化分体轴</n-li>
              </n-ul>
              <n-li>配件</n-li>
              <n-ul>
                <n-li>WuqueStudio PCB 降噪卫星轴</n-li>
                <n-li>MMswitch™ 客制化分体轴</n-li>
                <n-li>WuqueStudio 机械键盘轴体轴间纸</n-li>
              </n-ul>
              <n-li>其他周边</n-li>
              <n-ul>
                <n-li>WuqueStudio 钛合金拔轴器</n-li>
                <n-li>WuqueStudio 无缺信仰尺</n-li>
              </n-ul>
            </n-ul>
          </n-gi>
          <n-gi :span="2">
            <n-carousel draggable autoplay>
              <img class="carousel-img" src="@/assets/imgs/slider/1.png" />
              <img class="carousel-img" src="@/assets/imgs/slider/2.jpg" />
              <img class="carousel-img" src="@/assets/imgs/slider/3.png" />
              <img class="carousel-img" src="@/assets/imgs/slider/4.jpg" />
            </n-carousel>
          </n-gi>
        </n-grid>
      </div>
    </n-scrollbar>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}
</style>
