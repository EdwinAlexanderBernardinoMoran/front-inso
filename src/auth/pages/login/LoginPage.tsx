import { LoginSectionForm } from "@/auth/components/LoginSectionForm"
import { LoginSectionImage } from "@/auth/components/LoginSectionImage"

export function LoginPage() {
    return (
        <>
            {/* Secction form */}
            <LoginSectionForm />

            {/* Section image */}
            <LoginSectionImage />
        </>
    )
}