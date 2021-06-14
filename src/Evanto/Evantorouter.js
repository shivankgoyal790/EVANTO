import React from "react"
import { Route, Switch } from "react-router"
import Evanto from "./Evanto"
import Page1 from "./Components/Page1/Page1"
import Page2 from "./Components/Page2/Page2"
import Page3 from "./Components/Page3/Page3"
import Page4 from "./Components/Page4/Page4"
import Page5 from "./Components/Page5/Page5"
import Page6 from "./Components/Page6/Page6"
import Page7 from "./Components/Page7/Page7"
import Page8 from "./Components/Page8/Page8"
import Page9 from "./Components/Page9/Page9"

const Evantorouter = () =>{
    return(
        <>
                <Switch>             
                <Route exact path="/" component={Evanto}/>
                <Route path="/Page1" component={Page1}/>
                <Route path="/Page2" component={Page2}/>
                <Route path="/Page3" component={Page3}/>
                <Route path="/Page4" component={Page4}/>
                <Route path="/Page5" component={Page5}/>
                <Route path="/Page6" component={Page6}/>
                <Route path="/Page7" component={Page7}/>
                <Route path="/Page8" component={Page8}/>
                <Route path="/Page9" component={Page9}/>
                </Switch>
            
        </>
    )
}

export default Evantorouter