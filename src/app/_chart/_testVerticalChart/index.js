import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./index.css";

function VerticalChart(props) {
  const {
    data: verticalChartData,
    height,
    width,
    chartTitle,
    xLabel,
    yLabel,
    // xTick,
    // yTick,
  } = props;

  const svgContainer = useRef();
  const maxY = d3.max(verticalChartData.map((d) => d.value));
  const minY = d3.min(verticalChartData.map((d) => d.value));
  const maxX = d3.max(verticalChartData.map((d) => d.label));
  const minX = d3.min(verticalChartData.map((d) => d.label));

  const margin = { top: 10, right: 70, bottom: 10, left: 70 };

  useEffect(() => {
    drawChart();
  }, [verticalChartData]);
  function drawChart() {
    d3.select(svgContainer.current).select("svg").remove();
    // Remove the old tooltip
    d3.select(svgContainer.current).select(".tooltip").remove();

    const svg = d3
      .select(svgContainer.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr('fill','red')
      .style("background-color", "red")
      .attr("transform", "translate(" + margin.left + "," + -margin.top + ")");

      const yScale = d3
      .scaleLinear()
      .domain([0,maxY])
      .range([height-margin.top, 0]);


      const yAxisGroups = svg
      .append("g")
     // .attr("transform", `translate(${translateYaxis.x},${translateYaxis.y})`)
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(-(width - margin.left - margin.right))
      ); 

    console.log(yScale.domain()) 
    console.log(yScale.range()) 
      const xScale = d3
      .scaleBand()
      .domain(verticalChartData.map(function (d) {
        return d.label
      }))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    

      console.log(xScale.domain()) 
      console.log(xScale.range()) 

    //   svg
    //   .selectAll("myRect")
    //   .data(data)
    //   .join("rect")
    //   .attr("x", x(0))
    //   .attr("y", (d) => y(d.value))
    //   .attr("width", (d) => x(d.label) - 20)
    //   .attr("height", y.bandwidth())
    //   .attr("fill", "#4B90E1")
    //   .attr("class", "rect-size")
    //   .style("opacity", (d) => {
    //     return d.label / maxValue;
    //   });

      svg
      .selectAll("myRect")
      .data(verticalChartData)
      .join("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y",(d) => yScale(d.value))
      .attr("height", (d) => height-margin.top - yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("fill", "#4B90E1")
      .attr("class", "rect-size")

    
   
  }
  return (
    <div
      style={{
        "margin-top":'20px',
        "margin-bottom":'20px',
        "align-items": "center",
        "flex-direction": "column",
        display: "flex",
      }}
    >
      <span className="chartTitle">{chartTitle}</span>
      <div ref={svgContainer} style={{ "background-color": "#fff" }}></div>
    </div>
  );
}
export default VerticalChart;
