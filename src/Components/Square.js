import React from "react";

class Square extends React.Component {
    reader() {
        return (
            <button className="square" onClick={function() { console.log('click'); }}>
                {this.props.value}
            </button>
        );
    }
}

export default Square