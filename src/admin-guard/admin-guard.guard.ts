import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuardGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const validRoles = ['admin'];
        const req = context.switchToHttp().getRequest();
        const user = req.user;

        for (const role of user.roles) {
            if (validRoles.includes(role)) {
                return true;
            }
        }

        throw new UnauthorizedException('Forbidden for your role');
    }
}
