import { ServiceResult } from './service-result';
export class ServiceResponse<T> extends ServiceResult {
    object: T;
}
