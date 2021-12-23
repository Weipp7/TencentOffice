import React from "react";
import {
    CellHeight,
    CellWidth,
    ColumnsPerPage,
    DirectionType,
    HeaderHorizontalHeight,
    HeaderVerticalWidth,
    RowsPerPage
} from "../../../Constants";

interface IHHContainerProp {
    type: DirectionType,
    headerRef: React.RefObject<HTMLDivElement>,
    holdPagesNum: number
}

/**
 * 盛装表头单元格的容器
 */
class CellsContainer extends React.Component<IHHContainerProp> {
    render() {
        return (
            <div ref={this.props.headerRef}
                style={this.props.type === DirectionType.HORIZONTAL ? {
                    overflow: "hidden",
                    position: "absolute",
                    left: HeaderVerticalWidth,
                    top: 0,
                    height: HeaderHorizontalHeight,
                    width: `calc(100% - ${HeaderVerticalWidth}px)`
                } : {
                    overflow: "hidden",
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "100%",
                    width: HeaderVerticalWidth
                }}
            >

                <div
                    style={this.props.type === DirectionType.HORIZONTAL ? {
                        height: "100%",
                        width: this.props.holdPagesNum * ColumnsPerPage * CellWidth
                    } : {
                        height: this.props.holdPagesNum * RowsPerPage * CellHeight,
                        width: "100%"
                    }}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CellsContainer;