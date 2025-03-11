import AppLayout from "./Layout/AppLayout";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <>
            <AppLayout>
                <AppRouter />
            </AppLayout>
        </>
    );
}

export default App;
