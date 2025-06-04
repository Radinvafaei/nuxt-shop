import { AxiosResponse, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { IMiddleware } from '../middlewares';
import { IHttpClient } from './interface';
/**
 * Represents an HTTP client to make requests using Axios as the underlying adapter.
 * Allows for the addition of middleware to intercept requests and responses.
 *
 * @class HttpClient
 * @implements {IHttpClient}
 */
export default class HttpClient implements IHttpClient {
    /**
     * The Axios instance used by the HTTP client.
     *
     * @private
     * @type {AxiosInstance}
     */
    private readonly adapter;
    /**
     * A set of middleware objects that are applied to the Axios instance.
     *
     * @private
     * @type {Set<IMiddleware>}
     */
    private readonly _middlewares;
    /**
     * Indicates whether the HttpClient has been booted and is ready to make requests.
     *
     * @private
     * @type {boolean}
     */
    private isBooted;
    /**
     * Creates an instance of HttpClient.
     * Initializes the Axios adapter with provided configuration and sets the booted flag to false.
     *
     * @param {CreateAxiosDefaults} config The Axios configuration used to create the Axios instance.
     */
    constructor(config: CreateAxiosDefaults);
    /**
     * Provides access to the middleware set. Middleware can only be added before the HttpClient is booted.
     *
     * @public
     * @throws {Error} Throws an error if trying to access middleware after the client has been booted.
     * @returns {Set<IMiddleware>} The set of middleware.
     */
    get middlewares(): Set<IMiddleware>;
    /**
     * Boots the HttpClient, registering any middleware added to the Axios instance.
     * After this method is called, no more middleware can be added.
     *
     * @public
     */
    boot(): void;
    /**
     * Makes an HTTP request using the Axios instance.
     *
     * @template T The expected response data type.
     * @template R The Axios response type, defaulting to AxiosResponse<T>.
     * @param {AxiosRequestConfig} config The Axios request configuration.
     * @throws {Error} Throws an error if the HttpClient has not been booted yet.
     * @returns {Promise<R>} A promise that resolves to the Axios response.
     */
    request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
}
//# sourceMappingURL=client.d.ts.map