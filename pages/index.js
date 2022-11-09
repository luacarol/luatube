function HomePage() {
    const estilosDaHomePage = { backgroundColor: "red" }

    return (
        <div style={estilosDaHomePage}>
            <Menu />
            <Header />
            <Timeline />
        </div>
    )
}

export default HomePage

function Menu() {
    return (
        <div>
            Menu
        </div>
    )
}

function Header() {
    return (
        <div>
            Header
        </div>
    )
}

function Timeline() {
    return (
        <div>
            Timeline
        </div>
    )
}