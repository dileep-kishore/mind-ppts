/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import { scaleOrdinal, schemeCategory20 } from 'd3';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

function Network(props) {
  const { height, width, radiusMargin, radius } = props;
  const nodeData = props.data.nodes;
  const linkData = props.data.links.filter(l => l.pvalue < l.pval_cutoff);
  const getTaxa = (d) => {
    const lineageArray = d.split('-');
    const dlen = lineageArray.length;
    return lineageArray[dlen - 2];
  };
  const colorScale = scaleOrdinal(schemeCategory20);
  const nodes = nodeData.map(d => (
    <ForceGraphNode
      key={d.id}
      node={{ id: d.id, label: d.name, radius }}
      fill={colorScale(getTaxa(d.lineage))}
    />
  ));
  const links = linkData.map(l => (
    <ForceGraphLink
      key={`${l.source}_${l.target}`}
      link={{ source: l.source, target: l.target, value: Math.abs(l.weight) * 5 }}
      stroke={l.weight < 0 ? 'red' : 'green'}
      strokeWeight={Math.abs(l.weight) * 5}
    />
  ));
  return (
    <InteractiveForceGraph
      zoom
      simulationOptions={
        {
          height,
          width,
          radiusMargin,
          animate: true,
          strength: {
            charge: -10,
          },
        }
      }
      highlightDependencies
      labelAttr="label"
    >
      {nodes}
      {links}
    </InteractiveForceGraph>
  );
}

Network.defaultProps = {
  height: 500,
  width: 500,
  radiusMargin: 20,
  radius: 10,
};

Network.propTypes = {
  radius: PropTypes.number,
  radiusMargin: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  nodes: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired,
};

export default Network;
