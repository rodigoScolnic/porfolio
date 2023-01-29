module.exports = {
    index: (req,res) => {
        res.render('index')
    },

    abautme: (req,res) => {
        res.render('abautme')
    },

    skills: (req,res) => {
        res.render('skills')
    },

    work: (req,res) => {
        res.render('work')
    },

    contact: (req,res) => {
        res.render('contact')
    }
}