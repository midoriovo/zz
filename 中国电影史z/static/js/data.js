 c3.generate({
    bindto: '.piechart',
    data: {
        columns: [
            ['日本电影', 42],
            ['中国电影', 41],
            ['美国电影', 116],
            ['其他电影', 51],

        ], type: 'pie'
    },

    size: {
        width: 400,
        height: 400
    },
    pie: { // 饼图特定的配置项
        label: {
            show: true, // 是否显示每个切片的标签
            format: function (value, ratio, id) {
                let result = (ratio * 100).toFixed(1) + '%';
                return `${id}:${value}`;
            },
            style: {
                // 调整文字位置
                textAnchor: 'start', // 文字锚点设置在开始位置
                dx: 1000, // 水平偏移量
                dy: 600// 垂直偏移量
            }
        }
    },
    color: { // 自定义颜色
        pattern: ["#ecaf68c5", '#f79748c5', '#ec6d69c5', '#645555c5'] // 颜色数组对应每个数据系列
    },
    onrendered: function () {
        let tararrays = [".c3-target-日本电影", ".c3-target-美国电影", ".c3-target-中国电影", ".c3-target-其他电影"]
        let result = ["16.8%", "46.4%", "16.4%", "20.4%"]
        for (let i = 0; i < tararrays.length; i++) {
            let textElements = d3.selectAll(`${tararrays[i]}>text`);
            textElements.each(function (d) {

                var text = d3.select(this);
                if (tararrays[i] == ".c3-target-美国电影") {
                    
                    text.attr('transform', 'translate(133.19146106712282,-15.696066008203815)');
                }

                text.append('tspan').text(result[i]).attr('dy', '1em').attr('x', '0');

            })
        }



    }

});
c3.generate({
    bindto: '.spliechart',
    data: {
        
        columns: [
            
            ['票房大于20万元电影数量', 6, 8, 8, 6, 13],
        ],
        type: 'spline',
        line:{
            '票房大于20万元电影数量':{
                width: 20
            }
        },
        point:{
            show:true
        },
        

    },
    title:{
        text:'2015-2024票房大于20万元电影数量'
    },
    axis: {
        x: {
            type: 'category',
            categories: ["2015-2016","2017-2018","2019-2020","2021-2022","2023-2024",],
            label:"年份"
        },
        y:{
            label:"电影数量"
        }
    }
    
});
var chart = c3.generate({
    bindto: '.pointchart', 
    data: {
        columns: [ 
            ["电影对应票价",45,34,65,23,56,77,23,45,61,50,44,42], // 假设这是x和y坐标的数据
            
        ],
        
        type: 'scatter', 
    },
    point: { 
        show: true, 
        r: 5, 
  
    },
    axis: { 
        x: { 
            
            type: 'category',
            categories: ["51","52","53","54","55","56","51","52","53","54","55","56"],
            label:"票房（万元）"
        },
        y: { 
            
            label:"电影单张票价（元）"
        }
    },
    title:{
        text:'中国票房Top50电影票价对比'
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    
});
