import Target from "./../models/Target"

let create = (name, description) => {
    return Target.findOrCreate({
        where: {
            name: name,
            description: description
        }
    })
}

export let seedTargetTable = () => {
    create("SellWithPort visitors yo", "People who have visited any of Port's marketing pages")
        .then(() => {
            create("TLS", "Ticketleap signups who haven't created an event in 7 days.")
        })
        .then(() => {
            create("TLP", "Ticketleap marketing page viewer.")
        })
        .then(() => {
            create("BWH-Eventbrite", "Leads created using BuiltWith to track Eventbrite users.")
        })
        .catch((err) => {
            throw new Error(err.toString())
        })

}