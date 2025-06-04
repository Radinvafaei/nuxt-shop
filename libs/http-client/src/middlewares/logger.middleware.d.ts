import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { IMiddleware } from './interface';
/**
 * Middleware for logging request and response information for Axios requests.
 * Utilizes moment.js for timestamp formatting and nookies for cookie management.
 *
 * @class LoggerMiddleware
 * @implements {IMiddleware}
 */
export default class LoggerMiddleware implements IMiddleware {
    /**
     * Environment where the middleware is executed. Defaults to `development`.
     * @type {string}
     */
    environment: string;
    /**
     * Generates the current timestamp in a formatted string.
     *
     * @private
     * @static
     */
    /**
     * Intercepts and logs the Axios request before it is sent.
     *
     * @param {InternalAxiosRequestConfig} config The Axios request configuration.
     * @returns {InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>} The modified or unmodified Axios request configuration.
     */
    onRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
    /**
     * Intercepts and logs any Axios request error.
     *
     * @param {any} error The error thrown during the Axios request.
     * @returns {Promise<never>} A promise that rejects with the provided error.
     */
    onRequestError(error: any): any;
    /**
     * Intercepts and logs the Axios response.
     *
     * @param {AxiosResponse} response The response from the Axios request.
     * @returns {AxiosResponse | Promise<AxiosResponse>} The Axios response, potentially modified.
     */
    onResponse(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse>;
    /**
     * Intercepts and logs any Axios response error.
     *
     * @param {any} error The error thrown in response to the Axios request.
     * @returns {Promise<never>} A promise that rejects with the provided error.
     */
    onResponseError(error: any): any;
}
//# sourceMappingURL=logger.middleware.d.ts.map