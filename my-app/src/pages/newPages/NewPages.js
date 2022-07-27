import React from "react";
import Headers from "../../components/header/Headers";


class NewsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           menu: false
        }
    }

    changeTitle = () => {
        this.setState({
            title: "I am new Title"

        })
    }

    changeMenu = () => {
        this. setState ( {
            menu: !this.state.menu
        })
    }



    render() {
        return (
            <div>
                {
                    this.state.menu === true ? <Headers/> :""


                }



                <Headers/>
                <button onClick={this.changeMenu}>menu</button>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeTitle}>change text</button>
            </div>
        );
    }
}


export default NewsPage;