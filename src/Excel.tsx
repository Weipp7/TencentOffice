import React from "react";

import HeaderHorizontal from './Components/HeaderHorizontal'

interface IState {

}

interface IProp {

}

class Excel extends React.Component<IProp, IState> {
    headerRef: React.RefObject<HTMLDivElement>;
    
    constructor (props: IProp) {
        super(props);
        this.headerRef = React.createRef();
    }

    render() {
        return (
            <HeaderHorizontal headerRef={this.headerRef}
                currentPageHorizontalIndex={0} 
                preloadPageHorizontalNumber={0}/>
        )
    }
}

export default Excel;