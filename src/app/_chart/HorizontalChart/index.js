import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./index.css";

function HorizontalChart(props) {
  const { data, height, width, chartTitle,xUnit,yUnit } = props;
  const svgContainer = useRef();
  const colors = [
    "#658fde",
    "#6d9dec",
    "#7caaef",
    "#8eb9f1",
    "#abcdf6",
    "#c9e0fa",
  ];
  const margin = { top: 20, right: 30, bottom: 20, left: 120 };
  const newWidth = width - margin.left - margin.right;
  const newHeight = height - margin.top - margin.bottom;

  // const minValue = d3.min(data, (d) => d.label);
  // const maxValue = d3.max(data, (d) => d.label);
  const minValue = d3.min(data, (d) => d.value);
  const maxValue = d3.max(data, (d) => d.value);

  useEffect(() => {
    drawChart();
  }, [data]);
  function drawChart() {
    // const customColorScale = d3.scaleOrdinal();
    // customColorScale.range(colors);

    d3.select(svgContainer.current).select("svg").remove();

    const svg = d3
      .select(svgContainer.current)
      .append("svg")
      .attr("width", newWidth + margin.left + margin.right)
      .attr("height", newHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //setting scaling

    const xScale = d3.scaleLinear().domain([0, maxValue]).range([0, newWidth]);
    svg
      .append("g")
      .attr("transform", "translate(0," + newHeight + ")")
      // .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    const yScale = d3
      .scaleBand()
      .range([0, newHeight])
      .domain(
        data.map(function (d) {
          return d.label;
        })
      )
      .padding(0.2);

    svg
      .append("g")
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(formateYaxisLabel)
          .tickSizeOuter(0)
          .tickSizeInner(0)
      );

    svg
      .selectAll("myRect")
      .data(data)
      .join("rect")
      .attr("x", xScale(0))
      .attr("y", (d) => yScale(d.label))
      .attr("width", (d) => xScale(d.value) - 20)
      .attr("height", yScale.bandwidth())
      .attr("fill", "#4B90E1")
      .attr("class", "rect-size")
      .style("opacity", (d) => {
        return d.value / maxValue;
      });

    svg
      .selectAll(".span-label")
      .data(data)
      .enter()
      .append("text").
      attr("class",'bar-label')
      .attr("x", function (d, i) {
        return xScale(d.value); // Adjust horizontal positioning
      })
      .attr("y", function (d) {
        return yScale(d.label) + yScale.bandwidth() / 2; // Adjust vertical positioning
      })
      .text(function (d) {
        return `${d.value} ${xUnit}`;
      });

    svg.select("path").style("display", "none");
  }
  function formateYaxisLabel(d, i) {
    return `${i + 1}. ${d}`;
  }
  return (
    <div
      style={{
        "align-items": "center",
        "flex-direction": "column",
        display: "flex",
      }}
    >
      <span  style={{ "max-width": width, "text-align": "center","margin-bottom": "-10px" }} className="chartTitle">{chartTitle}</span>
      <div ref={svgContainer}></div>
    </div>
  );
}
export default HorizontalChart;
