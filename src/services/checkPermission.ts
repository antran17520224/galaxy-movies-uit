import { storeConfig } from "../redux/store/configureStore.dev";

const store = storeConfig.store;

// let acceptedRole: Array<string> = JSON.parse(
//     store.getState().LoginPage.acceptedRole
// );

// export const isGranted = (permissionKey: string) => {
//     if (acceptedRole === null) {
//         acceptedRole = JSON.parse(localStorage.getItem("acceptedRole"));
//     }
//     if (acceptedRole.includes(permissionKey)) {
//         return true;
//     }
//     return false;
// };
