import React, { ComponentClass, FunctionComponent, LazyExoticComponent } from "react";
import { routeName } from "./routes-name";
import { NotAcceptPage } from "../common/Pages";

const LoginPage = React.lazy(
    () => import("../modules/LoginPage/components/LoginPageContainer")
);
const HomePage = React.lazy(
    () => import("../modules/HomePage/components/HomePageContainer")
);
const DetailsPage = React.lazy(
    () => import("../modules/Details/components/DetailsPageContainer")
);
const TicketingPage = React.lazy(
    () => import("../modules/Ticketing/components/TicketingPageContainer")
);
const ResultPage = React.lazy(
    () => import("../modules/ResultPage/components/ResultPageContainer")
);

const MyAccountPage = React.lazy(
    () => import("../modules/LoginPage/components/MyAccount/MyAccountContainer")
);
export interface RouteConfig {
    path: string;
    exact: boolean;
    component: ComponentClass | FunctionComponent | LazyExoticComponent<any>;
    permission?: string;
}

export const mainRoutes: RouteConfig[] = [
    {
        path: routeName.login,
        exact: false,
        component: LoginPage
    },
    {
        path: routeName.home,
        exact: true,
        component: HomePage
    },
    {
        path: routeName.details,
        exact: false,
        component: DetailsPage
    },
    {
        path: routeName.ticketing,
        exact: true,
        component: TicketingPage
    },
    {
        path: routeName.customer,
        exact: true,
        component: MyAccountPage
    },
    {
        path: routeName.result,
        exact: false,
        component: ResultPage
    }
];

export const otherRoutes: RouteConfig[] = [
    // {
    //     path: routeName.notAccept,
    //     extract: true,
    //     component: NotAcceptPage,
    // },
];
