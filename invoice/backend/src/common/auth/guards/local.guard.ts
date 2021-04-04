import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// associated with local strategy
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
