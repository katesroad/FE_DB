import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Cookies = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const cookies = request.cookies;
    try {
      if (data) return cookies[data];
      else return cookies;
    } catch (e) {
      throw new Error(e);
    }
  },
);
