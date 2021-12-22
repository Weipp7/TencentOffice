import React from 'react'

import HeaderHorizontalWrapper from './Components/HeaderHorizontalWrapper';
import HeaderCorner from './Components/HeaderCorner';
import { toName } from '../../Commons/utils'
import CellsContainer from './Components/CellsContainer';
import HeaderCell from './Components/HeaderCell';

interface IHeaderHorizontalProps {
    headerRef: React.RefObject<HTMLDivElement>,
    currentPageHorizontalIndex: number,
    preloadPageHorizontalNumber: number
}

interface IHeaderHorizontalState {

}

class HeaderHorizontal extends React.Component<IHeaderHorizontalProps, IHeaderHorizontalState> {

    render() {
        let cells = [];
        for (let i = 1; i < 100; i++) {
            cells.push(<HeaderCell name={toName(i)} />);
        }
        return (
            <div>
                <HeaderHorizontalWrapper>
                    <HeaderCorner></HeaderCorner>

                    <CellsContainer headerRef={this.props.headerRef}>
                        
                        {cells}
                    </CellsContainer>
                </HeaderHorizontalWrapper>
            </div>

        );
    }
}

export default HeaderHorizontal;