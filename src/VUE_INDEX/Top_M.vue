<template>
    <div id="Top">
        <div id="LOGO">
            <img />
        </div>
        <div id="TITLEAREA">
            <div id="TITLE_KB"></div>
            <div id="TITLE">
                <h1>{{msg}}</h1>           
            </div>
            <div id="TITLE_KB"></div>
        </div>
         <div id="INFO_I" >
              <div id="INFO_IT" ></div>
              <!--区域中心-->
              <div id="INFO_IC" class="INFO_IC">
                <div id="INFO_IC_KB" >
                </div>
                <div id="INFO_IC_BM">
                  <input type="button" class="BTN" id="btn_BM" value="报名"/>
                </div>
                <div id="INFO_IC_KB">
                </div>
                <div id="DETAILED" >
                  <div id="ABOUT">
                    <input type="button" class="BTN2" title="关于我们" id="btn_AB" value="?"/>
                  </div>
                  <div id="STATEMENT">
                      <input type="button" class="BTN2" title="声明" id="btn_SM" value=" !"/>
                  </div>
                </div>
                <div id="CONTACT" class="CONTACT">
                  <div style="width: 30%;height: 100%;float: left;">
                      <input type="text" id="CONTACT_INFO" value="联系方式" disabled="fales"/>
                  </div>
                  <div style="width: 70%;height: 100%;float: left;">
                    <div style="width: 100%;height: 20px;">
                      <input type="text" id="EMAIL" value="Email" disabled="fales"/>
                      <input type="text" id="EMAILVALUE" value="examp@mail.com" disabled="fales"/>
                    </div>
                    <div style="width: 100%;height: 20px;">
                      <input type="text" id="TEL" value="   Tel" disabled="fales"/>
                      <input type="text" id="TELVALUE" value="12345678910" disabled="fales"/>
                    </div>
                  </div>                  
                </div>
                <div id="NAV">
                  <input type="button" class="BTN" value="导航"/>
                </div>
              </div>
            </div>
    </div>
</template>
<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'Marathon data analysis platform'
    }
  }
}
</script>
<style lang="scss">
h1{
    color: aliceblue;
}
#TOP {
    width: 1910px;
    height: 80px;
    background-color: silver;
}
#LOGO
{
    width: 15%;
    height: 80px;
    background-color: rgb(29, 33, 36);
    float: left;
}

#TITLEAREA{
    width:60%;
    height: 80px;
    float: left;
    background-color: rgb(29, 33, 36);
}

#TITLE_KB{
    width: 20%;
    height: 80px;
    float: left;
    background-color: rgb(29, 33, 36);
}

#TITLE{
    width: 59.5%;
    height: 95%;
    float: left;
    border: 2px solid;
    border-color: rgb(67, 74, 80);
}
#INFO_I{
    width: 25%;
    height: 80px;
    background-color: rgb(29, 33, 36);
    float: left;
}
#INFO_IT{
    width: 100%;
    height: 15%;
    background-color: rgb(29, 33, 36);
}

#INFO_IC{
    width: 100%;
    height: 70%;
}
.BTN{
    width: 100%;
    height: 50px;
}
.BTN2{
    width: 100%;
    height: 25px;
}
#INFO_IC_BM{
    width: 15%;
    height: 100%;
    background-color: rgb(29, 33, 36);
    float: left;
    font-size: 3px;
}

#INFO_IC_KB{
    width: 9%;
    height: 100%;
    background-color: rgb(29, 33, 36);
    float: left;
    font-size: 3px;
}

#DETAILED{
    width: 10%;
    height: 100%;
    background-color: rgb(29, 33, 36);
    float: left;
    font-size: 3px;

}

#ABOUT{
    width: 100%;
    height: 50%;
    background-color: rgb(29, 33, 36);
}

#STATEMENT{
    width: 100%;
    height: 50%;
    background-color:rgb(29, 33, 36);
}

#CONTACT{
    width: 46%;
    height: 100%;
    background-color: rgb(29, 33, 36);
    float: left;;
    font-size: 3px;
}

#CONTACT_INFO{
    width: 100%;
    height: 50px;
    font-family: '楷体';
    background-color: rgb(29, 33, 36);
    border: none;
    text-align:center;
    color: azure;
}

#EMAIL{
    width: 24%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
    border-top-color:aliceblue; 
    border-bottom:aliceblue;
    border-left-color: aliceblue;
    border-right: aliceblue;
    color: azure;
}

#EMAILVALUE{
    width:70%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
    border-top-color:aliceblue; 
    border-bottom:aliceblue;
    border-left-color: aliceblue;
    border-right-color: aliceblue;
    color: azure;
}

#TEL{
    width: 24%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
    border-top-color:aliceblue; 
    border-bottom-color:aliceblue;
    border-left-color: aliceblue;
    border-right: aliceblue;
    color: azure;
}

#TELVALUE{
    width:70%;
    height: 100%;
    float: left;
    background-color: rgb(29, 33, 36);
    border-top-color:aliceblue; 
    border-bottom-color:aliceblue;
    border-left-color: aliceblue;
    border-right-color: aliceblue;
    color: azure;
}

#NAV{
    width: 10%;
    height: 100%;
    background-color: rgb(29, 33, 36);
    float: right;
    font-size: 3px;
}

#BTN_NAV{
    width: 80%;
    height: 100%;
}
</style>
