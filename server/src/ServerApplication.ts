import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import corsMiddleware from 'cors'
import {Prisma as PrismaBindings } from "./generated/prisma";
import {Prisma} from "./generated/prisma-client";
import GraphQLJSON from 'graphql-type-json';

export class ServerApplication {
    public app: GraphQLServer;
    public db: Prisma;
    public bindings: PrismaBindings;

    constructor() {
        const options = {
          endpoint: process.env.PRISMA_ENDPOINT,
          secret: process.env.PRISMA_SECRET,
          resolvers,
        };

        const db = new Prisma(options);
        const bindings = new PrismaBindings(options);

        const context = (req) => ({
          ...req,
          db,
          bindings,
        });

        const allResolvers = {
          ...resolvers,
          Json: GraphQLJSON,
        };

        this.app = new GraphQLServer({
          typeDefs: './src/schema.graphql',
          resolvers: allResolvers,
          context,
          resolverValidationOptions: {
            requireResolversForResolveType: false
          },
        } as any);

        this.db = db;
        this.bindings = bindings;


        this.setupMiddlewares();
    }

    public start(): Promise<any> {
        return this.app.start(({ port }) => {
            console.log(`server running on http://localhost:${port}`);
        });
    }

    private setupMiddlewares() {
        this.app.express.use(corsMiddleware());
    }


}

