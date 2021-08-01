const mongoose = require('./connection')
const Presentation = require('./models/presentation')


let presentations = [
    new Presentation.Presentation({
        name:"Presentation App Example",
        sections:[
            new Presentation.Section({    
                title: "Intro",
                time: 2,
                talking_points:[
                    new Presentation.TalkingPoint({
                        point:"introduce the app"
                    }),                    
                    new Presentation.TalkingPoint({
                        point:"include any other talking point you may have for the middle"
                    })
                ]
            }),
            new Presentation.Section({    
                title: "middle",
                time: 3,
                talking_points:[
                    new Presentation.TalkingPoint({
                        point:"introduce the app"
                    })
                ]
            }),
            new Presentation.Section({    
                title: "End",
                time: 2,
                talking_points:[
                    new Presentation.TalkingPoint({
                        point:"This is the end of the app"
                    })
                ]
            })
        ]

    }),
] 

for(let i = 0 ; i < presentations.length;i++){
    presentations[i].save();
}

       

