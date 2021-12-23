import React from 'react'

import HeaderCorner from './Components/HeaderCorner';
import CellsContainer from './Components/CellsContainer';
import PlaceHolder from './Components/PlaceHolder';
import { ColumnsPerPage, DirectionType, HeaderHorizontalHeight } from '../../Constants';
import HeaderPage from './Components/HeaderPage';

interface IHeaderHorizontalProps {
    // 表头部分的Ref，用于控制滚动
    headerRef: React.RefObject<HTMLDivElement>,
    // 当前显示的page序号
    currentPageIndex: number,
    // 预加载的page数量
    preloadPageNum: number
}

interface IHeaderHorizontalState {

}

class HeaderHorizontal extends React.Component<IHeaderHorizontalProps, IHeaderHorizontalState> {
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
            pages.push(<HeaderPage key={i} type={DirectionType.HORIZONTAL} startIndex={ColumnsPerPage * (i - 1) + 1} />)
        }

        return (
            <div style={{
                height: HeaderHorizontalHeight,
                width: "100%",
                background: "rgb(240, 240, 240)",
                position: "relative"
            }}>

                <HeaderCorner />

                <CellsContainer
                    type={DirectionType.HORIZONTAL}
                    headerRef={this.props.headerRef}
                    holdPagesNum={endPageIndex}
                >
                    <PlaceHolder type={DirectionType.HORIZONTAL} pageNum={placeHolderPageNum} />

                    {pages}
                </CellsContainer>
            </div>

        );
    }
}

export default HeaderHorizontal;