import placeholderImage from "@/assets/placeholder.svg"

export const LoginSectionImage = () => {
    return (
        <div className="relative hidden bg-muted lg:block">
            <img
                src={placeholderImage}
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    )
}