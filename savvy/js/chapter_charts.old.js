function updateChapterGraphs(chapterAttributeKey, chapterAttributeName)
{
    var _dataPath = 'data/ch1Data.csv';

    d3.csv( _dataPath, function ( d ) {

      var data = d;
      return data;

    }, function( error, data ) {

      if (!error)
      {

        var chart = c3.generate({
          bindto: '.chapter1-chart',
          data: {
            json: data,
            type: 'bar',
            keys: {
                x: 'Level',
                value: [chapterAttributeKey]
            }
          },
          axis: {
            y: {
              label: chapterAttributeName,
              max: 550
            },
            x: {
              label: {
                text: 'Chapter 1',
                position: 'outer-center'
              }
            }
          },
          tooltip: {
            show: true,
          },
          point: {
            show: false
          },
          bar: {
            width: 15
          },
          legend: {
            hide: true,

          }
        });

      }
    });



    var _dataPath = 'data/ch2Data.csv';

    d3.csv( _dataPath, function ( d ) {

      var data = d;
      return data;

    }, function( error, data ) {

      if (!error)
      {

        var chart = c3.generate({
          bindto: '.chapter2-chart',
          data: {
            json: data,
            type: 'bar',
            keys: {
                x: 'Level',
                value: [chapterAttributeKey]
            }
          },
          axis: {
            y: {
              label: chapterAttributeName,
              max: 550
            },
            x: {
              label: {
                text: 'Chapter 2',
                position: 'outer-center'
              }
            }
          },
          tooltip: {
            show: true
          },
          point: {
            show: false
          },
          bar: {
            width: 15
          },
          legend: {
            hide: true
          }
        });

      }
    });


    var _dataPath = 'data/ch3Data.csv';

    d3.csv( _dataPath, function ( d ) {

      var data = d;
      return data;

    }, function( error, data ) {

      if (!error)
      {

        var chart = c3.generate({
          bindto: '.chapter3-chart',
          data: {
            json: data,
            type: 'bar',
            keys: {
                x: 'Level',
                value: [chapterAttributeKey]
            }
          },
          axis: {
            y: {
              label: chapterAttributeName,
              max: 550
            },
            x: {
              label: {
                text: 'Chapter 3',
                position: 'outer-center'
              }
            }
          },
          tooltip: {
            show: true
          },
          point: {
            show: false
          },
          bar: {
            width: 15
          },
          legend: {
            hide: true
          }
        });

      }
    });


      var _dataPath = 'data/ch4Data.csv';

    d3.csv( _dataPath, function ( d ) {

      var data = d;
      return data;

    }, function( error, data ) {

      if (!error)
      {

        var chart = c3.generate({
          bindto: '.chapter4-chart',
          data: {
            json: data,
            type: 'bar',
            keys: {
                x: 'Level',
                value: [chapterAttributeKey]
            }
          },
          axis: {
            y: {
              label: chapterAttributeName,
              max: 500
            },
            x: {
              label: {
                text: 'Chapter 4',
                position: 'outer-center'
              }
            }
          },
          tooltip: {
            show: true,
            title: chapterAttributeName
          },
          point: {
            show: false
          },
          bar: {
            width: 15
          },
          legend: {
            hide: true
          }
        });

      }
    });
};



function updateChapterAttributes(){

  var chapterAttributeSelected = document.getElementById("chapter-metric-select");

  chapterAttributeKey = chapterAttributeSelected.options[chapterAttributeSelected.selectedIndex].value;
  chapterAttributeName = chapterAttributeSelected.options[chapterAttributeSelected.selectedIndex].innerHTML;

  updateChapterGraphs(chapterAttributeKey, chapterAttributeName);

};

