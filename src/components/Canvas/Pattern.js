import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Group } from 'react-konva'
import { getPatternNodes, getPatternPaths } from '../../store/sliceModel';
import Node from './Node';
import Path from "./Path";

const Pattern = ({ patternKey }) => {

    const patternNodes = useSelector(state => getPatternNodes(state, patternKey));
    const patternPaths = useSelector(state => getPatternPaths(state, patternKey));

    return (
        <Group key={patternKey}>
            {
                patternNodes.map(nodeKey => {
                    return <Node key={nodeKey} nodeKey={nodeKey} />
                })
            }{
                patternPaths.map(pathKey => {
                    return <Path key={pathKey} pathKey={pathKey} />
                })
            }
        </Group>
    )
}

export default memo(Pattern)