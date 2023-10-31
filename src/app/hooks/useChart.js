import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { v4 as uuidv4 } from "uuid";
import { graphService } from "../_services/graph.service.js";
import PiChart from "../_chart/PieChart";
import VerticalChart from "../_chart/VerticalChart";
import HorizontalChart from "../_chart/HorizontalChart";
import { ChartName } from "../_chart/data/enums/ChartName.ts";

const useChart = () => {
  const shortCodepatternsRE =
    /^\[pie-chart|vertical-chart|horizontal-chart|correlation-chart|.*\]$/;

  useEffect(() => {
    // Function to search for the pattern
    const searchForPattern = async () => {
      // const content = document.body.textContent;
      const elementsWithNodeType1 = document.body.querySelectorAll("p");
      elementsWithNodeType1.forEach(async (element, index) => {
        const shortCode = element.textContent;
        const shortCodesMatched = matchShortCodePatternsAgainstText(shortCode);
        if (
          shortCodesMatched &&
          shortCodesMatched.length > 0 &&
          !element.classList.contains("render-chart")
        ) {
          element.classList.add("render-chart");
          await renderGraphForMatchedShortCodePattern(
            element,
            shortCodesMatched
          );
          element.remove();
        }
      });
    };
    searchForPattern();
  });
  async function renderGraphForMatchedShortCodePattern(
    element,
    shortCodesMatched
  ) {
    for (let indx = 0; indx < shortCodesMatched.length; indx++) {
      if (
        shortCodesMatched[indx]?.isMatch &&
        element.nodeType === Node.ELEMENT_NODE
      ) {
        const res = await graphService.getGraphData({
          graph_shortcode: shortCodesMatched[indx].matchedString,
        });

        const chartData = res.data.data;
        if (chartData.data.length > 0) {
          /*test data start */
          // const temp ={data:[10,20,70],lable:["Lidar","Lidar","Lidar"]}
          //const plotData = regenerateData(temp);
          /**test data end */
          const plotData = regenerateData(chartData);
          if (plotData && plotData.length > 0) {
            const container = document.createElement("div");
            element.insertAdjacentElement("afterend", container);
            const root = createRoot(container);
            if (shortCodesMatched[indx].pattern == ChartName.PieChart) {
              root.render(
                <PiChart
                  data={plotData}
                  pieSize={150}
                  svgSize={180}
                  innerRadius={0}
                  containerId={`pie${uuidv4()}`}
                  chartTitle={shortCodesMatched[indx].chartTitle}
                />
              );
            }
            if (shortCodesMatched[indx].pattern == ChartName.VerticalChart) {
              root.render(
                <VerticalChart
                  svgProps={{
                    margin: {
                      top: 80,
                      bottom: 80,
                      left: 80,
                      right: 80,
                    },
                    width: 478,
                    height: 238,
                  }}
                  axisProps={{
                    xLabel: "Power (W)",
                    yLabel: "%",
                    drawXGridlines: true,
                    tick: 5,
                    isTextOrientationOblique:
                      plotData[0].label.length > 5 ? true : false,
                  }}
                  data={plotData}
                  strokeWidth={4}
                />
              );
            }
            if (shortCodesMatched[indx].pattern == ChartName.HorizontalChart) {
              // const temp ={data:[1,3,5,9],lable:["Samsung","Apple","Nokia","Motorola"]}
              // const plotData = regenerateData(temp);
              root.render(
                <HorizontalChart 
                data ={plotData}
                height={220}
                width={650}
                chartTitle={shortCodesMatched[indx].chartTitle}
                />
              )
              
            }
          }
        }
      }
    }
  }
  function regenerateData(chartData) {
    const dataForChart = [];
    if (
      chartData &&
      chartData.data &&
      chartData.data.length > 0 &&
      chartData.lable
    ) {
      chartData.data.forEach((val, index) => {
        dataForChart.push({
          label: chartData.lable[index],
          value: val,
        });
      });
    } else if (chartData && chartData.data && chartData.data.length > 0) {
      chartData.data.forEach((val) => {
        dataForChart.push({
          label: val,
          value: val,
        });
      });
    }
    return dataForChart;
  }
  function matchShortCodePatternsAgainstText(str) {
    const results = [];
    const patternRE = /\[[^\]]*]/g;
    const patterns = str.match(patternRE);
    if (patterns && patterns.length > 0) {
      patterns.forEach((matchedPattern) => {
        const regex = new RegExp(shortCodepatternsRE);
        if (regex.test(matchedPattern)) {
          results.push({
            isMatch: true,
            pattern: getTheChartTypeFromShortCodePattern(matchedPattern),
            matchedString: matchedPattern,
            chartTitle:getChartTitle(matchedPattern)
          });
        }
      });
    }

    return results;
  }
  function getTheChartTypeFromShortCodePattern(shortCodestr) {
    const semicolonIndex = shortCodestr.indexOf(";");
    let chartType = "";
    if (semicolonIndex !== -1) {
      chartType = shortCodestr.substring(1, semicolonIndex);
    }
    return chartType;
  }
  function getChartTitle(shortCodestr){
    let chartTitle=''
    let result = shortCodestr.slice(1, -1);
     const stringArray = result.split(';');
     if(stringArray && stringArray.length>0 && stringArray[1]){
      chartTitle = stringArray[1]
     }
    return  chartTitle;
  }
 
};

export default useChart;
