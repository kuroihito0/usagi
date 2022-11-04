import One from "./page/Home";
import Two from "./page/Register";

const routes = [
    { path:"/",component:One, exact:true},
    { path:"./two", component:Two,},
];

export default routes;