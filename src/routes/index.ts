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
    import("../modules/HomePage/components/HomePageContgainer")
);

export interface RouteConfig {
    path: string;
    exact : Boolean;
    component: ComponentClass | FunctionComponent | LazyExoticComponent<any>;
    permission?: string;
}

export const authRoutes: RouteConfig[] = [
    {
        path: routeName.login,
        exact: true,
        component: LoginPage,
    },
];

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
        permission: "",
    },
    // {
    //     path: routeName.shopOwner,
    //     extract: true,
    //     component: ShopOwnerPage,
    //     permission: "",
    // },
];

export const otherRoutes: RouteConfig[] = [
    // {
    //     path: routeName.notAccept,
    //     extract: true,
    //     component: NotAcceptPage,
    // },
];
