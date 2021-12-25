import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SpreadSheet from './SpreadSheet'

class App extends React.Component<{}> {
    data: Array<Array<any>>;

    constructor(props: any) {
        super(props);
        this.data = new Array(100);
        for (let i = 0; i < 100; i++) this.data[i] = [];
        this.data[1][1] = 1;
        this.data[31][256] = 2;
    }

    getData = (x: number, y: number) => {
        if (this.data[x - 1] !== undefined) {
            if (this.data[x - 1][y - 1] !== undefined) {
                return this.data[x - 1][y - 1];
            }
        }

        return null;
    }

    setData = (x: number, y: number, s: any) => {
        if (this.data[x - 1] === undefined) {
            this.data[x - 1] = [];
        }
        this.data[x - 1][y - 1] = s;
    }

    render() {
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                bottom: 0
            }}>
                <SpreadSheet
                    getData={this.getData}
                    setData={this.setData}
                    preloadHorizontalNum={2}
                    preloadVerticalNum={2}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

