import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { DecodedIdToken } from 'firebase-admin/auth';
import type { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user: DecodedIdToken;
}

export interface User {
  id: string;
}

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
    const decoded = request.user;
    return { id: decoded.uid };
  },
);
