# EmpleadosApi

All URIs are relative to *http://localhost:3001*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**empleadosDelete**](#empleadosdelete) | **DELETE** /empleados | Eliminar un empleado|
|[**empleadosGet**](#empleadosget) | **GET** /empleados | Obtener la lista de empleados|
|[**empleadosPost**](#empleadospost) | **POST** /empleados | Crear un nuevo empleado|
|[**empleadosPut**](#empleadosput) | **PUT** /empleados | Actualizar un empleado existente|

# **empleadosDelete**
> empleadosDelete(empleadoDelete)


### Example

```typescript
import {
    EmpleadosApi,
    Configuration,
    EmpleadoDelete
} from './api';

const configuration = new Configuration();
const apiInstance = new EmpleadosApi(configuration);

let empleadoDelete: EmpleadoDelete; //

const { status, data } = await apiInstance.empleadosDelete(
    empleadoDelete
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **empleadoDelete** | **EmpleadoDelete**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empleado eliminado exitosamente |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **empleadosGet**
> Array<Empleado> empleadosGet()


### Example

```typescript
import {
    EmpleadosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmpleadosApi(configuration);

const { status, data } = await apiInstance.empleadosGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Empleado>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Lista de empleados obtenida exitosamente |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **empleadosPost**
> empleadosPost(empleadoInput)


### Example

```typescript
import {
    EmpleadosApi,
    Configuration,
    EmpleadoInput
} from './api';

const configuration = new Configuration();
const apiInstance = new EmpleadosApi(configuration);

let empleadoInput: EmpleadoInput; //

const { status, data } = await apiInstance.empleadosPost(
    empleadoInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **empleadoInput** | **EmpleadoInput**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Empleado creado exitosamente |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **empleadosPut**
> empleadosPut(empleadoUpdate)


### Example

```typescript
import {
    EmpleadosApi,
    Configuration,
    EmpleadoUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new EmpleadosApi(configuration);

let empleadoUpdate: EmpleadoUpdate; //

const { status, data } = await apiInstance.empleadosPut(
    empleadoUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **empleadoUpdate** | **EmpleadoUpdate**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Empleado actualizado exitosamente |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

