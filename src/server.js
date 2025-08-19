import { createServer, Model } from "miragejs";

createServer({
  models: {
    merc: Model,
    users: Model
  },

  seeds(server) {
    server.create("merc", {
      id: "1",
      hostId: "123",
      name: "Eisenwölfe", // German: Iron Wolves
      price: 50,
      description:
        "A disciplined band of Landsknecht swordsmen. Known for their iron discipline and ferocity in holding the line against overwhelming foes.",
      imageUrl: "/images/m1.png",
      type: "rugged",
    });

    server.create("merc", {
      id: "2",
      hostId: "123", // same as id 1
      name: "Arcs Pourpres", // French: Crimson Bows
      price: 70,
      description:
        "Elite longbowmen from the French countryside. Their volleys can blot out the sun, devastating enemy ranks before the melee begins.",
      imageUrl: "/images/m2.png",
      type: "luxury",
    });

    server.create("merc", {
      id: "3",
      hostId: "123", // same as id 1 and 2
      name: "Lance d’Argento", // Italian: Silver Lances
      price: 120,
      description:
        "Renowned Italian condottieri cavalry, armored in gleaming steel and trained to shatter enemy lines with thunderous charges.",
      imageUrl: "/images/m3.png",
      type: "rugged",
    });

    server.create("merc", {
      id: "4",
      hostId: "456",
      name: "Kamenolamaci", // Czech: Stonebreakers
      price: 90,
      description:
        "A rough band of Czech siege specialists and axemen, feared for their skill in tearing down gates and fortifications.",
      imageUrl: "/images/m4.png",
      type: "rugged",
    });

    server.create("merc", {
      id: "5",
      hostId: "567",
      name: "Corvi Notturni", // Italian: Night Ravens
      price: 100,
      description:
        "Dark-cloaked assassins for hire, famed across Italy for their stealth, sabotage, and ruthless elimination of enemy commanders.",
      imageUrl: "/images/m5.png",
      type: "simple",
    });

    server.create("merc", {
      id: "6",
      hostId: "678",
      name: "Boucliers d’Émeraude", // French: Emerald Shields
      price: 80,
      description:
        "A steadfast French company of shield-bearers, masters of forming defensive walls to protect lords, caravans, and castles alike.",
      imageUrl: "/images/m6.png",
      type: "simple",
    });
    server.create("user", {
      id: "123",
      email: "b@b.com",
      password: "p123",
      name: "Bob",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/mercs", (schema, request) => {
      return schema.mercs.all();
    });

    this.get("/mercs/:id", (schema, request) => {
      const id = request.params.id;
      return schema.mercs.find(id);
    });

    this.get("/host/mercs", (schema, request) => {
      // Hard-code the hostId for now
      return schema.mercs.where({ hostId: "123" });
    });

    this.get("/host/mercs/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.mercs.where({ id, hostId: "123" });
    });

    // AUUUUUUUUUUUUUUUUUUUUUUUTH

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      // ⚠️ This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😅
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          { "Content-Type": "application/json" },
          JSON.stringify({ message: "No user with those credentials found!" })
        );
      }

      // At the very least, don't send the password back to the client 😅
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });
  },
});
