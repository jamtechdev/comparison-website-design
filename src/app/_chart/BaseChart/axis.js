import React, { forwardRef, useEffect } from "react";
import * as d3 from "d3";
import classnames from "classnames";

function drawAxis(config) {
  const {
    margin,
    width,
    height,
    drawXAxis,
    drawYAxis,
    drawXGridlines,
    drawYGridlines,
    xLabel,
    yLabel,
    axisClass,
    gridClass,
    data,
    svgRef,
    xScale,
    yScale,
    tick
  } = config;

  const svg = d3.select(svgRef.current).select("g");
  if (drawYGridlines)
    svg
      .append("g")
      .attr("class", classnames(["base__gridlines gridlines__y", gridClass]))
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));

  if (drawXGridlines)
    svg
      .append("g")
      .attr("class", classnames(["base__gridlines gridlines__x", gridClass]))
      .call(d3.axisLeft(yScale).ticks(tick).tickSize(-width).tickFormat(""));

  svg
    .append("g")
    .attr("class", classnames(["base__axis axis__x moreDigit fontStyle", axisClass]))
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).tickFormat(customTickFormatXaxis));

  svg
    .append("g")
    .attr("class", classnames(["base__axis axis__y fontStyle", axisClass]))
    .call(d3.axisLeft(yScale).ticks(tick).tickFormat(customTickFormat));

  if (xLabel)
    svg
      .append("text")
      .attr("class", "base__axis-label axis__x-label")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.top / 2)
      .text(xLabel);

  if (yLabel)
    svg
      .append("text")
      .attr("class", "base__axis-label axis__y-label")
      .attr("text-anchor", "middle")
      .attr("x", (-margin.left/2)-20)
      .attr("y", height / 2)
      //.attr("transform", "rotate(-90)")
      .text(yLabel);
}
function customTickFormat(d) {
  return d + "%";
}
function customTickFormatXaxis(d) {
  return `${d} W`;
}
export default drawAxis;
