$(document).ready(function () {

    let myChart = echarts.init(document.getElementById('echars'));

    // 指定图表的配置项和数据
    let option = {
        title : {
            // text: '某站点用户访问来源',
            // subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            left: 'left',
            top: 180,
            left:30,
            data: ['基本公共服务','教育服务','医疗服务','公共文化服务','社会保险服务']
        },
        series : [
            {
                name: '服务分布',
                type: 'pie',
                radius : '50%',
                center: ['50%', '40%'],
                data:[
                    {value:235, name:'基本公共服务'},
                    {value:310, name:'教育服务'},
                    {value:234, name:'医疗服务'},
                    {value:135, name:'公共文化服务'},
                    {value:248, name:'社会保险服务'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})