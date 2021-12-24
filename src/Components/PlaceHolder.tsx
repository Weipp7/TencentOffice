import React from "react";

import { DirectionType, PageHeight, PageWidth } from "../Constants";

interface IPlaceHolderProp {
    type: DirectionType,
    pageNum: number
}

class PlaceHolder extends React.Component<IPlaceHolderProp> {
    render() {
        const {type, pageNum} = this.props;
        return (
            <div style= {type === DirectionType.HORIZONTAL ? {
                float: "left",
                height: 1,
                width: pageNum * PageWidth,
            } : {
                height: pageNum * PageHeight,
                width: 1
            }
        }></div>
        )
    }
}

export default PlaceHolder;