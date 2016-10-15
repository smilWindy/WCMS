//初始化数据
var chart;
var monthData=["一月","二月","叁月","四月","五月","六月"];
var curVisitData=[2025,1582,2809,2322,3122,2814];
var columnChartData=[
{
    "month":monthData[0],
    "visits":curVisitData[0],
    "color":"#fff100"
},{
    "month":monthData[1],
    "visits":curVisitData[1],
    "color":"#fff100"
},{
    "month":monthData[2],
    "visits":curVisitData[2],
    "color":"#fff100"
},{
    "month":monthData[3],
    "visits":curVisitData[3],
    "color":"#fff100"
},{
    "month":monthData[4],
    "visits":curVisitData[4],
    "color":"#fff100"
},{
    "month":monthData[5],
    "visits":curVisitData[5],
    "color":"#fff100"
}];
/*变量区，内容待扩展*/

//绘制3D饼状图
//数据初始化
var  pieChartData=[
{
    "month":monthData[0],
    "litres":curVisitData[0]
},{
    "month":monthData[1],
    "litres":curVisitData[1]
},{
    "month":monthData[2],
    "litres":curVisitData[2]
},{
    "month":monthData[3],
    "litres":curVisitData[3]
},{
    "month":monthData[4],
    "litres":curVisitData[4]
},{
    "month":monthData[5],
    "litres":curVisitData[5]
}];

//绘制年度访问量对比折线图
//数据初始化
var lastVisitData=[1828,1282,2609,2422,2722,2614];
var lineChartData=[
{
    "month":monthData[0],
    "thisyear":curVisitData[0],
    "lastyear":lastVisitData[0]
},{
    "month":monthData[1],
    "thisyear":curVisitData[1],
    "lastyear":lastVisitData[1]
},{
    "month":monthData[2],
    "thisyear":curVisitData[2],
    "lastyear":lastVisitData[2]
},{
    "month":monthData[3],
    "thisyear":curVisitData[3],
    "lastyear":lastVisitData[3]
},{
    "month":monthData[4],
    "thisyear":curVisitData[4],
    "lastyear":lastVisitData[4]
},{
    "month":monthData[5],
    "thisyear":curVisitData[5],
    "lastyear":lastVisitData[5]
}];


//实现3D彩色柱状图x轴的绘制
AmCharts.ready(function(){
    column3D();
});
function column3D(){
    chart=new AmCharts.AmSerialChart();
    chart.dataProvider=columnChartData;
    chart.categoryField="month";
    chart.startDuration=1;
    chart.depth3D=50;
    chart.angle=30;
    chart.marginRight=-45;
    /*内容待扩展*/
    /*隐藏x轴和网格竖线*/
    var categoryAxis=chart.categoryAxis;
    categoryAxis.gridAlpha=0;
    categoryAxis.axisAlpha=0;
    //实现3D彩色柱状图刻度坐标（y）轴及彩色柱的绘制
    var valueAsix=new AmCharts.ValueAxis();
    valueAsix.axisAlpha=0;
    valueAsix.gridAlpha=0;
    chart.addValueAxis(valueAsix);
    var graph=new AmCharts.AmGraph();
    graph.valueField="visits";
    graph.colorField="color";
    graph.balloonText="<b>[[category]]:[[value]]</b>";
    graph.type="column";
    graph.lineAlpha=0.5;
    graph.lineColo="#ffffff";
    graph.topRadius=1;
    graph.fillAlpha=0.9;
    chart.addGraph(graph);
    /*内容扩展*/
    //出现刻度坐标轴和x轴气泡显示功能
    var chartCursor=new AmCharts.ChartCursor();
    chartCursor.cursorAlpha=1;
    chartCursor.zoomable=false;
    chartCursor.categoryBalloonEnabled=true;
    chartCursor.valueLineEnabled=true;
    chartCursor.valueLineBalloonEnabled=true;
    chartCursor.valueLineAlpha=1;
    chartCursor.valueLineAlpha=1;
    chart.addChartCursor(chartCursor);
    chart.write("chartdiv");
}
//内容待扩展

