import React from "react";

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

    constructor(props: IProp) {
        super(props);
        this.horizontalHeaderRef = React.createRef();
        this.verticalHeaderRef = React.createRef();
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
                            currentPageIndex={6}
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

                    </div>
                </div>
            </div>
        )
    }
}

export default Excel;
