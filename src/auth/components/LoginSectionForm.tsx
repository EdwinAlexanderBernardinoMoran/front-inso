import { LoginForm } from "./LoginForm"
import { LoginHeader } from "./LoginHeader"

export const LoginSectionForm = () => {
    return (
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <LoginHeader />

            <LoginForm />
        </div>
    )
}