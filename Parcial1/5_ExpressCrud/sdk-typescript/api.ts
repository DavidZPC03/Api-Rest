/* tslint:disable */
/* eslint-disable */
/**
 * API Empleados
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface Empleado
 */
export interface Empleado {
    /**
     * 
     * @type {number}
     * @memberof Empleado
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Empleado
     */
    'nombre'?: string;
    /**
     * 
     * @type {number}
     * @memberof Empleado
     */
    'edad'?: number;
    /**
     * 
     * @type {string}
     * @memberof Empleado
     */
    'pais'?: string;
    /**
     * 
     * @type {string}
     * @memberof Empleado
     */
    'cargo'?: string;
    /**
     * 
     * @type {number}
     * @memberof Empleado
     */
    'anios'?: number;
}
/**
 * 
 * @export
 * @interface EmpleadoDelete
 */
export interface EmpleadoDelete {
    /**
     * 
     * @type {number}
     * @memberof EmpleadoDelete
     */
    'id': number;
}
/**
 * 
 * @export
 * @interface EmpleadoInput
 */
export interface EmpleadoInput {
    /**
     * 
     * @type {string}
     * @memberof EmpleadoInput
     */
    'nombre': string;
    /**
     * 
     * @type {number}
     * @memberof EmpleadoInput
     */
    'edad': number;
    /**
     * 
     * @type {string}
     * @memberof EmpleadoInput
     */
    'pais': string;
    /**
     * 
     * @type {string}
     * @memberof EmpleadoInput
     */
    'cargo': string;
    /**
     * 
     * @type {number}
     * @memberof EmpleadoInput
     */
    'anios': number;
}
/**
 * 
 * @export
 * @interface EmpleadoUpdate
 */
export interface EmpleadoUpdate {
    /**
     * 
     * @type {number}
     * @memberof EmpleadoUpdate
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof EmpleadoUpdate
     */
    'nombre': string;
    /**
     * 
     * @type {number}
     * @memberof EmpleadoUpdate
     */
    'edad': number;
    /**
     * 
     * @type {string}
     * @memberof EmpleadoUpdate
     */
    'pais': string;
    /**
     * 
     * @type {string}
     * @memberof EmpleadoUpdate
     */
    'cargo': string;
    /**
     * 
     * @type {number}
     * @memberof EmpleadoUpdate
     */
    'anios': number;
}

/**
 * EmpleadosApi - axios parameter creator
 * @export
 */
export const EmpleadosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Eliminar un empleado
         * @param {EmpleadoDelete} empleadoDelete 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosDelete: async (empleadoDelete: EmpleadoDelete, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'empleadoDelete' is not null or undefined
            assertParamExists('empleadosDelete', 'empleadoDelete', empleadoDelete)
            const localVarPath = `/empleados`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(empleadoDelete, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Obtener la lista de empleados
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/empleados`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Crear un nuevo empleado
         * @param {EmpleadoInput} empleadoInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosPost: async (empleadoInput: EmpleadoInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'empleadoInput' is not null or undefined
            assertParamExists('empleadosPost', 'empleadoInput', empleadoInput)
            const localVarPath = `/empleados`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(empleadoInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Actualizar un empleado existente
         * @param {EmpleadoUpdate} empleadoUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosPut: async (empleadoUpdate: EmpleadoUpdate, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'empleadoUpdate' is not null or undefined
            assertParamExists('empleadosPut', 'empleadoUpdate', empleadoUpdate)
            const localVarPath = `/empleados`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(empleadoUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmpleadosApi - functional programming interface
 * @export
 */
export const EmpleadosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmpleadosApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Eliminar un empleado
         * @param {EmpleadoDelete} empleadoDelete 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async empleadosDelete(empleadoDelete: EmpleadoDelete, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.empleadosDelete(empleadoDelete, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmpleadosApi.empleadosDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Obtener la lista de empleados
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async empleadosGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Empleado>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.empleadosGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmpleadosApi.empleadosGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Crear un nuevo empleado
         * @param {EmpleadoInput} empleadoInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async empleadosPost(empleadoInput: EmpleadoInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.empleadosPost(empleadoInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmpleadosApi.empleadosPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Actualizar un empleado existente
         * @param {EmpleadoUpdate} empleadoUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async empleadosPut(empleadoUpdate: EmpleadoUpdate, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.empleadosPut(empleadoUpdate, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EmpleadosApi.empleadosPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EmpleadosApi - factory interface
 * @export
 */
export const EmpleadosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmpleadosApiFp(configuration)
    return {
        /**
         * 
         * @summary Eliminar un empleado
         * @param {EmpleadoDelete} empleadoDelete 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosDelete(empleadoDelete: EmpleadoDelete, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.empleadosDelete(empleadoDelete, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Obtener la lista de empleados
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosGet(options?: RawAxiosRequestConfig): AxiosPromise<Array<Empleado>> {
            return localVarFp.empleadosGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Crear un nuevo empleado
         * @param {EmpleadoInput} empleadoInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosPost(empleadoInput: EmpleadoInput, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.empleadosPost(empleadoInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Actualizar un empleado existente
         * @param {EmpleadoUpdate} empleadoUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        empleadosPut(empleadoUpdate: EmpleadoUpdate, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.empleadosPut(empleadoUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmpleadosApi - object-oriented interface
 * @export
 * @class EmpleadosApi
 * @extends {BaseAPI}
 */
export class EmpleadosApi extends BaseAPI {
    /**
     * 
     * @summary Eliminar un empleado
     * @param {EmpleadoDelete} empleadoDelete 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmpleadosApi
     */
    public empleadosDelete(empleadoDelete: EmpleadoDelete, options?: RawAxiosRequestConfig) {
        return EmpleadosApiFp(this.configuration).empleadosDelete(empleadoDelete, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Obtener la lista de empleados
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmpleadosApi
     */
    public empleadosGet(options?: RawAxiosRequestConfig) {
        return EmpleadosApiFp(this.configuration).empleadosGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Crear un nuevo empleado
     * @param {EmpleadoInput} empleadoInput 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmpleadosApi
     */
    public empleadosPost(empleadoInput: EmpleadoInput, options?: RawAxiosRequestConfig) {
        return EmpleadosApiFp(this.configuration).empleadosPost(empleadoInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Actualizar un empleado existente
     * @param {EmpleadoUpdate} empleadoUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmpleadosApi
     */
    public empleadosPut(empleadoUpdate: EmpleadoUpdate, options?: RawAxiosRequestConfig) {
        return EmpleadosApiFp(this.configuration).empleadosPut(empleadoUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}



