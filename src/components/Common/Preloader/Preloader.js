import React from "react";
import preloader from "../../../assets/images/Bean Eater-1s-200px.svg";

const Preloader = (props) => {
    return (
        <div style={ { backgroundColor: "white" } }>
            <img alt={'Oops'} src={preloader} />
        </div>
    );
}

export default Preloader;