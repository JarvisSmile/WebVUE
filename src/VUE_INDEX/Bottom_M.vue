<template>
    <div id="bottom">
        <!--底部分区的顶部-->
        <div id="BTOP"></div>
        <!--底部中心-->
        <div id="BCENTER">
            <div id="BCENTER_L">
            </div>
            <div id="BCENTER_C">
              <div id="BCENTER_CL"></div>
              <div id="BCENTER_CC">
                <div id="Banquan0" class="BANQUAN"  ></div>
                <div id="Banquan1" class="BANQUAN" >
                  <input type="text" id="Banquansuoyou" class="BANQUANXIANGXI" disabled="fales" value="Copyright©2017-2018, jarvissmile.top. All rights reserved."/>
                </div>
                <div id="Banquan2" class="BANQUAN"  >
                  <input type="text" id="Gongsimingcheng" class="BANQUANXIANGXI" disabled="fales" value="Jarvis Studio"/>
                </div>
                <div id="Banquan3" class="BANQUAN" >
                  <input type="text" id="Beian" class="BANQUANXIANGXI" disabled="fales" value="晋ICP备18003110号-1"/>
                </div>
                <div id="Banquan4" class="BANQUAN" ></div>
              </div>
              <div id="BCENTER_CR"></div>
            </div>
            <div id="BCENTER_R" >
            </div>
        </div>
        <!--最底部-->
        <div id="BBOTTOM">
          <div id="BBOTTOM_L"></div>
          <div id="BBOTTOM_C">
              <input type="text" id="DIXIAN" value="- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -我   是  有   底  线   的- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -" disabled="false" />
          </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
#bottom{
    height: 170px;
    width: 1910px;
}
#BTOP{
    width: 100%;
    height: 20%;
    background-color: rgb(29, 33, 36);
}

#BCENTER{
    width: 100%;
    height: 65%;
}

#BCENTER_L{
    width: 25%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
}

#BCENTER_C{
    width: 50%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36) ;
}

#BCENTER_CL{
    width: 25%;
    height: 100%;
    float: left;
}

#BCENTER_CC{
    width: 50%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
}

.BANQUAN{
    width: 100%;
    height: 20%;
}
.BANQUANXIANGXI{
    width: 100%;
    height: 100%;
    background-color: rgb(29, 33, 36);
    border: none;
}

.BCENTER_CR{
    width: 25%;
    height: 100%;
    float: left;;
}

#BCENTER_R{
    width: 25%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
}

#BBOTTOM{
    width: 1910px;
    height: 30px;
    background-color: silver;
    float: left;
}

#BBOTTOM_L{
    width: 20%;
    height: 28px;
    float: left;
}

#BOTTOMB_C{
    width: 1%;
    height: 28px;
    float: left;
    background-color: black;    
}

#DIXIAN{
    width: 50%;
    height: 28px;
    border: none;
    background-color:silver;
}
</style>
