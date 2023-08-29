import React from "react";

import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";


const PNFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PNFound;