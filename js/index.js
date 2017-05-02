/**
 * Created by Administrator on 2017/4/26.
 */
window.onload= function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title : {
            text: '某人的技能',
//                潜在

            x:'center'
        },
//            提示文本
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
//            图例
        legend: {

//                data: ['bootstrap','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: 'my skill',
                type: 'pie',
                radius : '55%',
                center: ['50%', '40%'],
                data:[
                    {value:335, name:'Bootstrap'},
                    {value:310, name:'h5c3'},
                    {value:234, name:'原生js'},
                    {value:134, name:'canvas'},
                    {value:134, name:'angularjs'},
                    {value:135, name:'ajax'},
                    {value:335, name:'Jquery'},
                    {value:50, name:'c#'}
                ],
                itemStyle: {
                    normal: {
                        // 阴影的大小
                        shadowBlur: 200,
                        // 阴影水平方向上的偏移
                        shadowOffsetX: 0,
                        // 阴影垂直方向上的偏移
                        shadowOffsetY: 0,
                        // 阴影颜色
                        shadowColor: 'rgba(255, 255, 0, 0.5)'
                    },
                    //鼠标 hover
                    emphasis: {
                        shadowBlur: 15,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

