import React from "react";

import { CellHeight, CellWidth, ColumnsPerPage, DirectionType, RowsPerPage } from "../../../Constants";

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
                width: pageNum * ColumnsPerPage * CellWidth,
            } : {
                height: pageNum * RowsPerPage * CellHeight,
                width: 1
            }
        }></div>
        )
    }
}

export default PlaceHolder;