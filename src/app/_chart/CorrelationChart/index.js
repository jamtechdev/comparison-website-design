import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./index.css";
import { calculateNextStep } from "../utils/calculateTickStepCorrelation";
import { tickValues } from "../utils/computTicks";
function CorrelationChart(props) {
  const {
    data: correlationChartData,
    height,
    width,
    chartTitle,
    xLabel,
    yLabel,
    xTick,
    yTick,
    xUnit,
    yUnit,
    isGeneralAttribute_x,
    isGeneralAttribute_y,
    rangeMinX,
    rangeMaxX,
    rangeMinY,
    rangeMaxY,
  } = props;

  const svgContainer = useRef();
  let maxY = rangeMaxY ?? d3.max(correlationChartData.map((d) => d.value));
  let minY = rangeMinY ?? d3.min(correlationChartData.map((d) => d.value));
  let maxX =
    rangeMaxX ?? d3.max(correlationChartData.map((d) => Number(d.label)));
  let minX =
    rangeMinX ?? d3.min(correlationChartData.map((d) => Number(d.label)));
  let x_tick = xTick;
  let y_tick = yTick;

  if (isGeneralAttribute_x) {
    minX = 1;
    maxX = 10;
    x_tick = 10;
  }
  if (isGeneralAttribute_y) {
    minY = 1;
    maxY = 10;
    y_tick = 10;
  }
  // function tickValuesAdujst(start, end, noOfTicks, increment) {
  //   console.log("start--->" + start);
  //   console.log("end--->" + end);
  //   console.log("noOfTicks--->" + noOfTicks);
  //   console.log("increment--->" + increment);
  //   let ticks = [];
  //   let tempTick = [];
  //   let nextTickVal = start;
  //   let steps = noOfTicks;
  //   while (steps >= 0 && nextTickVal <= end) {
  //     tempTick.push(nextTickVal);
  //     nextTickVal += increment;
  //     steps--;
  //   }
  //   if (tempTick.length < noOfTicks) {
  //     tempTick.push(nextTickVal);
  //   }
  //   let tickValNeedToBeAppend = noOfTicks - tempTick.length;
  //   let tickValNeedToBeAppendFront = 0;
  //   let tickValNeedToBeAppendEnd = 0;
  //   if (tickValNeedToBeAppend > 0) {
  //     tickValNeedToBeAppendFront = Math.ceil(tickValNeedToBeAppend / 2);
  //     tickValNeedToBeAppendEnd =
  //       tickValNeedToBeAppend - tickValNeedToBeAppendFront;
  //   }

  //   console.log("tickValNeedToBeAppend-->", tickValNeedToBeAppend);
  //   console.log("tickValNeedToBeAppendFront-->", tickValNeedToBeAppendFront);
  //   console.log("tickValNeedToBeAppendEnd-->", tickValNeedToBeAppendEnd);
  //   console.log("tempTick-->", tempTick);
  //   let frontTick = [];
  //   let endTick = [];
  //   for (let i = tickValNeedToBeAppendFront; i > 0; i--) {
  //     frontTick.push(i * increment);
  //   }
  //   for (let i = 1; i <= tickValNeedToBeAppendEnd; i++) {
  //     endTick.push(i * increment);
  //   }
  //   let tempStartTick = tempTick[0];
  //   let tempEndTick = tempTick[tempTick.length - 1];
  //   for (let i = 0; i < noOfTicks; i++) {
  //     if (i <= frontTick.length - 1) {
  //       ticks[i] = Number(Math.abs(frontTick[i] - tempStartTick).toFixed(2));
  //     } else if (i > frontTick.length + tempTick.length - 1) {
  //       console.log("tetet--->", i, "--", frontTick.length + tempTick.length);
  //       ticks[i] = Number(
  //         (
  //           endTick[i - (frontTick.length + tempTick.length)] + tempEndTick
  //         ).toFixed(2)
  //       );
  //     } else {
  //       ticks[i] = Number(tempTick[i - frontTick.length].toFixed(2));
  //     }
  //   }
  //   console.log("frontTick--->", frontTick);
  //   console.log("endTick--->", endTick);
  //   console.log(ticks);
  //   return { ticks };
  // }
  function tickValuesAdujst(start, end, noOfTicks, increment, hasDecimal) {
    console.log("start--->" + start);
    console.log("end--->" + end);
    console.log("noOfTicks--->" + noOfTicks);
    console.log("increment--->" + increment);
  
    let ticks = [];
    
    if (hasDecimal) {
      // Existing logic for decimal values
      let tempTick = [];
      let nextTickVal = start;
      let steps = noOfTicks;
      
      while (steps >= 0 && nextTickVal <= end) {
        tempTick.push(nextTickVal);
        nextTickVal += increment;
        steps--;
      }
      
      if (tempTick.length < noOfTicks) {
        tempTick.push(nextTickVal);
      }
  
      // Additional logic for adjusting tick values when at least one is decimal
  
      // Populate the final ticks array
      ticks = tempTick.map((value) => Number(value.toFixed(2)));
    } else {
      // New logic for integer values
      let range = end - start;
      let interval = range / noOfTicks;
  
      for (let i = 0; i <= noOfTicks; i++) {
        ticks.push(Number((start + i * interval).toFixed(2)));
      }
    }
  
    console.log("ticks--->", ticks);
    return { ticks };
  }
  // if (minX == maxX) {
  //   minX = 0;
  // }
  // if (minY == maxY) {
  //   minY = 0;
  // }
  const margin = { top: 40, right: 35, bottom: 40, left: 35 };
  const { nextStepVal: yStep } = calculateNextStep(maxY, minY, y_tick);
  //const { ticks: yTickValues } = tickValues(minY, y_tick, yStep);
  const { ticks: yTickValues } = tickValuesAdujst(minY, maxY, y_tick, yStep, true);
  console.log("yTickValues--->", yTickValues);
  const { nextStepVal: xStep } = calculateNextStep(maxX, minX, x_tick);
  //const { ticks: xTickValues } = tickValues(minX, x_tick, xStep);
  const { ticks: xTickValues } = tickValuesAdujst(minX, maxX, x_tick, xStep, true);
  console.log("xTickValues--->", xTickValues);
  useEffect(() => {
    drawChart();
  }, [correlationChartData]);
  function drawChart() {
    d3.select(svgContainer.current).select("svg").remove();
    // Remove the old tooltip
    d3.select(svgContainer.current).select(".tooltip").remove();
    const translateX = margin.left + 15;
    const svg = d3
      .select(svgContainer.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .style("background-color", "#fff")
      .attr("transform", "translate(" + translateX + "," + margin.top + ")");

    //add tooltip
    const tooltip = d3
      .select(svgContainer.current)
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    //.attr("transform", `translate(${svgSize / 2}px, ${svgSize / 2}px)`);

    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", height - margin.top - margin.bottom)
      .attr("width", width - margin.left - margin.right)
      .style("fill", "#fff");
    // .style("stroke", "rgba(39, 48, 78, 0.1)");

    // Add X axis
    const xScale = d3
      .scaleLinear()
      .domain([xTickValues[0], xTickValues[xTickValues.length - 1]])
      .range([margin.left, width - margin.right]);
    //xScale.nice();

    const translateXaxis = {
      y: height - margin.top - margin.bottom,
      x: -margin.left,
    };
    // const xAxisGroups = svg
    //   .append("g")
    //   .attr("transform", `translate(${translateXaxis.x},${translateXaxis.y})`)
    //   .call(
    //     d3
    //       .axisBottom(xScale)
    //       .ticks(xTick)
    //       .tickSize(-(height - margin.top - margin.bottom))
    //   );
    //const xTickValues = d3.range(0, maxX + 1, maxX / xTick);
    const xAxisGroups = svg
      .append("g")
      .attr("transform", `translate(${translateXaxis.x},${translateXaxis.y})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(xTickValues)
          .tickFormat(customTickFormatXaxis)
          .tickSize(-(height - margin.top - margin.bottom))
      );
    xAxisGroups
      .selectAll("text")
      .attr("x", 0) // Adjust the horizontal position
      .attr("y", 10); // Adjust the vertical position
    //.style("text-anchor", "middle"); // Center the text

    //Add Y axis
    const yScale = d3
      .scaleLinear()
      .domain([yTickValues[0], yTickValues[yTickValues.length - 1]])
      .range([height - margin.top, margin.bottom]);
    // yScale.nice();

    const translateYaxis = {
      y: -margin.top,
      x: 0,
    };
    // const yAxisGroups = svg
    //   .append("g")
    //   .attr("transform", `translate(${translateYaxis.x},${translateYaxis.y})`)
    //   .call(
    //     d3
    //       .axisLeft(yScale)
    //       .ticks(yTick)
    //       .tickSize(-(width - margin.left - margin.right))
    //   );
    //const yTickValues = d3.range(0, maxY + 1, maxY / yTick);
    const yAxisGroups = svg
      .append("g")
      .attr("transform", `translate(${translateYaxis.x},${translateYaxis.y})`)
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(customTickFormaYaxis)
          .tickValues(yTickValues)
          .tickSize(-(width - margin.left - margin.right))
      );
    yAxisGroups
      .selectAll("text")
      .attr("x", -10) // Adjust the horizontal position
      .attr("y", 0); // Adjust the vertical position
    // .style("text-anchor", "middle"); // Center the text

    svg.selectAll(".tick line").attr("stroke", "rgba(39, 48, 78, 0.1)");
    svg.selectAll("path").attr("display", "none");

    //x axis label
    svg
      .append("text")
      .attr("class", "axis-label")
      .attr("text-anchor", "middle")
      .attr("x", (width - margin.left) / 2)
      .attr("y", height - margin.top + 20)
      //.attr("transform", "rotate(-90)")
      .text(xLabel);

    //y axis label
    svg
      .append("text")
      .attr("class", "axis-label")
      .attr("text-anchor", "middle")
      .attr("x", -margin.left - 55)
      .attr("y", (height - margin.top) / 2)
      //.attr("transform", "rotate(-90)")
      .text(yLabel);

    //plot graph
    // Add dots
    const dotGroups = svg
      .append("g")
      .selectAll("dot")
      .data(correlationChartData)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return xScale(d.label) - margin.left;
      })
      .attr("cy", function (d) {
        return yScale(d.value) - margin.top;
      })
      .attr("r", 7)
      .attr("class", "hover-effect")
      .style("fill", "#437ECE")
      .on("mouseover", (e, data) => {
        tooltip.transition().duration(300).style("opacity", 1);
        tooltip
          .html(
            `<div class="tooltip-font">
            <span style="margin-right:4px">
            ${data.label} ${xUnit} , ${data.value} ${yUnit}
            </span>
            <span>${
              data.productCount ? `(${data.productCount})` : ""
            }</span></div>`
          )
          .style("left", e.clientX - 20 + "px")
          .style("top", e.clientY - 50 + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(300).style("opacity", 0);
      });

    function customTickFormaYaxis(d) {
      if (!Number.isInteger(d)) {
        const formateFunction = d3.format(".2f");
        return `${formateFunction(d)} ${yUnit}`;
      } else {
        const formateFunction = d3.format(".0f");
        return `${formateFunction(d)} ${yUnit}`;
      }
    }
    function customTickFormatXaxis(d) {
      if (!Number.isInteger(d)) {
        const formateFunction = d3.format(".2f");
        return `${formateFunction(d)} ${xUnit}`;
      } else {
        const formateFunction = d3.format(".0f");
        return `${formateFunction(d)} ${xUnit}`;
      }
    }
  }
  return (
    <div
      style={{
        "align-items": "center",
        "flex-direction": "column",
        display: "flex",
      }}
    >
      <span
        style={{ "max-width": width, "text-align": "center" }}
        className="chartTitle"
      >
        {chartTitle}
      </span>
      <div
        ref={svgContainer}
        style={{ "background-color": "#fff", "padding-right": "20px" }}
      ></div>
    </div>
  );
}
export default CorrelationChart;
