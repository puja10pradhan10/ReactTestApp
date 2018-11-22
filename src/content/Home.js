import React, { Component } from "react";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import ReactGridLayout from "../../node_modules/react-grid-layout";
// import "../../node_modules/react-grid-layout/css/styles.css";
// import "../../node_modules/react-resizable/css/styles.css";



class Home extends Component {
    render() {
        return (
            <div>
                <h2>HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>

                {/* <MuiThemeProvider>
                    <Grid layout={layoutData} {...layoutConfig}></Grid>
                </MuiThemeProvider> */}
            </div>
        );
    }
}

export default Home;