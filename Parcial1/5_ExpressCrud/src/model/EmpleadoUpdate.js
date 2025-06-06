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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EmpleadoUpdate model module.
 * @module model/EmpleadoUpdate
 * @version 1.0.0
 */
class EmpleadoUpdate {
    /**
     * Constructs a new <code>EmpleadoUpdate</code>.
     * @alias module:model/EmpleadoUpdate
     * @param id {Number} 
     * @param nombre {String} 
     * @param edad {Number} 
     * @param pais {String} 
     * @param cargo {String} 
     * @param anios {Number} 
     */
    constructor(id, nombre, edad, pais, cargo, anios) { 
        
        EmpleadoUpdate.initialize(this, id, nombre, edad, pais, cargo, anios);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nombre, edad, pais, cargo, anios) { 
        obj['id'] = id;
        obj['nombre'] = nombre;
        obj['edad'] = edad;
        obj['pais'] = pais;
        obj['cargo'] = cargo;
        obj['anios'] = anios;
    }

    /**
     * Constructs a <code>EmpleadoUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmpleadoUpdate} obj Optional instance to populate.
     * @return {module:model/EmpleadoUpdate} The populated <code>EmpleadoUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmpleadoUpdate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('nombre')) {
                obj['nombre'] = ApiClient.convertToType(data['nombre'], 'String');
            }
            if (data.hasOwnProperty('edad')) {
                obj['edad'] = ApiClient.convertToType(data['edad'], 'Number');
            }
            if (data.hasOwnProperty('pais')) {
                obj['pais'] = ApiClient.convertToType(data['pais'], 'String');
            }
            if (data.hasOwnProperty('cargo')) {
                obj['cargo'] = ApiClient.convertToType(data['cargo'], 'String');
            }
            if (data.hasOwnProperty('anios')) {
                obj['anios'] = ApiClient.convertToType(data['anios'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmpleadoUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmpleadoUpdate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmpleadoUpdate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['nombre'] && !(typeof data['nombre'] === 'string' || data['nombre'] instanceof String)) {
            throw new Error("Expected the field `nombre` to be a primitive type in the JSON string but got " + data['nombre']);
        }
        // ensure the json data is a string
        if (data['pais'] && !(typeof data['pais'] === 'string' || data['pais'] instanceof String)) {
            throw new Error("Expected the field `pais` to be a primitive type in the JSON string but got " + data['pais']);
        }
        // ensure the json data is a string
        if (data['cargo'] && !(typeof data['cargo'] === 'string' || data['cargo'] instanceof String)) {
            throw new Error("Expected the field `cargo` to be a primitive type in the JSON string but got " + data['cargo']);
        }

        return true;
    }


}

EmpleadoUpdate.RequiredProperties = ["id", "nombre", "edad", "pais", "cargo", "anios"];

/**
 * @member {Number} id
 */
EmpleadoUpdate.prototype['id'] = undefined;

/**
 * @member {String} nombre
 */
EmpleadoUpdate.prototype['nombre'] = undefined;

/**
 * @member {Number} edad
 */
EmpleadoUpdate.prototype['edad'] = undefined;

/**
 * @member {String} pais
 */
EmpleadoUpdate.prototype['pais'] = undefined;

/**
 * @member {String} cargo
 */
EmpleadoUpdate.prototype['cargo'] = undefined;

/**
 * @member {Number} anios
 */
EmpleadoUpdate.prototype['anios'] = undefined;






export default EmpleadoUpdate;

