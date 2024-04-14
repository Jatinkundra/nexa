export default function RootLayout({ children }) {
    return (
        <>
            <div>header</div>
            {children}
            <div>footer</div>
        </>
    )
}
