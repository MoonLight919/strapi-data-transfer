/// <reference types="node" />
import { Writable } from 'stream';
import type { LoadedStrapi } from '@strapi/types';
import type { IDestinationProvider, IMetadata, ProviderType, Transaction } from '../../../../types';
import { restore } from './strategies';
export declare const VALID_CONFLICT_STRATEGIES: string[];
export declare const DEFAULT_CONFLICT_STRATEGY = "restore";
export interface ILocalStrapiDestinationProviderOptions {
    getStrapi(): LoadedStrapi | Promise<LoadedStrapi>;
    autoDestroy?: boolean;
    restore?: restore.IRestoreOptions;
    strategy: 'restore';
}
declare class LocalStrapiDestinationProvider implements IDestinationProvider {
    #private;
    name: string;
    type: ProviderType;
    options: ILocalStrapiDestinationProviderOptions;
    strapi?: LoadedStrapi;
    transaction?: Transaction;
    uploadsBackupDirectoryName: string;
    onWarning?: ((message: string) => void) | undefined;
    constructor(options: ILocalStrapiDestinationProviderOptions);
    bootstrap(): Promise<void>;
    close(): Promise<void>;
    rollback(): Promise<void>;
    beforeTransfer(): Promise<void>;
    getMetadata(): IMetadata;
    getSchemas(): import("@strapi/types/dist/types/utils/string").Dict<import("@strapi/types/dist/types/core/schemas").Schema>;
    createEntitiesWriteStream(): Writable;
    createAssetsWriteStream(): Promise<Writable>;
    createConfigurationWriteStream(): Promise<Writable>;
    createLinksWriteStream(): Promise<Writable>;
}
export declare const createLocalStrapiDestinationProvider: (options: ILocalStrapiDestinationProviderOptions) => LocalStrapiDestinationProvider;
export {};
//# sourceMappingURL=index.d.ts.map