<template>
  <div>
    <LMap class="min-h-screen" :zoom="6" :max-zoom="18" :center="[9.59, -13.62]" :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />

      <LMarker :lat-lng="[9.5977472, -13.6249344]" draggable>
        <LPopup> Hi! You can drag me around! </LPopup>
      </LMarker>
    </LMap>
  </div>
</template>
