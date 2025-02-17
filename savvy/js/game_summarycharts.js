// Chapter 1 - Level: 1 - 9
// Chapter 2 - Level: 1 - 7
// Chapter 3 - Level: 1 - 8
// Chapter 4 - Level: 1 - 6

// summaryData = [ { 'Chapter': NN, 'Level': NN, '_attributeName': NN } ]


function updateGameSummaryCharts()
{
  var selectedAttribute = getSelectedAttribute();
  var max = getAttributeSummary(selectedAttribute.key).max;

  for (ch = 1; ch < 5; ch++) {
    var data = getAttributeSummaryForChapter(selectedAttribute.key, ch);

    var chart = c3.generate({
          bindto: '.totalset-chapter'+ch+'-chart',
          data: {
            json: data,
            type: 'bar',
            keys: {
                x: 'Level',
                value: [selectedAttribute.key]
            }
          },
          axis: {
            y: {
              label: selectedAttribute.name,
              max: max
            },
            x: {
              label: {
                text: 'Chapter ' + ch,
                position: 'outer-center'
              }
            }
          },
          tooltip: {
            format: {
                title: function (d) { return 'Level ' + d; },
                name: function (name, ratio, id, index) { return selectedAttribute.name; },
                value: d3.format(',')
            },
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                var $$ = this, config = $$.config,
                    titleFormat = config.tooltip_format_title || defaultTitleFormat,
                    nameFormat = config.tooltip_format_name || function (name) { return name; },
                    valueFormat = config.tooltip_format_value || defaultValueFormat,
                    text, i, title, value, name, bgcolor;
                for (i = 0; i < d.length; i++) {
                    if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }

                    name = nameFormat(d[i].name);
                    value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);

                    text = "<table class='" + $$.CLASS.tooltip + "'>";

                    text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "' style='border-bottom: none !important; height: 25px !important; padding-bottom: 5px; '>";
                    text += "<td class='name' style='color: #767676;  font-size: 11px; border-bottom: none !important; padding-top: 8px !important; padding-left: 10px !important;'>" + name + "</td>";
                    text += "</tr>";

                    text += "<tr class='" + $$.CLASS.tooltipName + "-" + d[i].id + "' style='border-top: none !important; height: 25px !important;'>";
                    text += "<td class='value' style='text-align: left !important; font-size: 14px !important; padding-left: 10px !important; padding-top: 5px !important; padding-bottom: 8px !important'>" + value + "</td>";
                    text += "</tr>";

                }
                return text + "</table>";
            }
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
}