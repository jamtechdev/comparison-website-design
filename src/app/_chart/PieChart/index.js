// @flow weak
import React, { useEffect } from "react";
import * as d3 from "d3";
import './index.css'
function PieChart(props) {
  const { pieSize, svgSize, data, containerId, innerRadius } = props;

  const outerRadius = pieSize / 2;
  const center = svgSize / 2;

  const legendWidth = 200; // Adjust this width as needed
  const legendHeight = 20 * data.length;

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    // Remove the old chart
    d3.select(`#${containerId}`).select("svg").remove();

    // Remove the old tooltip
    d3.select(`#${containerId}`).select(".tooltip").remove();

    const margin = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    };

    const yMinValue = d3.min(data, (d) => d.value);
    const yMaxValue = d3.max(data, (d) => d.value);

    // const colorScale = d3
    //   .scaleSequential()
    //   .interpolator(d3.interpolateCool)
    //   .domain([yMinValue, yMaxValue]);

    const customColorScale = d3.scaleOrdinal();
    customColorScale.range([
      "#437ECE",
      "#99D1FF",
      "#154B76",
      "#1D9CFF",
      "#96DCF2",
      "#D8E5ED",
      "#E7F4FF",
    ]);

    d3.select(`#${containerId}`)
      .style("width", `${svgSize + margin.right + margin.left}px`)
      .style("height", `${svgSize + margin.top + margin.bottom}px`);

    //create legend start
    // const legendData = [
    //   { label: "Category A", color: "#FF5733" },
    //   { label: "Category B", color: "#0066FF" },
    //   { label: "Category C", color: "#33CC33" },
    //   // Add more entries as needed
    // ];
    const legendMainContainer = d3.select(`#${containerId}`);
    const legendContainer = legendMainContainer.append("div");

    const legendItems = legendContainer
      .selectAll("div") // Create a selection of <div> elements
      .data(data) // Bind data to the selection
      .enter()
      .append("div")
      .attr("class", "legend-item");

    legendItems
      .append("div")
      .style("width", "12px") // Customize the width of the colored square
      .style("height", "12px") // Customize the height of the colored square
      .style("background-color", (d) => customColorScale(d.value));

    legendItems.append("span").text((d) => d.label);
    //legend end

    const svg = d3
      .select(`#${containerId}`)
      .append("svg")
      .attr("width", svgSize + margin.left + margin.right)
      .attr("height", svgSize + margin.top + margin.bottom);

    const g = svg.append("g");

    g.attr("class", "sectors").attr(
      "transform",
      `translate(${center + margin.left}, ${center + margin.top})`
    );

    const arcGeneral = d3
      .arc()
      .innerRadius(innerRadius || 0)
      .outerRadius(outerRadius);

    // const arcHover = d3
    //   .arc()
    //   .innerRadius(innerRadius || 0)
    //   .outerRadius(outerRadius + 10);

    const pie = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = g.selectAll("pie").data(pie(data)).enter().append("g");

    // Append tooltip
    // const tooltip = d3
    //   .select(`#${containerId}`)
    //   .append('div')
    //   .attr('class', 'tooltip')
    //   .style('opacity', 0)
    //   .attr('transform', `translate(${svgSize / 2}px, ${svgSize / 2}px)`);

    arc
      .append("path")
      .attr("d", arcGeneral)
      .style("fill", (d) => customColorScale(d.data.value))
      .style("stroke", "#ffffff")
      .style("stroke-width", 2);
    // .on('mouseover', (d, i, nodes) => {
    //   d3.select(nodes[i])
    //     .transition()
    //     .duration(300)
    //     .attr('d', arcHover);
    //   tooltip
    //     .transition()
    //     .duration(300)
    //     .style('opacity', 0.9);
    //   tooltip.html(d.data.tooltipContent || d.data.label || d.data.value);
    // })
    // .on('mouseout', (d, i, nodes) => {
    //   if (d3.event.target.parentNode !== d3.event.relatedTarget.parentNode) {
    //     d3.select(nodes[i])
    //       .transition()
    //       .duration(300)
    //       .attr('d', arcGeneral);
    //     tooltip
    //       .transition()
    //       .duration(300)
    //       .style('opacity', 0);
    //   }
    // });

    const label = d3.arc().outerRadius(outerRadius).innerRadius(innerRadius);
    const text = arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      //.text((d) => d.data.label)
      .style("fill", "#ffffff");
    text.attr("transform", (d) => {
      const [x, y] = label.centroid(d);
      return `translate(${x}, ${y})`;
    });
    const labelsData = [];
    text.each((d, i, texts) => {
      labelsData.push({
        el: texts[i],
        centroid: label.centroid(d),
        startAngle: d.startAngle,
        endAngle: d.endAngle,
      });
    });
  }

  return <div id={containerId} className="container pieChart" />;
}

export default PieChart;
