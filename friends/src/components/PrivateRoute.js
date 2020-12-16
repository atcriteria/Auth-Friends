import react from 'react'
import { Route, Redirect } from 'react-router-dom';

/* 
    This file basically is doing the same thing Route does from react-router. We are giving it 
    a component to render and passing in the default Route props all the way through with some
    prop drilling. Nothing too crazy. We are rendering the component this way so we can check
    for a token in LocalStorage and if it doesnt exist we redirect to the login page, otherwise
    we render the desired component. There's some really good functionality going on here.
*/

// '...rest' is a default spread operator that grabs the rest of the data and adds it, like spread
// Here I've specified a specific piece of data to grab from props, component, but I also want the
// 'rest' of the things passed in through props, so I grab those with ...rest!
export default function PrivateRoute({component: Component, ...rest}){
    return(
        <Route 
        {...rest}
        // Grabbing the Route props in props below.
        render={(props) => {
            if (localStorage.getItem("token")) {
                return(<Component {...props} />)
            } else {
                return <Redirect to="login" />
            }
        }
        }
            />
    )
}