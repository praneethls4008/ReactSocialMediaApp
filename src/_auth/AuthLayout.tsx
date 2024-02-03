import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = ()=>{
    const isAuthenticated = false;
    const navigate = useNavigate();
    return(
        <>
            {
                isAuthenticated ? navigate('/')
                : (
                    <section>
                        <Outlet/>
                    </section>
                )
            }
        </>
    )
}

export default AuthLayout;