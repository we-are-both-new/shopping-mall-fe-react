import { useDispatch } from "react-redux";
import AppLayout from "./Layout/AppLayout";
import AppRouter from "./routes/AppRouter";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { getProducts } from "./redux/itemsSlice";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <>
            <AppLayout>
                <AppRouter />
            </AppLayout>
        </>
    );
}

export default App;
