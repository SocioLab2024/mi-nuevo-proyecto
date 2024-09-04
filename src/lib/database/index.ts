import {TURSO_CONNECTION_URL, TURSO_AUTH_TOKEN} from "$env/static/private";
import * as schema from './schema';
import { driezzle } from 'drizzle-orm/libsql';
import {createClient } from '@libsql/client'

const client = createClient({
    url: TURSO_CONNECTION_URL!,
    authToken: TURSO_AUTH_TOKEN,
    
});

export const db = driezzle(client,{schema});
