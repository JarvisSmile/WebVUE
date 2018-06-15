<template>
    <div id="Ditu" class="DITUDIV">
      <div id="container" class="DITU">
          <div id="myPageTop" style="position:absolute; z-index:999; top:0;">
              <table>
                  <tr>
                      <td class="column2">
                          <label>左击获取经纬度：</label>
                      </td>
                  </tr>
                  <tr>
                      <td class="column2">
                          <input type="text" readonly="true" id="lnglat">
                      </td>
                  </tr>
              </table>
          </div>
      </div>
    </div>
</template>
<script>
export default {
              var map = new AMap.Map("container", {
          resizeEnable: true
           });
          //为地图注册click事件获取鼠标点击出的经纬度坐标
          var clickEventListener = map.on('click', function(e) {
              document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
          });
}
</script>
