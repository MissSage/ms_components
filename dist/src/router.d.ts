/// <reference path="env.d.ts" />
export declare const routes: {
    meta: {
        title: string;
    };
    name: string;
    path: string;
    component: () => Promise<typeof import("*.vue")>;
    children: {
        meta: {
            title: string;
        };
        name: string;
        path: string;
        component: () => Promise<typeof import("*.md")>;
    }[];
}[];
declare const router: import("vue-router").Router;
export default router;
