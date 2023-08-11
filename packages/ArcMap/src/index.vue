<template>
  <div id="viewDiv" ref="refMap" class="viewDiv"></div>
</template>

<script lang="ts" setup>
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { ref } from "vue";
const props = defineProps<{
  basemap?:
    | "satellite"
    | "hybrid"
    | "terrain"
    | "oceans"
    | "osm"
    | "dark-gray-vector"
    | "gray-vector"
    | "streets-vector"
    | "topo-vector"
    | "streets-night-vector"
    | "streets-relief-vector"
    | "streets-navigation-vector";
}>();
const refMap = ref<HTMLDivElement>();
const init:(options?: { center?: number[]; zoom?: number }) => __esri.MapView = (options?: { center?: number[]; zoom?: number }) => {
  const map = new Map({
    // satellite", "hybrid", "terrain", "oceans", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"
    basemap: props.basemap || "satellite",
  });
  const view = new MapView({
    container: refMap.value,
    map,
    center: options?.center || [117.09, 30.64],
    zoom: options?.zoom || 5,
    highlightOptions: {
      fillOpacity: 0,
      haloOpacity: 0.7,
    },
  });
  // 清除默认微件
  view.ui.remove("attribution");
  view.ui.remove("zoom");
  view.ui.padding = {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  };
  return view;
};
defineExpose<{
  /**
   * 初始化地图
   * @param options {center: [117.09, 30.64],zoom: 5}
   */
  init: (options?: { center?: number[]; zoom?: number }) => __esri.MapView;
}>({
  init,
});
</script>

<style lang="scss" scoped>
@import "@arcgis/core/assets/esri/themes/dark/main.css";

.viewDiv {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
</style>
