
const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            THis is auth layout
            <div>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;