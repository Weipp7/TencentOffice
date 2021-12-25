import React from "react";
import Content from "./Components/Content/Content";

import HeaderHorizontal from './Components/Header/HeaderHorizontal'
import { HeaderVertical } from "./Components/Header/HeaderVertical";
import { CellHeight, CellWidth, HeaderHorizontalHeight, HeaderVerticalWidth, PageHeight, PageWidth } from "./Constants";

interface IState {
    currentVerticalIndex: number,
    currentHorizontalIndex: number,

    // 选择的区域
    selectedLeft: number,
    selectedTop: number,
    selectedRight: number,
    selectedBottom: number
}

interface IProp {
    // 数据接口
    getData: Function,
    setData: Function,

    preloadVerticalNum: number,
    preloadHorizontalNum: number
}

class SpreadSheet extends React.Component<IProp, IState> {
    // 列标ref
    horizontalHeaderRef: React.RefObject<HTMLDivElement>;
    // 行标ref
    verticalHeaderRef: React.RefObject<HTMLDivElement>;
    // 内容ref
    contentRef: React.RefObject<HTMLDivElement>;

    // 内容限位，用于检测和触发动态加载
    topSpacing: number;
    bottomSpacing: number;
    leftSpacing: number;
    rightSpacing: number;

    constructor(props: IProp) {
        super(props);
        this.state = {
            currentHorizontalIndex: 1,
            currentVerticalIndex: 1,
            selectedLeft: 1,
            selectedTop: 1,
            selectedRight: 1,
            selectedBottom: 1
        }

        this.horizontalHeaderRef = React.createRef();
        this.verticalHeaderRef = React.createRef();
        this.contentRef = React.createRef();

        this.topSpacing = 0;
        this.bottomSpacing = (1 + this.props.preloadVerticalNum) * PageHeight;
        this.leftSpacing = 0;
        this.rightSpacing = (1 + this.props.preloadHorizontalNum) * PageWidth;
    }

    componentDidUpdate = () => {
        // 更新页面限位信息
        const { currentHorizontalIndex, currentVerticalIndex } = this.state;
        const { preloadHorizontalNum, preloadVerticalNum } = this.props;

        this.topSpacing = currentVerticalIndex - preloadVerticalNum - 1 > 0 ?
            (currentVerticalIndex - preloadVerticalNum - 1) * PageHeight : 0;
        this.bottomSpacing = (currentVerticalIndex + preloadVerticalNum) * PageHeight;
        this.leftSpacing = currentHorizontalIndex - preloadHorizontalNum - 1 > 0 ?
            (currentHorizontalIndex - preloadHorizontalNum - 1) * PageWidth : 0;
        this.rightSpacing = (currentHorizontalIndex + preloadHorizontalNum) * PageWidth;
    }

    /**
     * 根据x, y的位置更新页面信息
     * @param x 
     * @param y 
     */
    useAsCurrent = (x: number, y: number) => {
        this.setState({
            currentHorizontalIndex: Math.floor(x / PageWidth) + 1,
            currentVerticalIndex: Math.floor(y / PageHeight) + 1
        });
    }

    updateSelection = (top: number, bottom: number, left: number, right: number) => {
        this.setState({
            selectedTop: top > 0 ? top : 1,
            selectedBottom: bottom > 0 ? bottom : 1,
            selectedLeft: left > 0 ? left : 1,
            selectedRight: right > 0 ? right : 1
        })
    }

    updateData = (x: number, y: number, s: any) => {
        this.props.setData(x, y, s);
        this.setState({});
    }

    /**
     * 判断是否需要重新加载数据范围
     */
    updateDisplayRange = () => {
        const content = this.contentRef.current!;

        let scrollX = content.scrollLeft;
        let scrollY = content.scrollTop;
        let clientWidth = content.clientWidth;
        let clientHeight = content.clientHeight;

        const deltaX = CellWidth * 3;
        const deltaY = CellHeight * 3;
        // 检查左边界
        if (this.state.currentHorizontalIndex !== 1
            && scrollX < this.leftSpacing + deltaX) {
            this.useAsCurrent(scrollX, scrollY);
        }
        // 检查上边界
        if (this.state.currentVerticalIndex !== 1
            && scrollY < this.topSpacing + deltaY) {
            this.useAsCurrent(scrollX, scrollY);
        }
        // 检查右边界
        if (scrollX + clientWidth > this.rightSpacing - deltaX) {
            this.useAsCurrent(scrollX, scrollY);
        }
        // 检查下边界
        if (scrollY + clientHeight > this.bottomSpacing - deltaY) {
            this.useAsCurrent(scrollX, scrollY);
        }
    }

    handleScroll = () => {
        const content = this.contentRef.current!;
        const hHeader = this.horizontalHeaderRef.current!;
        const vHeader = this.verticalHeaderRef.current!;

        // 滚动行标和列标
        let scrollX = content.scrollLeft;
        let scrollY = content.scrollTop;
        hHeader.scrollTo(scrollX, 0);
        vHeader.scrollTo(0, scrollY);

        this.updateDisplayRange();
    }

    render() {
        const { currentHorizontalIndex, currentVerticalIndex } = this.state;
        const { preloadHorizontalNum, preloadVerticalNum } = this.props;

        return (
            <div style={{
                position: "relative",
                width: "100%",
                height: "100%"
            }}>
                <HeaderHorizontal headerRef={this.horizontalHeaderRef}
                    currentPageIndex={currentHorizontalIndex}
                    preloadPageNum={preloadHorizontalNum}
                    selectedStart={this.state.selectedLeft}
                    selectedEnd={this.state.selectedRight}
                />

                <div style={{
                    position: "absolute",
                    top: HeaderHorizontalHeight,
                    bottom: 0,
                    left: 0,
                    width: "100%"
                }}>
                    <div style={{ height: "100%", width: HeaderVerticalWidth }}>
                        <HeaderVertical
                            headerRef={this.verticalHeaderRef}
                            selectedStart={this.state.selectedTop}
                            selectedEnd={this.state.selectedBottom}
                            currentPageIndex={currentVerticalIndex}
                            preloadPageNum={preloadVerticalNum} />
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            left: HeaderVerticalWidth,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }}
                    >

                        <Content
                            contentRef={this.contentRef}
                            currentHorizontalIndex={currentHorizontalIndex}
                            preloadHorizontalNum={preloadHorizontalNum}
                            currentVerticalIndex={currentVerticalIndex}
                            preloadVerticalNum={preloadVerticalNum}

                            onScroll={this.handleScroll}

                            getData={this.props.getData}
                            setData={this.updateData}

                            changeSelection={this.updateSelection}

                            selectedTop={this.state.selectedTop}
                            selectedBottom={this.state.selectedBottom}
                            selectedLeft={this.state.selectedLeft}
                            selectedRight={this.state.selectedRight}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SpreadSheet;
