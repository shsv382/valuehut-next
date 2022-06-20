import React, { useEffect } from 'react';
import './animate-on-scroll.module.scss';

const randomString = () => {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let rs = "";
    while (rs.length < 10) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs;
}

interface MyProps {
    children: any,
    id?: string
}

interface MyState {
    cn: string,
    appearance: string
}

class AnimateOnScroll extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            cn: this.props.id ? this.props.id : randomString(),
            appearance: 'appearancable__initial__hidden'
        }
    }

    componentDidMount() {
        
    }
    
    render() {
        document.addEventListener("DOMContentLoaded", () => {
            let div1 = document.getElementsByClassName(`${this.state.cn}`)[0];
            if(div1) {
                if (div1.getBoundingClientRect().top < (window.innerHeight - 200)) {
                    this.setState({...this.state, appearance: 'appearancable'});
                }
            }
        })
        window.addEventListener("scroll", () => {
            let div1 = document.getElementsByClassName(`${this.state.cn}`)[0];
            if(div1) {
                if (div1.getBoundingClientRect().top < (window.innerHeight - 200)) {
                    this.setState({...this.state, appearance: 'appearancable'});
                }
            }
        })
        return (
            <div 
                className={ `${this.state.appearance} ${this.state.cn}` }
                style={{
                    width: '100%',
                    display: 'flex'
                }}    
            >
                {this.props.children}
            </div>
        )
    }
}

export default AnimateOnScroll;