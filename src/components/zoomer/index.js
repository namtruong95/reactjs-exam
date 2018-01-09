import React from 'react'
import './style.css'
import * as d3 from 'd3'
import data from './data.json'

class D3 extends React.Component {

  margin = {top: 20, right: 90, bottom: 30, left: 90}
  width = 960 - this.margin.left - this.margin.right
  height = 900 - this.margin.top - this.margin.bottom
  svg
  i = 0
  duration = 750
  treemap = d3.tree().size([this.height, this.width])
  root

  componentDidMount() {
    this.width = document.getElementById('Tree').clientWidth - this.margin.left - this.margin.right;
    this.height = document.getElementById('Tree').clientHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(this.refTree).append("svg")
      .call(this.zoomListener)
      .attr("width", this.width + this.margin.right + this.margin.left)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", `translate(${this.margin.top},${this.margin.left})`)

    // Assigns parent, children, height, depth
    this.root = d3.hierarchy(data, (d) => { return d.children })
    this.root.x0 = this.height / 2
    this.root.y0 = 0

    // Collapse after the second level
    this.root.children.forEach(d => this.collapse(d))
    this.update(this.root)
    this.centerNode(this.root)
  }

  // zoomer
  zoomListener = d3.zoom().on("zoom", () => this.zoom());

  zoom() {
    this.svg.attr("transform", d3.event.transform)
  }

  centerNode(source) {
    let t = d3.zoomTransform(this.svg.node());
    let y = -source.y0;
    let x = -source.x0;
    x = x * t.k + this.width / 2;
    y = y * t.k + this.height / 2;

    d3.select('svg')
      .transition()
      .duration(this.duration)
      .call(this.zoomListener.transform,
        d3.zoomIdentity.translate(x,y).scale(t.k) );
  }

  // Collapse the node and all it's children
  collapse(d) {
    if(d.children) {
      d._children = d.children
      d._children.forEach(cD => this.collapse(cD))
      d.children = null
    }
  }

  update(source) {

    // Assigns the x and y position for the nodes
    let treeData = this.treemap(this.root)
    // Compute the new tree layout.
    let nodes = treeData.descendants(),
        links = treeData.descendants().slice(1)
    // Normalize for fixed-depth.
    nodes.forEach((d) =>{ d.y = d.depth * 180})

    // ****************** Nodes section ***************************

    // Update the nodes...
    let node = this.svg.selectAll('g.node')
        .data(nodes, (d) => { return d.id || (d.id = ++this.i) })

    // Enter any new modes at the parent's previous position.
    let nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", (d) => {
        return `translate(${source.x0},${source.y0})`
      })
      .on('click', (d) => this.click(d))

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", (d) => {
            return d._children ? "lightsteelblue" : "#fff"
        })

    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", (d) => {
          return d.children || d._children ? -20 : 25
        })
        .attr("text-anchor", "middle")
        .text((d) => { return d.data.name })

    // UPDATE
    let nodeUpdate = nodeEnter.merge(node)
    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(this.duration)
      .attr("transform", (d) => {
          return `translate(${d.x},${d.y})`
       })

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", (d) => {
          return d._children ? "lightsteelblue" : "#fff"
      })
      .attr('cursor', 'pointer')
      .on('contextmenu', (d) => {
        d3.event.preventDefault()

        this.rightClick(d)
      })


    // Remove any exiting nodes
    let nodeExit = node.exit().transition()
        .duration(this.duration)
        .attr("transform", (d) => {
            return `translate(${source.x},${source.y})`
        })
        .remove()

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6)

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6)

    // ****************** links section ***************************

    // Update the links...
    let link = this.svg.selectAll('path.link')
        .data(links, (d) => { return d.id })

    // Enter any new links at the parent's previous position.
    let linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', (d) => {
          const o = {x: source.x0, y: source.y0}
          return this.diagonal(o, o)
        })

    // UPDATE
    let linkUpdate = linkEnter.merge(link)

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(this.duration)
        .attr('d', (d) => { return this.diagonal(d, d.parent) })

    // Remove any exiting links
    link.exit().transition()
        .duration(this.duration)
        .attr('d', (d) => {
          const o = { x: source.x, y: source.y }
          return this.diagonal(o, o)
        })
        .remove()

    // Store the old positions for transition.
    nodes.forEach((d) => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }

  rightClick(d) {
    console.log(d)
  }

  // Toggle children on click.
  click(d) {
    if (d.children) {
        d._children = d.children
        d.children = null
      } else {
        d.children = d._children
        d._children = null
      }
    this.update(d)
    this.centerNode(d);
  }

  // Creates a curved (diagonal) path from parent to the child nodes
  diagonal(s, d) {
    return `M ${s.x} ${s.y} C ${s.x} ${(s.y + d.y) / 2}, ${d.x} ${(s.y + d.y) / 2}, ${d.x} ${d.y}`
  }

  render() {
    return (
      <div id="Tree" className="tree" ref={r => this.refTree = r}></div>
    )
  }
}

export default D3
