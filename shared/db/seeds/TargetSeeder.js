import Target from "./../models/Target"


export let TargetSeeder = () => {
    Target.create({
        name: "TestTarget",
        description: "Test target"
    })
}