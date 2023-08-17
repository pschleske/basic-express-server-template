// export const handleBaseEndpoint = (req, res) => {
//     res.send("<h1>Hello there!</h1>")}

// const anotherFunc = () => {}

// export default {
//     handleBaseEndpoint,
//     anotherFunc
// }

export default {
    handleBaseEndpoint: (req, res) => {
        const { name, age, favColor } = req.session.me
        res.send(`<h1>Hello there ${name}, ${age}, ${favColor}</h1>`)
    },
    handleSeeMe: (req, res) => {
        const { name } = req.query
        res.send(`Hi there ${name}`)
    },
    handleAddMeToSess: (req, res) => {
        const { name, age, favColor } = req.body
        req.session.me = { name, age, favColor }
        res.sendStatus(200)
    }
}

    // to import in app.js 
    // import ctrl from "./controller.js"
    // const {anotherFunc, handleBaseEndpoint} = ctrl
