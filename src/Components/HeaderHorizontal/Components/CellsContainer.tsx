import React from "react";
import { HeaderHorizontalHeight, HeaderVerticalWidth } from "../../Constants";

interface IHHContainerProp {
    headerRef: React.RefObject<HTMLDivElement>
}

/**
 * 盛装表头单元格的容器
 */
class CellsContainer extends React.Component<IHHContainerProp> {
    render() {
        return (
            <div ref={this.props.headerRef} style={{
                overflow: "hidden",
                height: HeaderHorizontalHeight,
                width: "100%",
                marginLeft: HeaderVerticalWidth
            }}>
                <div style={{
                    height: "100%",
                    width: 10000
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CellsContainer;