//实现3D饼状图x轴的绘制
function pie3D(){
    chart=new AmCharts.AmPieChart();
    chart.dataProvider=pieChartData;
    chart.titleField="month";
    chart.valueField="litres";
    legend= new AmCharts.AmLegend();
    legend.align="center";
    legend.markerType="circle";
    chart.balloonText="[[title]]<br><<span style='font-size:14px'><b>[[value]]</b>([[perc ent s]%)</span>";
    legend.maxColumns=3;
    chart.addLegend(legend);
    /*内容带待扩展*/
    //饼状图3D化
    chart.depth3D=10;
    chart.angle=10;
    chart.write("chartdiv");
}
/*内容待扩展*/
//实现饼状图标签内置3D饼状图
function setLabelPosition(){
    chart=new AmCharts.AmPieChart();
    chart.dataProvider=pieChartData;
    chart.titleField="month";
    chart.valueField="litres";
    legend= new AmCharts.AmLegend();
    legend.align="center";
    legend.markerType="circle";
    chart.balloonText="[[title]]<br><<span style='font-size:14px'><b>[[value]]</b>([[perc ent s]%)</span>";
    legend.maxColumns=3;
    chart.addLegend(legend);
    /*内容带待扩展*/
    //饼状图3D化
    chart.depth3D=10;
    chart.angle=10;
    //实现饼状图标签内置
    chart.labelRadius=-30;
    chart.labelText="[[percents]]%";
    chart.write("chartdiv");
}

//实现年访问量对比折线图x轴的绘制
function lineGraph(){
    chart= new AmCharts.AmSerialChart();
    chart.dataProvider=lineChartData;
    chart.categoryField="month";
    chart.startDuration=0.5;
    chart.balloon.color="#000000";
    /*waiting to expanding*/
    //设置x轴
    var categoryAxis=chart.categoryAxis;
    categoryAxis.fillAlpha=1;
    categoryAxis.fillColor="#fafafa";
    categoryAxis.gridAlpha=0;
    categoryAxis.axisAlpha=0;
    categoryAxis.position="top";
    /*扩展内容*/
    //设置刻度坐标轴，绘制访问量对比线
    var valueAsix=new AmCharts.ValueAxis();
    valueAsix.title="访问量对比图";
    valueAsix.dashLength=5000;
    valueAsix.axisAlpha=0;
    valueAsix.minimum=500;
    valueAsix.maximum=5000;
    valueAsix.integersOnly=true;
    valueAsix.gridCount=10;
    valueAsix.reversed=false;//改为true的效果相反
    chart.addValueAxis(valueAsix);
    var graph=new AmCharts.AmGraph();
    graph.title="2015系统访问量";
    graph.valueField="thisyear";
    graph.balloonText="2015年访问量[[category]]:[[value]]</b>";
    graph.bullet="round";
    chart.addGraph(graph);
    var graph=new AmCharts.AmGraph();
    graph.title="2014系统访问量";
    graph.valueField="lastyear";
    graph.balloonText="2014年访问量[[category]]:[[value]]</b>";
    graph.bullet="round";
    chart.addGraph(graph); 

    //添加图表说明
    var chartCursor=new AmCharts.ChartCursor();
    chartCursor.cursorAlpha=0;
    chartCursor.cursorPosition="mouse";
    chartCursor.zoomable=false;
    chart.addChartCursor(chartCursor);
    var legend= new AmCharts.AmLegend();
    legend.userGraphSettings=true;
    chart.addLegend(legend);
    chart.write("chartdiv");
}
/*waiting to expanding*/

//绘制区域时间访问图
var timeVisitedChartData=[];
function generateTimeVisitedChartData(){
    var firstDate= new Date();
    firstDate.setMinutes(firstDate.getDate()-1000);
    for(var i=0;i<1000;i++){
        var newDate= new Date(firstDate);
        newDate.setMinutes(newDate.getMinutes()+i);
        var visits=Math.round(Math.random()*40)+10;
        timeVisitedChartData.push({
            date:newDate,
            visits:visits
        });
    }
}
//expanding....
//实现区域时间访问图x轴
function timeVisitedChart(){
    generateTimeVisitedChartData();
    chart=new AmCharts.AmSerialChart();
    chart.dataProvider=timeVisitedChartData;
    chart.categoryField="date";
    var categoryAxis=chart.categoryAxis;
    categoryAxis.parseDates=true;
    categoryAxis.minPeriod="mm";
    categoryAxis.gridAlpha=0.07;
    categoryAxis.axisColor="#dadada";
    //expanding.....
    var valueAsix=new AmCharts.ValueAxis();
    valueAsix.gridAlpha=0.07;
    valueAsix.title="Time Visit Chart";
    chart.addValueAxis(valueAsix);
    var graph=new AmCharts.AmGraph();
    graph.type="line";
    graph.lineAlpha=1;
    graph.lineColor="#d1cf2a";
    graph.valueField="visits";
    graph.fillAlpha=0.3;
    chart.addGraph(graph);
    var chartCursor=new AmCharts.ChartCursor();
    chartCursor.categoryBalloonEnabled="JJ:NN,DD MMMM";
    chartCursor.cursorPosition="mouse";
    chart.addChartCursor(chartCursor);
    var chartScrollbar=new AmCharts.ChartScrollbar();
    chart.pathToImages="amchart/amcharts/images/";
    chart.addChartScrollbar(chartScrollbar);
    chart.write("chartdiv");

}
