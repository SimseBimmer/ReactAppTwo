import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"

export const AboutPage = () => {

    const description = "Her kan du læse hvem vi er, og hvad vi står for"

    return (
        // <h1 class="currentRoute">About!</h1> // description={description}
        <ContentWrapper title="Om os" subtitle={description}> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus aut tenetur porro autem tempore modi necessitatibus quaerat dignissimos perspiciatis blanditiis ipsa rerum, totam dolorum vel aperiam dolores ut quis.</p>
        </ContentWrapper>
    )
}
