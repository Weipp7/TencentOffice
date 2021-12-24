import React from "react";
import { CellHeight, CellWidth, ColumnsPerPage, PageHeight, PageWidth, RowsPerPage } from "../../../Constants";

interface IPageProp {
    horizontalIndex: number,
    verticalIndex: number
}  

class Page extends React.Component<IPageProp> {
    render() {
        return (
            <div 
                style={{
                    position: "relative",
                    float: "left",
                    height: PageHeight,
                    width: PageWidth
                }}
            >

                <GridHorizontalLine rowsNum={RowsPerPage} />
                <GridVerticalLine columnsNum={ColumnsPerPage} />
            </div>
        )
    }
}

export default Page;

/**
 * 水平线
 */
class GridHorizontalLine extends React.Component <{
    rowsNum: number
}> {
    getLines = () => {
        let lines = [];
        for (let i = 1; i <= this.props.rowsNum; i++) {
            lines.push(<div
                    style={{
                        height: CellHeight,
                        width: "100%",
                        boxSizing: "border-box",
                        borderBottom: "1px solid #dfdfdf"
                    }}                
                ></div>)
        }
        return lines;
    }

    render() {

        return (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
            >
                {this.getLines()}
            </div>
        )
    }
}

/**
 * 垂直线
 */
class GridVerticalLine extends React.Component<{
    columnsNum: number
}> {
    getLines = () => {
        let lines = [];
        for (let i = 1; i <= this.props.columnsNum; i++) {
            lines.push(<div
                    style={{
                        float: "left",
                        height: "100%",
                        width: CellWidth,
                        boxSizing: "border-box",
                        borderRight: "1px solid #dfdfdf"
                    }}                
                ></div>)
        }
        return lines;
    }
    
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
            >
                {this.getLines()}
            </div>
        )
    }
}