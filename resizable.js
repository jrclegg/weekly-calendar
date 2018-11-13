import React from "react";
import type {Props as ResizableProps, ResizeCallbackData} from './resizable';
import { Resizable } from 'react-resizable';
import type {Node as ReactNode} from 'react';

class ResizableBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            width: this.props.width,
            height: this.props.height,
        }
    }

    onResize = (event, data) => {
        const {size} = data;
        const {width, height} = size;
        this.setState(size);
    };

    render(): ReactNode {
        // Basic wrapper around a Resizable instance.
        // If you use Resizable directly, you are responsible for updating the child component
        // with a new width and height.
        const {handleSize, onResize, onResizeStart, onResizeStop, draggableOpts,
            minConstraints, maxConstraints, lockAspectRatio, axis, width, height, ...props} = this.props;
        return (
            <Resizable
                handleSize={handleSize}
                width={this.state.width}
                height={this.state.height}
                onResizeStart={onResizeStart}
                onResize={this.onResize}
                onResizeStop={onResizeStop}
                minConstraints={minConstraints}
                maxConstraints={maxConstraints}
                axis={axis}
            >
                <div style={{width: this.state.width + 'px', height: this.state.height + 'px'}} {...props} />
            </Resizable>
        );
    }
}

export default ResizableBox
