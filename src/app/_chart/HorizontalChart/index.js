import { useRef, useEffect } from "react";
import * as d3 from "d3";
import "./index.css";

function HorizontalChart(props) {
  const { data, height, width } = props;
  const svgContainer = useRef();
  const minValue = d3.min(data, (d) => d.value);
  const maxValue = d3.max(data, (d) => d.value);
  console.log(svgContainer);
  const margin = {
    top: 20,
    right: 50,
    bottom: 20,
    left: 50,
  };
  useEffect(() => {
    console.log(data)
    drawChart();
  }, [data]);
  function drawChart() {
    //setting svg container
    const svg = d3
      .select(svgContainer.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    //setting scaling

    let xScale = d3.scaleLinear().range([width, 0]).domain([0, maxValue]);

  let yScale = d3
      .scaleBand()
      .range([height, 0])
      .domain(data.map((d) => d.value))
      .padding(0.09);
  }
  //setting axis

  //setting svg data

  return <div ref={svgContainer}>fdfdf</div>;
}
export default HorizontalChart;
