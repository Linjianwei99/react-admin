import React, { Component } from 'react';

// 顶部引入Component，这个只要写Component不用写React.Component
class About extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        // return <div>Home</div>
        return (//多行可以使用括号包裹，仅有一个根元素
            <div>
                <div> about</div>
            </div>
        )
    }
}

export default About