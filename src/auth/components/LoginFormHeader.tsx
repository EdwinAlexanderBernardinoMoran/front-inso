interface LoginFormHeaderProps {
    title: string
    description: string
}

export const LoginFormHeader = ({ title, description }: LoginFormHeaderProps) => {
    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-balance text-sm text-muted-foreground">{description}</p>
        </div>
    )
}