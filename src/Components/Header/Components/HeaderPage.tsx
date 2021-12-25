import React from "react";
import { ColumnsPerPage, DirectionType, HeaderHorizontalHeight, HeaderVerticalWidth, PageHeight, PageWidth, RowsPerPage } from "../../../Constants";
import HeaderCell from "./HeaderCell";

interface IHeaderPageProp {
    type: DirectionType,
    startIndex: number,
    selectedStart: number,
    selectedEnd: number
}

class HeaderPage extends React.Component<IHeaderPageProp> {
    render() {
        const {type, startIndex} = this.props;
        const cellsNum = type === DirectionType.HORIZONTAL ? ColumnsPerPage : RowsPerPage;
        let cells = [];
        for (let i = startIndex; i <= startIndex + cellsNum - 1; i++) {
            cells.push(<HeaderCell key={i} type={type} index={i} selectedStart={this.props.selectedStart} selectedEnd={this.props.selectedEnd}/>);
        }
        return (
            <div
                style={ type === DirectionType.HORIZONTAL ? {
                    float: "left",
                    height: HeaderHorizontalHeight,
                    width: PageWidth
                } : {
                    height: PageHeight,
                    width: HeaderVerticalWidth
                }}
            >
                {cells}
            </div>
        )
    }
}

export default HeaderPage;