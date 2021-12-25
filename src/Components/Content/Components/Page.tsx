import React from "react";
import { CellHeight, CellWidth, ColumnsPerPage, PageHeight, PageWidth, RowsPerPage } from "../../../Constants";

interface IPageProp {
    horizontalIndex: number,
    verticalIndex: number,
    getData: Function
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
                <GridValues getData={this.props.getData} horizontalIndex={this.props.horizontalIndex} verticalIndex={this.props.verticalIndex} />
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
                    key={i}
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
                    key={i}
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

/**
 * 数据容器
 */
class GridValues extends React.Component<{
    getData: Function,
    horizontalIndex: number,
    verticalIndex: number
}> {

    getDiv = (x: number, y: number, value: any) => (
        <div
            key={"x-" + x + "-y-" + y}
            style={{
                position: "absolute",
                left: (x - 1) * CellWidth,
                top: (y - 1) * CellHeight,
                height: CellHeight,
                width: CellWidth - 4,
                padding: "0px 2px 0px 2px",
                lineHeight: CellHeight + "px"
            }}
        >
            {value}
        </div>
    );

    render() {
        const {horizontalIndex, getData, verticalIndex} = this.props;

        let values = [];
        for (let i = 1; i <= ColumnsPerPage; i++) {
            for (let j = 1; j <= RowsPerPage; j++) {  
                let v = getData(
                    (horizontalIndex - 1) * ColumnsPerPage + i,
                    (verticalIndex - 1) * RowsPerPage + j
                );
                if (v !== null) {
                    values.push(this.getDiv(i, j, v));
                }
            }
        }

        return (
            <div
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}
            >
                {values}
            </div>
        )
    }
}