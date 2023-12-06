import React, { createRef, useEffect } from "react";
import * as d3 from "d3";
import classnames from "classnames";
import drawAxis from "./axis";
//import drawTooltip from "./tooltip"
import "./index.scss";

const BaseChart = (drawChart, extraProps) => {
  function Chart(props) {
    const svgRef = React.createRef();
    const tooltipRef = React.createRef();
    const {
      chartTitle,
      axisProps,
      data,
      svgProps,
      tooltipClass,
      scaleBandPadding,
      ...restProps
    } = props;
    const { tick } = axisProps;
    const { useScaleBands, findHoverData } = extraProps;

    const { margin, width, height, svgContainerClass } = svgProps;

    const yMinValue = d3.min(data, (d) => d.value);
    const yMaxValue = d3.max(data, (d) => d.value);

    const xMinValue = d3.min(data, (d) => d.label);
    const xMaxValue = d3.max(data, (d) => d.label);

    let xScale = d3
      .scaleLinear()
      .domain([xMinValue, xMaxValue])
      .range([0, width]);

    if (useScaleBands.x) {
      xScale = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d) => d.label))
        .padding(scaleBandPadding);
    }

    let yScale = d3.scaleLinear().range([height, 0]).domain([0, yMaxValue]);

    if (useScaleBands.y) {
      yScale = d3
        .scaleBand()
        .range([height, 0])
        .domain(data.map((d) => d.value))
        .padding(scaleBandPadding);
    }

    useEffect(() => {
      flushChart();
      draw();
    });

    function flushChart() {
      d3.select(svgRef.current).selectAll("*").remove();
    }

    function draw() {
      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left + 20},${margin.top - 60})`);

      drawAxis({
        ...axisProps,
        ...svgProps,
        ...extraProps,
        data,
        svgRef,
        xScale,
        yScale,
      });

      drawChart({
        svgRef,
        tooltipRef,
        data,
        xScale,
        yScale,
        ...svgProps,
        ...restProps,
      });
    }

    return (
      <div
        style={{
          "align-items": "center",
          "flex-direction": "column",
          display: "flex",
        }}
      >
        {" "}
        <span className="chartTitle" style={{ "margin-bottom": "6px" }}>
          {chartTitle}
        </span>
        <div className="base__container">
          <svg
            ref={svgRef}
            className={classnames("base__svg-container", svgContainerClass)}
          />
          <div
            className={classnames("base__tooltip", tooltipClass)}
            ref={tooltipRef}
          />
        </div>
      </div>
    );
  }

  Chart.defaultProps = {
    scaleBandPadding: 0.4,
  };

  return Chart;
};
export default BaseChart;
