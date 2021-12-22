import React from "react";

import './HeaderCell.css'

import { CellWidth, HeaderHorizontalHeight } from "../../Constants";

interface IHeaderCellProps {
    name: string
}

class HeaderCell extends React.Component<IHeaderCellProps> {
    render() {
        return (
            <div className="header-cell" 
                style={{
                    height: HeaderHorizontalHeight,
                    width: CellWidth,
                    lineHeight: HeaderHorizontalHeight + "px",
                    float: "left"
                }}>
                {this.props.name}
            </div>
        );
    }
}

export default HeaderCell;