import { CallHandler, ExecutionContext, Injectable, NestInterceptor, } from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class TryCatchInterceptor<T> implements NestInterceptor<T, any> {
    private readonly logger = new Logger(TryCatchInterceptor.name);
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
        return next.handle().pipe(
            map((data: any) => ({
                success: true,
                message: "Success",
                data: data,
            })),
            catchError((error) => {
                this.logger.error(`Error occurred: ${error.message}`, error.stack);
                return throwError(() => error);
            }),
        );
    }
}
