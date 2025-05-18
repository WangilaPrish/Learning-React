import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"

const App = () => {
    return (
        <div>
            <UserInfo name="John Doe" email="nabwonya@gmail.com " id={"1gh"} />
            <AdminInfo name="Admin" email="king@gmail.com" id={2} role="Join" permissions={["accepted"]} />
        </div>
    )
}

export default App
