import React from "react";
import Content from "./Components/Content/Content";

import HeaderHorizontal from './Components/Header/HeaderHorizontal'
import { HeaderVertical } from "./Components/Header/HeaderVertical";
import { HeaderHorizontalHeight, HeaderVerticalWidth } from "./Constants";

interface IState {

}

interface IProp {

}

class Excel extends React.Component<IProp, IState> {
    horizontalHeaderRef: React.RefObject<HTMLDivElement>;
    verticalHeaderRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    

    constructor(props: IProp) {
        super(props);
        this.horizontalHeaderRef = React.createRef();
        this.verticalHeaderRef = React.createRef();
        this.contentRef = React.createRef();
    }

    handleScroll = () => {
        let scrollX: number = this.contentRef.current?.scrollLeft!;
        let scrollY: number = this.contentRef.current?.scrollTop!;
        this.horizontalHeaderRef.current?.scrollTo(scrollX, 0);
        this.verticalHeaderRef.current?.scrollTo(0, scrollY);
    }

    render() {
        return (
            <div style={{
                position: "relative",
                width: "100%",
                height: "100%"
            }}>
                <HeaderHorizontal headerRef={this.horizontalHeaderRef}
                    currentPageIndex={1}
                    preloadPageNum={2} />

                <div style={{
                    position: "absolute",
                    top: HeaderHorizontalHeight,
                    bottom: 0,
                    left: 0,
                    width: "100%"
                }}>
                    <div style={{height: "100%", width: HeaderVerticalWidth}}>
                        <HeaderVertical headerRef={this.verticalHeaderRef}
                            currentPageIndex={1}
                            preloadPageNum={2}/>
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
                            currentHorizontalIndex={1}
                            preloadHorizontalNum={2}
                            currentVerticalIndex={1}
                            preloadVerticalNum={2}
                            onScroll={this.handleScroll}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Excel;
