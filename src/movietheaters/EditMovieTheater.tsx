import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{
                    name: 'Cine Centre',
                    latitude: -25.872195679349073,
                    longitude: 28.136348426342014
                }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}