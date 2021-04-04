import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    try {
      if (data) return user[data];
      else return user;
    } catch (e) {
      throw new Error(e);
    }
  },
);
