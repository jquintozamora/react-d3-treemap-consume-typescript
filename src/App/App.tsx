import * as React from "react";
import TreeMap, { NumberOfChildrenPlacement } from "react-d3-treemap";
import { data } from "../data/data";
// Be sure to include styles at some point
import "react-d3-treemap/dist/react.d3.treemap.css";
import "./App.css"

const App: React.FunctionComponent = ({
}) => {
    return (
        <div className="app-container">
            <TreeMap
                id="myTreeMap2"
                nodeClassName="App__node"
                height={500}
                width={800}
                data={data}
                valueUnit={"MB"}
                paddingInner={4}
                paddingOuter={4}
                numberOfChildrenPlacement={NumberOfChildrenPlacement.TopRight}                    // bgColorRangeLow={"#FFFFBF"}
            />
        </div>
    );
}

export default App