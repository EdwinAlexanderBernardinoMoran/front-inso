import { CustomLogo } from "@/components/custom/CustomLogo"

export const LoginHeader = () => {
    return (
        <div className="flex justify-center gap-2 md:justify-start">
            <CustomLogo url="/auth/login" />
        </div>
    )
}