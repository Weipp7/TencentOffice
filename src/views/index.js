
import React from 'react'
import List from '../assets/js/list.js';
import Item from '../components/list.js';

export default class myIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="home_info">
                <nav>
                    <ul className="clearfix">
                       
                    </ul>
                </nav>
                <Item list={List.info} />
            </div>
        )
    }
}
