const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2152738",
    lng: "-49.6534174",
    name: "Lar dos meninos",
    about:
      "Presta assistência a criança de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "9987301321",
      images: [
      "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1576025773492-cc2eb828c42a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horários de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  // //Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // // consultar somnete 1 orphanato, pelo id

  const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanages);

  // // deletar dados da tabela
  // console.log( await db.run('DELETE FROM orphanages WHERE id = "5"'))

});
