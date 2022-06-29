import ActorForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm
                model={{
                    name: 'Kaley Cuoco',
                    dateOfBirth: new Date('1972-06-24T00:00:00'),
                    biography: `# Kaley Cuoco
                    
This person was born in **USA**`,
                    pictureURL: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMTI4MTkyMTUxNTI4ODA4/gettyimages-841034812.jpg'
                }}
                onSubmit={values => console.log(values)} />
        </>
    )
}