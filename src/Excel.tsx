import React from "react";

import HeaderHorizontal from './Components/HeaderHorizontal'

interface IState {

}

interface IProp {

}

class Excel extends React.Component<IProp, IState> {
    constructor (props: IProp) {
        super(props);

    }

    render() {
        return (
            <HeaderHorizontal />
        )
    }
}

export default Excel;