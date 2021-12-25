import React from "react";
import { DirectionType, HeaderVerticalWidth, RowsPerPage } from "../../Constants";
import CellsContainer from "./Components/CellsContainer";
import HeaderPage from "./Components/HeaderPage";
import PlaceHolder from "../PlaceHolder";

interface IHeaderVerticalProp {
    headerRef: React.RefObject<HTMLDivElement>,
    currentPageIndex: number,
    preloadPageNum: number,
    selectedStart: number,
    selectedEnd: number
}

interface IHeaderVerticalState {

}

class HeaderVertical extends React.Component<IHeaderVerticalProp, IHeaderVerticalState> {
    render() {
        const { currentPageIndex, preloadPageNum } = this.props;
        // 占位符所占的page个数
        const placeHolderPageNum = currentPageIndex - preloadPageNum - 1 > 0 ? currentPageIndex - preloadPageNum - 1 : 0;
        // 起始的page编号
        const startPageIndex = currentPageIndex - preloadPageNum > 0 ? currentPageIndex - preloadPageNum : 1;
        // 结束的page编号
        const endPageIndex = currentPageIndex + preloadPageNum;

        let pages = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
            pages.push(<HeaderPage key={i} type={DirectionType.VERTICAL} startIndex={RowsPerPage * (i - 1) + 1}
                selectedStart={this.props.selectedStart} selectedEnd={this.props.selectedEnd} />)
        }

        return (
            <div style={{
                height: "100%",
                width: HeaderVerticalWidth,
                background: "rgb(240, 240, 240)",
                position: "relative"
            }}>


                    <CellsContainer
                        type={DirectionType.VERTICAL}
                        headerRef={this.props.headerRef}
                        holdPagesNum={endPageIndex}
                    >
                        <PlaceHolder type={DirectionType.VERTICAL} pageNum={placeHolderPageNum} />

                        {pages}
                    </CellsContainer>


            </div>
        )
    }
}

export { HeaderVertical };