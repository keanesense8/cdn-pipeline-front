<template>
  <div>

    <div class="row">
      <div class="col-12">
         <ve-line :data="vchartData"></ve-line>
      </div>
    </div>
    <div class="row">
      <div id="chart-container">
        <fusioncharts
            :type="fchartData.type"
            :width="fchartData.width"
            :height="fchartData.height"
            :dataformat="fchartData.dataFormat"
            :datasource="fchartData.dataSource"
            >
        </fusioncharts>
      </div>
    </div>
    
  </div>
</template>
<script>

  import config from '@/config';

 
  export default {
    data: function () {
      return {
        vchartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        fchartData:{
            "iwanttosaid": "hello keane",
            "type": "column2d",
            "renderAt": "chart-container",
            "width": "550",
            "height": "350",
            "dataFormat": "jsonurl",
            // "datasource": {
            //     "chart": {
            //         "caption": "Number of visitors in the last 3 days",
            //         "subCaption": "Bakersfield Central vs Los Angeles Topanga",
            //         "theme": "fusion"
            //     },
            //     "data": [{
            //         "label": "Mon",
            //         "value": "15123"
            //     }, {
            //         "label": "Tue",
            //         "value": "14233"
            //     }, {
            //         "label": "Wed",
            //         "value": "25507"
            //     }, {
            //         "label": "Thus",
            //         "value": "111"
            //     }]
            // }
            // "dataSource": 'http://61.8.173.88/xcharts/data.json' // url of datasource
             "dataSource": '/api/data/test.json' // url of datasource
        }
      }
    }
  
  }
   
   

</script>

<style>
</style>

