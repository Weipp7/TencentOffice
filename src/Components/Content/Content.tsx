import React from 'react'
import { DirectionType } from '../../Constants';
import PlaceHolder from '../PlaceHolder';
import HorizontalPageContainer from './Components/HorizontalPageContainer';

interface IContentProp {
    contentRef: React.RefObject<HTMLDivElement>,
    currentHorizontalIndex: number,
    currentVerticalIndex: number,
    preloadHorizontalNum: number,
    preloadVerticalNum: number,
    onScroll: React.UIEventHandler<HTMLDivElement>
}

interface IContentState {

}

class Content extends React.Component<IContentProp, IContentState> {
    render() {
        const { currentVerticalIndex, preloadVerticalNum, currentHorizontalIndex, preloadHorizontalNum } = this.props;
        // 列占位符所占的page个数
        const PHVerticalPageNum = currentVerticalIndex - preloadVerticalNum - 1 > 0 ?
            currentVerticalIndex - preloadVerticalNum - 1 : 0;
        // 起始的列page编号
        const startVerticalPage = currentVerticalIndex - preloadVerticalNum > 0 ?
            currentVerticalIndex - preloadVerticalNum : 1;
        // 结束的列page编号
        const endVerticalPage = currentVerticalIndex + preloadVerticalNum;

        let pageRows = [];
        for (let i = startVerticalPage; i <= endVerticalPage; i++) {
            pageRows.push(
                <HorizontalPageContainer 
                    key={i}
                    verticalPageIndex={i}
                    currentHorizontalIndex={currentHorizontalIndex}
                    preloadHorizontalNum={preloadHorizontalNum}
                />
            );
        }

        return (
            <div
                ref={this.props.contentRef}
                style={{
                    height: "100%",
                    width: "100%",
                    overflow: "scroll",
                    position: "relative"
                }}
                onScroll={this.props.onScroll}
            >

                <PlaceHolder type={DirectionType.VERTICAL} pageNum={PHVerticalPageNum} />

                {pageRows}
            </div>
        )
    }
}

export default Content;