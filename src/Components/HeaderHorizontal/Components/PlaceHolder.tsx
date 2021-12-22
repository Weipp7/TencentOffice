import React from "react";

import { CellHeight, CellWidth, ColumnsPerPage, DirectionType, RowsPerPage } from "../../Constants";

interface IPlaceHolderProp {
    type: DirectionType,
    numPage: number
}

class PlaceHolder extends React.Component<IPlaceHolderProp> {
    render() {
        const {type, numPage} = this.props;
        return (
            <div style= {type === DirectionType.HORIZONTAL ? {
                float: "left",
                height: 1,
                width: numPage * ColumnsPerPage * CellWidth,
            } : {
                float: "left",
                height: numPage * RowsPerPage * CellHeight,
                width: 1
            }
        }></div>
        )
    }
}

export default PlaceHolder;