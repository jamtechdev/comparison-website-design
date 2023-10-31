import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./index.css";

function HorizontalChart(props) {
  const { data, height, width, chartTitle } = props;
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

  const minValue = d3.min(data, (d) => d.label);
  const maxValue = d3.max(data, (d) => d.label);
  console.log(minValue + "-----" + maxValue);

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

    const x = d3.scaleLinear().domain([0, maxValue]).range([0, newWidth]);
    svg
      .append("g")
      .attr("transform", "translate(0," + newHeight + ")")
      // .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    var y = d3
      .scaleBand()
      .range([0, newHeight])
      .domain(
        data.map(function (d) {
          return d.value;
        })
      )
      .padding(0.2);

    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(formateYaxisLabel)
          .tickSizeOuter(0)
          .tickSizeInner(0)
      );

    svg
      .selectAll("myRect")
      .data(data)
      .join("rect")
      .attr("x", x(0))
      .attr("y", (d) => y(d.value))
      .attr("width", (d) => x(d.label) - 20)
      .attr("height", y.bandwidth())
      .attr("fill", "#4B90E1")
      .attr("class", "rect-size")
      .style("opacity", (d) => {
        return d.label / maxValue;
      });

    svg
      .selectAll(".span-label")
      .data(data)
      .enter()
      .append("text").
      attr("class",'bar-label')
      .attr("x", function (d, i) {
        return x(d.label); // Adjust horizontal positioning
      })
      .attr("y", function (d) {
        return y(d.value) + y.bandwidth() / 2; // Adjust vertical positioning
      })
      .text(function (d) {
        return d.label;
      });

    svg.select("path").style("display", "none");
  }
  function formateYaxisLabel(d, i) {
    return `${i + 1}. ${d}`;
  }
  return (
    <div style={{"align-items": "center","flex-direction": "column","display": "flex"}}>
      <span className="chartTitle">{chartTitle}</span>
      <div ref={svgContainer}></div>
    </div>
  );
}
export default HorizontalChart;
