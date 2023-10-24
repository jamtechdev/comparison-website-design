// hooks/usePieChart.js
import { useEffect, useState } from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { graphService } from "../_services/graph.service.js";
import PiChart from "../_chart/PieChart";
import PieChart from "../_chart/PieChart";
const useChart = (pattern, apiEndpoint) => {
  const [showPieChart, setShowPieChart] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState([]);
  const searchPattern = "pie-chart;Robot Vacuum Cleaners;";
  useEffect(() => {
    regenerateData();
    // Function to search for the pattern
    const searchForPattern = async () => {
      const content = document.body.textContent;
      const elementsWithNodeType1 = document.body.querySelectorAll("p");
      elementsWithNodeType1.forEach(async (element,index) => {
        const textContent = element.textContent;
        if (
          textContent.includes(searchPattern) &&
          element.nodeType === Node.ELEMENT_NODE
        ) {
          if (!element.classList.contains("render-chart")) {
            element.classList.add("render-chart");
            const res = await graphService.getGraphData({
              graph_shortcode:
                "[pie-chart;Robot Vacuum Cleaners;Noisiness:0-80,Can Mop:yes;Dirt sensor]",
            });
            const chartData = res.data.piechart.data;
            console.log(chartData);
            if (chartData.length > 0) {
              const plotData = regenerateData(chartData);
              if (plotData && plotData.length > 0) {
                console.log(plotData)
                const container = document.createElement('div');
                element.insertAdjacentElement('afterend', container);
              //  const container = element;
                const root = createRoot(container); 
                root.render(<PiChart
                      data={plotData}
                      pieSize={300}
                      svgSize={300}
                      innerRadius={90}
                      containerId={`pie${index}`}
                    />);
                // ReactDOM.render(
                //   <PiChart
                //     data={plotData}
                //     pieSize={400}
                //     svgSize={500}
                //     innerRadius={100}
                //     containerId="pie"
                //   />,
                //   element
                // );
              }
            }
            //  console.log(data)
          }
          //  console.log(element)
          // console.log(element.parentElement.append('<div>hi india...</div>'))
          // const data = await graphService.getGraphData({graph_shortcode: "[pie-chart;Robot Vacuum Cleaners;Noisiness:0-80,Can Mop:yes;Dirt sensor]" })
          // console.log(data)
        }
      });
      // const chartsElement = document.querySelectorAll(".render-chart");
      //console.log(chartsElement)
    };
    searchForPattern();
  });
  function regenerateData(data) {
    const chartData = [];
   // data=[1, 1, 2, 3, 5, 8, 13, 21]
  
    if (data && data.length > 0) {
      data.forEach((val) => {
        chartData.push({
          label: val,
          value:val,
        });
      });
    }

    return chartData;
  }
  return { showPieChart, chartData };
};

export default useChart;
