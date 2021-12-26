import React from "react";

import { CellHeight, CellWidth, DirectionType, HeaderHorizontalHeight, HeaderVerticalWidth } from "../../../Constants";
import { toName } from "../../../Commons/utils";

interface IHeaderCellProps {
    type: DirectionType,
    index: number,
    selectedStart: number,
    selectedEnd: number
}

class HeaderCell extends React.Component<IHeaderCellProps> {
    selectedStyle: React.CSSProperties;

    commonStyle: React.CSSProperties = {
        position: "relative",
        fontSize: 12,
        textAlign: "center",
    }

    constructor(props: IHeaderCellProps) {
        super(props);
        this.selectedStyle = this.props.type === DirectionType.HORIZONTAL ? 
            {
                backgroundColor: "#e0e0e0",
                color: "#2979ff",
                fontWeight: "bold",
                borderBottom: "2px solid #2979ff"
            } : {
                backgroundColor: "#e0e0e0",
                color: "#2979ff",
                fontWeight: "bold",
                borderRight: "2px solid #2979ff",
            }
    }
    
    render() {
        const {type, index} = this.props;
        const {selectedStart, selectedEnd} = this.props;

        const isSelected = index >= Math.min(selectedStart, selectedEnd) && index <= Math.max(selectedStart, selectedEnd);

        const selectedStyle = isSelected ? this.selectedStyle : {};

        return (
            <div 
                style={type === DirectionType.HORIZONTAL ? {
                    height: HeaderHorizontalHeight,
                    width: CellWidth,
                    lineHeight: HeaderHorizontalHeight + "px",
                    float: "left",
                    boxSizing: "border-box",
                    borderRight: "1px solid #dfdfdf",
                    ...this.commonStyle,
                    ...selectedStyle
                } : {
                    height: CellHeight,
                    width: HeaderVerticalWidth,
                    lineHeight: CellHeight + "px",
                    boxSizing: "border-box",
                    borderBottom: "1px solid #dfdfdf",
                    ...this.commonStyle,
                    ...selectedStyle
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