export const Layout = ({children}) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="">
                {children}
            </div>
        </div>
    )
}
