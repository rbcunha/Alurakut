import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

  if (request.method === 'POST') {
    const TOKEN = 'c78fa3074bbf9230e07f9cf09fe591'
    const client = new SiteClient(TOKEN);

    //Validar os dados antes de sair cadastrando!!!!!!!!!
    const registroCriado = await client.items.create({
      itemType: "975415", //ID do model de community criado pelo Dato.
      ...request.body,
      //title:"Comunidade de Teste",
      //imageUrl: "https://github.com/rbcunha.png",
      //creatorSlug:"rbcunha"
    })

    console.log(registroCriado);

    response.json({
      dados: 'Um dado qualquer',
      registroCriado: registroCriado,
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}