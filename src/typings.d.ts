declare module '*.tfff';
declare module "*.png" {
    const value: any;
    export default value;
}
declare function require(path: string);

declare module "*.json" {
    const value: any;
    export default value;
}