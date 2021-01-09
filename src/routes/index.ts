import React, {
    ComponentClass,
    FunctionComponent,
    LazyExoticComponent,
} from "react";
import { routeName } from "./routes-name";
import { NotAcceptPage } from "../common/Pages";

const LoginPage = React.lazy(() =>
    import("../modules/LoginPage/components/LoginPageContainer")
);
const HomePage = React.lazy(()=>
    import("../modules/HomePage/components/HomePageContainer")
);
const DetailsPage = React.lazy(()=>
    import("../modules/Details/components/DetailsPageContainer")
);
const TicketingPage = React.lazy(()=>
    import("../modules/Ticketing/components/TicketingPageContainer")
);
export interface RouteConfig {
    path: string;
    exact : boolean;
    component: ComponentClass | FunctionComponent | LazyExoticComponent<any>;
    permission?: string;
}


export const mainRoutes: RouteConfig[] = [
    {
        path: routeName.login,
        exact: true,
        component: LoginPage,
    },
    {
        path: routeName.home,
        exact : true,
        component: HomePage,
    },
    {
        path: routeName.details,
        exact : true,
        component: DetailsPage,
    },
    {
        path: routeName.ticketing,
        exact : true,
        component: TicketingPage,
    },
];

export const otherRoutes: RouteConfig[] = [
    // {
    //     path: routeName.notAccept,
    //     extract: true,
    //     component: NotAcceptPage,
    // },
];
