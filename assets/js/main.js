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
            majorGridLines: { visible: false, color: "#000", opacity: 0.12 }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
            range: { min: 0, max: 100, interval: 25 },
            majorGridLines: { visible: true, color: "#000", opacity: 0.12 }
        },

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
        ],
        palette: ["#EB160A", "#0F296D", "#FF675E"],
        background: "#fff",
        commonSeriesOptions :{ columnWidth: 1.8, columnSpacing: 0}  ,

        //Enabling 3D Chart
        enable3D: true,
        depth: 90,
        tilt: 25,
        rotation: -4,
        perspectiveAngle: 0,
        isResponsive: true,
        sideBySideSeriesPlacement: true,
        load: "loadTheme",
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
            tooltip: { visible: true, format: "#point.x# : #point.y#%" },
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

        canResize: true,
        load: "onchartload",
        isResponsive: true,
        size: { height: "190", width:"190"},
        legend: { visible: false}
    });
});
