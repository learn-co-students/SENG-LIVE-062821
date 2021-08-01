import { SetupWorkerInternalContext, StartOptions } from '../glossary';
export declare const createStart: (context: SetupWorkerInternalContext) => (options?: StartOptions | undefined) => Promise<ServiceWorkerRegistration>;
