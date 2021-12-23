import React from "react";
import { ColumnsPerPage, DirectionType, RowsPerPage } from "../../../Constants";
import HeaderCell from "./HeaderCell";

interface IHeaderPageProp {
    type: DirectionType,
    startIndex: number
}

class HeaderPage extends React.Component<IHeaderPageProp> {
    render() {
        const {type, startIndex} = this.props;
        const cellsNum = type === DirectionType.HORIZONTAL ? ColumnsPerPage : RowsPerPage;
        let cells = [];
        for (let i = startIndex; i <= startIndex + cellsNum - 1; i++) {
            cells.push(<HeaderCell key={i} type={type} index={i} />);
        }
        return (
            <div>
                {cells}
            </div>
        )
    }
}

export default HeaderPage;