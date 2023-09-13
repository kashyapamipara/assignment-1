import { TransformFnParams } from 'class-transformer';

/**
 * This function used to trim value in transform.
 * @param {TransformFnParams} params Transform function params
 * @return {string} Trimmed value
 */
export function trim(params: TransformFnParams): string {
    const { value } = params;
    return typeof value !== 'string' ? value : value.trim();
}

/**
 * This function converts string to title case.
 *
 * **NOTE:** *It trims by default so need to put another transform for trimming*
 *
 * @param {TransformFnParams} params Transform function params
 * @return {string} Title case value
 */
export function titleCase(params: TransformFnParams): string {
    const { value } = params;
    if (typeof value !== 'string') {
        return value;
    }
    const trimVal = value.trim();
    return trimVal.charAt(0).toUpperCase() + trimVal.slice(1).toLowerCase();
}

/**
 * This function used to convert value to lower case in transform.
 *
 * **NOTE:** *It trims by default so need to put another transform for trimming*
 *
 * @param {TransformFnParams} params Transform function params
 * @return {string} Lower case value
 */
export function lowerCase(params: TransformFnParams): string {
    const { value } = params;
    return typeof value !== 'string' ? value : value.trim().toLowerCase();
}

/**
 * This function used to convert value to upper case in transform.
 *
 * **NOTE:** *It trims by default so need to put another transform for trimming*
 *
 * @param {TransformFnParams} params Transform function params
 * @return {string} Upper case value
 */
export function upperCase(params: TransformFnParams): string {
    const { value } = params;
    return typeof value !== 'string' ? value : value.trim().toUpperCase();
}

/**
 * This function used to convert value to number in transform.
 *
 * **NOTE:** *It trims by default so need to put another transform for trimming*
 *
 * @param {TransformFnParams} params Transform function params
 * @return {number} number value
 */
export function parseIntoNumber(params: TransformFnParams): string {
    const { value } = params;
    return !isNaN(value) ? Number(value) : value;
}
