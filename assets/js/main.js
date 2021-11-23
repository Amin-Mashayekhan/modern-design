alert('According to the pattern of this design, this was based on width of 1440 pixels');
// hamberger menu codes
$('.main-content > .hamberger').click(function(event) {
    $('.sidebar').addClass('active');
});
$('.sidebar > .times').click(function(event) {
    $('.sidebar').removeClass('active');
});

var chartObj;
$(function ()
{
    $("#container").ejChart(
    {
        //Initializing Primary X Axis
        primaryXAxis:
        {
            // valueType: 'category',
            // labelFormat:"MMM",
            // title: { text: "Minerals" },
            majorGridLines: { visible: false, color: "#000", opacity: 0.12 }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
            // valueType: 'category',
            // labelFormat:"MMM",
            // title: { text: "Minerals" },
            range: { min: 0, max: 100, interval: 25 },
            majorGridLines: { visible: true, color: "#000", opacity: 0.12 }
        },

        //Initializing Common Properties for all the series
        // commonSeriesOptions:
        // {
        //     tooltip: { visible: true, format: "#series.name#<br/>#point.x# : #point.y#mg" },
        //     type: "column"
        // },

        //Initializing Series
        series:
        [
            {
                points: [{ x:"Knights",  y: 100 }],
                name: 'Jr. Knights'
            },
            {
                points: [{ x:"Gladiators",  y: 55 }],
                name: 'Gladiators '
            },
            {
                points: [{ x:"Spartans",  y: 70 }],
                name: 'Spartans ',
            },
            //
            // {
            //      points: [{ x: "Calcium", y: 6 }, { x: "Phosphorus", y: 26 }, { x: "Sodium", y: 7 },
            //               { x: "Magnesium", y: 32 }, { x: "Manganese", y: 9.6 }, { x: "Iron", y: 8.1 }],
            //
            //     name: 'Minerals Content in Banana'
            // }
        ],
        palette: ["#EB160A", "#0F296D", "#FF675E"],
        background: "#fff",
        commonSeriesOptions :{ columnWidth: 1.8, columnSpacing: 0}  ,
        // columnDefinitions :[{ lineWidth : 2 }],
        // columnDefinitions :[{ columnWidth : 1, lineWidth : 1  }]   ,
        // border: { color: "green" }  ,
        // chartArea: { background : "#000", border: { opacity : 0.5}  },
        //Enabling 3D Chart
        enable3D: true,
        // enableRotation: true,
        depth: 90,
        // wallSize: 1000,
        tilt: 25,
        rotation: -4,
        perspectiveAngle: 0,
        isResponsive: true,
        sideBySideSeriesPlacement: true,
        load: "loadTheme",
        // title: { text: 'Fruits Nutrients' },
        canResize: true,
        size: { height: '248'},
        legend: { visible: false  }
    });
});








$(function ()
{
    $("#doughnut").ejChart(
    {
        //Initializing Common Properties for all the series
        commonSeriesOptions:
        {
            // labelPosition: 'outside',
            tooltip: { visible: true, format: "#point.x# : #point.y#%" },
            // marker:
            // {
            //     dataLabel:
            //     {
            //         shape: 'none',
            //         visible: true,
            //         textPosition: 'top',
            //         border: { width: 0.1},
            //         connectorLine: { height: 30, stroke:'black' }
            //     }
            // }
        },

        //Initializing Series
        series:
        [
            {
                points: [{ x: "Online", text: "50 running batches", y: 40 },
                         { x: "Others", text: "50 running batches", y: 7 },
                         { x: "Eventes", text: "50 running batches", y: 11 },
                         { x: "Offline", text: "50 running batches", y: 25 },
                         ],
                type: 'doughnut',
                // explodeIndex: 4,
                // explodeAll : true,
                doughnutCoefficient: 0.53,
                doughnutSize: 1,
            },

        ],




        commonSeriesOptions : {
                     tooltip: {
                         visible:true,
	                    template: 'Tooltip' }
            },
        palette: ["#F1554C", "#CECECE", "#FFA5A0", "#0F296D"],

        //Enabling 3D Chart
        // enable3D: true,
        // enableRotation: true,
        // depth: 3,
        // tilt: -3,
        // rotation: -30,
        // perspectiveAngle: 90,
        canResize: true,
        load: "onchartload",
        isResponsive: true,
        // title:{text:"People's Hobbies"},
        size: { height: "190", width:"190"},
        legend: { visible: false}
    });
});

// function onchartload(sender)
// {
//     loadTheme(sender);
//     if (sender.model.theme == "flatdark" || sender.model.theme == "gradientdark")
//         sender.model.commonSeriesOptions.marker.dataLabel.connectorLine.stroke = "white";
// }





// $(document).ready(function() {
//     $('p').text('salam');
// });
