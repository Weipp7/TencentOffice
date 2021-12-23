import React from "react";

import './HeaderCell.css'

import { CellHeight, CellWidth, DirectionType, HeaderHorizontalHeight, HeaderVerticalWidth } from "../../../Constants";
import { toName } from "../../../Commons/utils";

interface IHeaderCellProps {
    type: DirectionType,
    index: number
}

class HeaderCell extends React.Component<IHeaderCellProps> {
    render() {
        const {type, index} = this.props;
        return (
            <div className="header-cell" 
                style={type === DirectionType.HORIZONTAL ? {
                    height: HeaderHorizontalHeight,
                    width: CellWidth,
                    lineHeight: HeaderHorizontalHeight + "px",
                    float: "left"
                } : {
                    height: CellHeight,
                    width: HeaderVerticalWidth,
                    lineHeight: CellHeight + "px"
                }
            }>
                {
                    type === DirectionType.HORIZONTAL ? toName(index) : index
                }
            </div>
        );
    }
}

export default HeaderCell;