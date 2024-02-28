import {Fragment, useState} from "react";
import "./styles/App.css";
import PropsDemo from "./exercises/PropsDemo.tsx";
import {ListDemo} from "./exercises/ListDemo.tsx";
import EventDemo from "./exercises/EventDemo.tsx";
import FormUncontrolled from "./exercises/FormsUncontrolled.tsx";
import StateDemo1 from "./exercises/StateDemo1.tsx";
import StateDemo2 from "./exercises/StateDemo2.tsx";
import StateDemo3 from "./exercises/StateDemo3.tsx";
import UseEffectDemo from "./exercises/UseEffectDemo.tsx";
import FetchDemo from "./exercises/FetchDemo.tsx";
import LiftingState from "./exercises/LiftingState.tsx";
import ContextDemoApp from "./exercises/ContextDemo.tsx";

export default function App() {
    const [selectedView, setSelectedView] = useState("info");

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <Fragment>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises VRA solutions</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "Info" ? <p>All exercises for React day-1</p> : null}
                        {selectedView == "PropsDemo" ? <PropsDemo title={"Prob exercises"}/>: null}
                        {selectedView == "ListDemo" ? <ListDemo title={"listDemo exercises"}/>: null}
                        {selectedView == "EventDemo" ? <EventDemo title={"EventDemo exercises"}/>: null}
                        {selectedView == "FormUncontrolled" ? <FormUncontrolled title={"form-un"}/>: null}
                        {selectedView == "StateDemo1" ? <StateDemo1 title={"stateDemo1"}/>: null}
                        {selectedView == "StateDemo2" ? <StateDemo2 title={"stateDemo2"}/>: null}
                        {selectedView == "StateDemo3" ? <StateDemo3 title={"stateDemo3"}/>: null}
                        {selectedView == "UseEffectDemo" ? <UseEffectDemo title={"UseEffectDemo"}/>: null}
                        {selectedView == "FetchDemo" ? <FetchDemo title={"FetchDemo"}/>: null}
                        {selectedView == "LiftingState" ? <LiftingState title={"LiftingState"}/>: null}
                        {selectedView == "ContextDemo" ? <ContextDemoApp title={"ContextDemo"}/>: null}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

type ButtonProps = {
    onSelected: (selected: string) => void;
};

const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected } = props;
    return (
        <Fragment>
            <button className="btn-w100" onClick={() => handleSelected("Info")}>
                Info
            </button>
            <button className="btn-w100" onClick={() => handleSelected("PropsDemo")}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("ListDemo")}>
                listDemo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("EventDemo")}>
                EventDemo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("FormUncontrolled")}>
                FormUncontrolled
            </button>
            <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
                State Demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
                State Demo2
            </button>
            <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
                State Demo3
            </button>
            <button className="btn-w100" onClick={() => handleSelected("UseEffectDemo")}>
                UseEffect Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
                fetch Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("LiftingState")}>
                LiftingState
            </button><button className="btn-w100" onClick={() => handleSelected("ContextDemo")}>
                ContextDemo
            </button>
        </Fragment>
    );
};
