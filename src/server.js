import { createServer, Model } from "miragejs"

createServer({
    models: {
        merc: Model,
    },

    seeds(server) {
        server.create("merc", { 
            id: "1", 
            name: "Eisenwölfe", // German: Iron Wolves
            price: 50, 
            description: "A disciplined band of Landsknecht swordsmen. Known for their iron discipline and ferocity in holding the line against overwhelming foes.", 
            imageUrl: "/images/m1.png", 
            type: "infantry" 
        })

        server.create("merc", { 
            id: "2", 
            name: "Arcs Pourpres", // French: Crimson Bows
            price: 70, 
            description: "Elite longbowmen from the French countryside. Their volleys can blot out the sun, devastating enemy ranks before the melee begins.", 
            imageUrl: "/images/m2.png", 
            type: "axeman" 
        })

        server.create("merc", { 
            id: "3", 
            name: "Lance d’Argento", // Italian: Silver Lances
            price: 120, 
            description: "Renowned Italian condottieri cavalry, armored in gleaming steel and trained to shatter enemy lines with thunderous charges.", 
            imageUrl: "/images/m3.png", 
            type: "flailman" 
        })

        server.create("merc", { 
            id: "4", 
            name: "Kamenolamaci", // Czech: Stonebreakers
            price: 90, 
            description: "A rough band of Czech siege specialists and axemen, feared for their skill in tearing down gates and fortifications.", 
            imageUrl: "/images/m4.png", 
            type: "siege" 
        })

        server.create("merc", { 
            id: "5", 
            name: "Corvi Notturni", // Italian: Night Ravens
            price: 100, 
            description: "Dark-cloaked assassins for hire, famed across Italy for their stealth, sabotage, and ruthless elimination of enemy commanders.", 
            imageUrl: "/images/m5.png", 
            type: "specialist" 
        })

        server.create("merc", { 
            id: "6", 
            name: "Boucliers d’Émeraude", // French: Emerald Shields
            price: 80, 
            description: "A steadfast French company of shield-bearers, masters of forming defensive walls to protect lords, caravans, and castles alike.", 
            imageUrl: "/images/m6.png", 
            type: "defenders" 
        })
    },

    routes() {
        this.namespace = "api"

        this.get("/mercs", (schema, request) => {
            return schema.mercs.all()
        })
        
        this.get("/mercs/:id", (schema, request) => {
            const id = request.params.id
            return schema.mercs.find(id)
        })
    }
})
