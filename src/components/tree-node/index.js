import React from 'react'
import * as d3 from 'd3'
import './styles.css'

import data from './data.json'

class TreeNode extends React.Component {

  componentDidMount() {
    const height = 700,
          width = 500;

    const chart = d3.select(this.chartRef)
    .attr('width', width + 100)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(0, 200)');

  const tree = d3.tree()
    .size([height - 150, width - 150]);

  const stratify = d3.stratify()
    .id((d) => {
      return d.name;
    })
    .parentId((d) => {
      return d.parent;
    });

  const root = stratify(data)
    .sort((a, b) => {
      return (a.height - b.height) || a.id.localeCompare(b.id);
    });

  chart.selectAll('.link')
    .data(tree(root).links())
    .enter()
      .append('path')
        .attr('class', 'link')
        .attr("d", d3.linkVertical()
          .x((d) => {
            return d.x;
          })
          .y((d) => {
            return d.y;
          })
        );

  const node = chart.selectAll('.node')
    .data(root.descendants())
    .enter()
      .append('g')
        .attr("class", (d) => {
          return "node" + (d.children ? " node--internal" : " node--leaf");
        })
        .attr("transform", (d) => {
          return `translate(${d.x},${d.y})`;
        });

  node.append('circle')
    .attr('r', 2.5);

  node.append("text")
    .attr("dy", (d) => {
      return d.children ? -8 : 20
    })
    .style("text-anchor", "middle")
    .text((d) => {
      return d.id;
    });
  }


  render() {
    return (
      <svg ref={(r) => this.chartRef = r}></svg>
    )
  }
}

export default TreeNode
