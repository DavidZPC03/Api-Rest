# EmpleadosApi

All URIs are relative to *http://localhost:3001*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**empleadosDelete**](EmpleadosApi.md#empleadosDelete) | **DELETE** /empleados | Eliminar un empleado |
| [**empleadosGet**](EmpleadosApi.md#empleadosGet) | **GET** /empleados | Obtener la lista de empleados |
| [**empleadosPost**](EmpleadosApi.md#empleadosPost) | **POST** /empleados | Crear un nuevo empleado |
| [**empleadosPut**](EmpleadosApi.md#empleadosPut) | **PUT** /empleados | Actualizar un empleado existente |


<a name="empleadosDelete"></a>
# **empleadosDelete**
> empleadosDelete(EmpleadoDelete)

Eliminar un empleado

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **EmpleadoDelete** | [**EmpleadoDelete**](../Models/EmpleadoDelete.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="empleadosGet"></a>
# **empleadosGet**
> List empleadosGet()

Obtener la lista de empleados

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Empleado.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="empleadosPost"></a>
# **empleadosPost**
> empleadosPost(EmpleadoInput)

Crear un nuevo empleado

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **EmpleadoInput** | [**EmpleadoInput**](../Models/EmpleadoInput.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="empleadosPut"></a>
# **empleadosPut**
> empleadosPut(EmpleadoUpdate)

Actualizar un empleado existente

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **EmpleadoUpdate** | [**EmpleadoUpdate**](../Models/EmpleadoUpdate.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

