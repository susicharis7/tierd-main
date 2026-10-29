import type { FastifyInstance } from 'fastify';
import type { MessageResponse } from '@tierd/types';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', async function (): Promise<MessageResponse> {
    return { message: 'Hello API' };
  });
}
