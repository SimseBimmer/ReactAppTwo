export const ContentWrapper = ({ title, subtitle, description, children }) => {

    document.title = title;

    if (description) {
        document.querySelector('meta [name="description"]')
            .setAttribute('content', description)
    }

    return (
        <>
            <h1 className="currentRoute">{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <div>{children}</div>
        </>
    )
}