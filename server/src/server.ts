import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//GET: Buscar ou listar uma informação
//POST: criare alguma nova info
//PUT: Atualiza info existente
//DELETE: Deletar uma inf

//Corpo (request body): Dados para criação ou atualização de um reguistto
// Route Params: Identificar qual recurso eu quero atualizar ou deletar 
//Query Params: Pagina 



//localhost:3333/users

app.listen(3333);
