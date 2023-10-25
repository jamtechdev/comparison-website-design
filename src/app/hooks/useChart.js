import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { graphService } from "../_services/graph.service.js";
import PiChart from "../_chart/PieChart";
const useChart = () => {
  const shortCodepatternsRE =
    /^\[pie-chart|vertical-chart|horizontal-chart|correlation-chart|.*\]$/;

  useEffect(() => {
    // Function to search for the pattern
    const searchForPattern = async () => {
      const content = document.body.textContent;
      const elementsWithNodeType1 = document.body.querySelectorAll("p");
      elementsWithNodeType1.forEach(async (element, index) => {
        const textContent = element.textContent;
        if (
          matchShortCodePatternsAgainstText(textContent)?.isMatch &&
          element.nodeType === Node.ELEMENT_NODE
        ) {
          if (!element.classList.contains("render-chart")) {
            element.classList.add("render-chart");
            const res = await graphService.getGraphData({
              graph_shortcode:
                "[pie-chart;Robot Vacuum Cleaners;Noisiness:0-80,Can Mop:yes;Dirt sensor]",
            });
            const chartData = res.data.piechart.data;
            if (chartData.length > 0) {
              const plotData = regenerateData(chartData);
              if (plotData && plotData.length > 0) {
                const container = document.createElement("div");
                element.insertAdjacentElement("afterend", container);
                const root = createRoot(container);
                root.render(
                  <PiChart
                    data={plotData}
                    pieSize={300}
                    svgSize={300}
                    innerRadius={90}
                    containerId={`pie${index}`}
                  />
                );
                element.remove();
              }
            }
          }
        }
      });
    };
    searchForPattern();
  });
  function regenerateData(data) {
    const chartData = [];
    //data=[1, 1, 2, 3, 5, 8, 13, 21]

    if (data && data.length > 0) {
      data.forEach((val) => {
        chartData.push({
          label: val,
          value: val,
        });
      });
    }

    return chartData;
  }
  function matchShortCodePatternsAgainstText(str) {
    const result = {};
    const regex = new RegExp(shortCodepatternsRE);
    if (regex.test(str)) {
      result["isMatch"] = true;
      result['pattern'] =getTheChartTypeFromShortCodePattern(str);
    } 
    return result;
  }
  function getTheChartTypeFromShortCodePattern(shortCodestr) {
    const semicolonIndex = shortCodestr.indexOf(";");
    let chartType=''
    if (semicolonIndex !== -1) {
      chartType = shortCodestr.substring(1, semicolonIndex);
    } 
    return chartType
  }
  //return;
};

export default useChart;
