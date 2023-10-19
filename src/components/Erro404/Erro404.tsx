import { useNavigate } from "react-router-dom";
import Btn from "../Buttons/Btn";

export default function Erro404() {

    const navigate = useNavigate();

    function RedirectTo() {
        navigate('/');
    }

    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-[8rem]">
            <h1 className="text-primary text-6xl font-semibold">404</h1>
            <h2 className="text-4xl font-semibold">Oopsss! Page Not Found</h2>
            <p className="text-lg font-medium">We couldn't find the page you are looking for</p>
            <Btn
                name="Go to home page"
                bgColor="bg-primary border-primary text-white"
                hover="hover:bg-white hover:text-primary"
                func={RedirectTo}
            />
        </div>
    )
}