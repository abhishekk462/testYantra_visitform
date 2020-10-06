import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import LatestNews from "./Component/LatestNews";
import ListVisitForm from "./Component/ListVisitForm";
import VisitForm from "./Component/VisitForm";


export default function Routes() {

    return (
        <>
            <Router>
                <div>
                    <Nav>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/visit">Visitor info</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/latestnews">Latest News</NavLink>
                        </NavItem>
                    </Nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                       <Route path="/latestnews">
                            <LatestNews/>
                      </Route>
                        <Route path="/visit">
                            <ListVisitForm />
                        </Route>
                        {/* <Route path="/users">
            
          </Route> */}
                        <Route path="/">
                            <VisitForm />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

