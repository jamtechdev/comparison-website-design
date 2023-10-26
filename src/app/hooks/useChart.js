import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { graphService } from "../_services/graph.service.js";
import PiChart from "../_chart/PieChart";
import VerticalChart from "../_chart/VerticalChart";
import { ChartName } from "../_chart/data/enums/ChartName.ts"; 
const useChart = () => {
  const shortCodepatternsRE =
    /^\[pie-chart|vertical-chart|horizontal-chart|correlation-chart|.*\]$/;

  useEffect(() => {
    // Function to search for the pattern
    const searchForPattern = async () => {
      const content = document.body.textContent;
      const elementsWithNodeType1 = document.body.querySelectorAll("p");
      elementsWithNodeType1.forEach(async (element, index) => {
        const shortCode = element.textContent;
        console.log(shortCode)
        const shortCodesMatched = matchShortCodePatternsAgainstText(shortCode);
        if(shortCodesMatched && shortCodesMatched.length>0){
          shortCodesMatched.forEach(async(shortCodeMatched)=>{
            if (
              shortCodeMatched?.isMatch &&
              element.nodeType === Node.ELEMENT_NODE
            ) {
              if (!element.classList.contains("render-chart")) {
                element.classList.add("render-chart");
                const res = await graphService.getGraphData({
                  graph_shortcode: shortCode,
                });
                const chartData = res.data.data;
                if (chartData.data.length > 0) {
                  const plotData = regenerateData(chartData);
                  if (plotData && plotData.length > 0) {
                    const container = document.createElement("div");
                    element.insertAdjacentElement("afterend", container);
                    const root = createRoot(container);
                    if (shortCodeMatched.pattern == ChartName.PieChart) {
                      root.render(
                        <PiChart
                          data={plotData}
                          pieSize={300}
                          svgSize={300}
                          innerRadius={0}
                          containerId={`pie${index}`}
                        />
                      );
                      //element.remove();
                    }
                    if (shortCodeMatched.pattern == ChartName.VerticalChart) {
                      root.render(
                        <VerticalChart
                          svgProps={{
                            margin: { top: 80, bottom: 80, left: 80, right: 80 },
                            width: 600,
                            height: 400,
                          }}
                          axisProps={{
                            xLabel: "Power (W)",
                            yLabel: "No of Vaccum Cleaners (%)",
                            drawXGridlines: true,
                          }}
                          data={plotData}
                          strokeWidth={4}
                        />
                      );
                      //element.remove();
                    }
                  }
                }
              }
            }
          })
        }
       
      });
    };
    searchForPattern();
  });
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
      data.forEach((val) => {
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
    const regex = new RegExp(shortCodepatternsRE);
    if (regex.test(str)) {
      results.push({
        'isMatch':true,
        'pattern':getTheChartTypeFromShortCodePattern(str)
      })
      // results["isMatch"] = true;
      // results["pattern"] = getTheChartTypeFromShortCodePattern(str);
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
  //return;
};

export default useChart;
