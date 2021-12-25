import React from "react";
import { CellHeight, CellWidth } from "../../../Constants";

interface ISelectionProp {
    selectedTop: number,
    selectedBottom: number,
    selectedLeft: number,
    selectedRight: number
}

/**
 * 选择框
 */
class Selection extends React.Component<ISelectionProp> {
    getSelection = () => {
        const { selectedTop, selectedBottom, selectedLeft, selectedRight } = this.props;
        if (selectedBottom - selectedTop >= 0) {
            if (selectedRight - selectedLeft >= 0) {
                return (
                    <div
                        style={{
                            position: "absolute",
                            top: (selectedTop - 1) * CellHeight - 2,
                            left: (selectedLeft - 1) * CellWidth - 2,
                            padding: 1,
                            border: "2px solid #2979ff",
                            height: (selectedBottom - selectedTop + 1) * CellHeight - 3,
                            width: (selectedRight - selectedLeft + 1) * CellWidth - 3
                        }}
                    >

                        <div style={{
                            height: CellHeight - 2,
                            width: CellWidth - 2,
                            float: "left"
                        }}></div>
                        {
                            selectedRight - selectedLeft === 0 ? '' :
                                <div style={{
                                    height: CellHeight - 2,
                                    width: (selectedRight - selectedLeft) * CellWidth - 1,
                                    float: "left",
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }

                        {
                            selectedBottom - selectedTop === 0 ? '' :
                                <div style={{
                                    height: (selectedBottom - selectedTop) * CellHeight - 1,
                                    width: (selectedRight - selectedLeft + 1) * CellWidth - 3,
                                    marginTop: CellHeight - 2,
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }
                    </div>
                )
            } else {
                return (
                    <div
                        style={{
                            position: "absolute",
                            top: (selectedTop - 1) * CellHeight - 2,
                            left: (selectedRight - 1) * CellWidth - 2,
                            padding: 1,
                            border: "2px solid #2979ff",
                            height: (selectedBottom - selectedTop + 1) * CellHeight - 3,
                            width: (selectedLeft - selectedRight + 1) * CellWidth - 3
                        }}
                    >

                        {
                            selectedRight - selectedLeft === 0 ? '' :
                                <div style={{
                                    height: CellHeight - 2,
                                    width: (selectedLeft - selectedRight) * CellWidth - 1,
                                    float: "left",
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }

                        <div style={{
                            height: CellHeight - 2,
                            width: CellWidth - 2,
                            float: "left"
                        }}></div>

                        {
                            selectedBottom - selectedTop === 0 ? '' :
                                <div style={{
                                    height: (selectedBottom - selectedTop) * CellHeight - 1,
                                    width: (selectedLeft - selectedRight + 1) * CellWidth - 3,
                                    marginTop: CellHeight - 2,
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }
                    </div>
                )
            }
        } else {
            if (selectedRight - selectedLeft >= 0) {
                return (
                    <div
                        style={{
                            position: "absolute",
                            top: (selectedBottom - 1) * CellHeight - 2,
                            left: (selectedLeft - 1) * CellWidth - 2,
                            padding: 1,
                            border: "2px solid #2979ff",
                            height: (selectedTop - selectedBottom + 1) * CellHeight - 3,
                            width: (selectedRight - selectedLeft + 1) * CellWidth - 3
                        }}
                    >

                        {
                            selectedBottom - selectedTop === 0 ? '' :
                                <div style={{
                                    height: (selectedTop - selectedBottom) * CellHeight - 1,
                                    width: (selectedRight - selectedLeft + 1) * CellWidth - 3,
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }

                        <div style={{
                            height: CellHeight - 2,
                            width: CellWidth - 2,
                            float: "left"
                        }}></div>

                        {
                            selectedRight - selectedLeft === 0 ? '' :
                                <div style={{
                                    height: CellHeight - 2,
                                    width: (selectedRight - selectedLeft) * CellWidth - 1,
                                    float: "left",
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }
                    </div>
                )
            } else {
                return (
                    <div
                        style={{
                            position: "absolute",
                            top: (selectedBottom - 1) * CellHeight - 2,
                            left: (selectedRight - 1) * CellWidth - 2,
                            padding: 1,
                            border: "2px solid #2979ff",
                            height: (selectedTop - selectedBottom + 1) * CellHeight - 3,
                            width: (selectedLeft - selectedRight + 1) * CellWidth - 3
                        }}
                    >

                        {
                            selectedBottom - selectedTop === 0 ? '' :
                                <div style={{
                                    height: (selectedTop - selectedBottom) * CellHeight - 1,
                                    width: (selectedLeft - selectedRight + 1) * CellWidth - 3,
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }

                        {
                            selectedRight - selectedLeft === 0 ? '' :
                                <div style={{
                                    height: CellHeight - 2,
                                    width: (selectedLeft - selectedRight) * CellWidth - 1,
                                    float: "left",
                                    backgroundColor: "rgba(100, 181, 246, .3)"
                                }}></div>
                        }

                        <div style={{
                            height: CellHeight - 2,
                            width: CellWidth - 2,
                            float: "left"
                        }}></div>
                    </div>
                )
            }
        }
    }

    render() {

        return this.getSelection()
    }
}

export default Selection;