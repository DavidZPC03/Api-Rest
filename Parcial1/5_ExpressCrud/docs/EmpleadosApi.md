# ApiEmpleados.EmpleadosApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**empleadosDelete**](EmpleadosApi.md#empleadosDelete) | **DELETE** /empleados | Eliminar un empleado
[**empleadosGet**](EmpleadosApi.md#empleadosGet) | **GET** /empleados | Obtener la lista de empleados
[**empleadosPost**](EmpleadosApi.md#empleadosPost) | **POST** /empleados | Crear un nuevo empleado
[**empleadosPut**](EmpleadosApi.md#empleadosPut) | **PUT** /empleados | Actualizar un empleado existente



## empleadosDelete

> empleadosDelete(empleadoDelete)

Eliminar un empleado

### Example

```javascript
import ApiEmpleados from 'api_empleados';

let apiInstance = new ApiEmpleados.EmpleadosApi();
let empleadoDelete = new ApiEmpleados.EmpleadoDelete(); // EmpleadoDelete | 
apiInstance.empleadosDelete(empleadoDelete, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **empleadoDelete** | [**EmpleadoDelete**](EmpleadoDelete.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## empleadosGet

> [Empleado] empleadosGet()

Obtener la lista de empleados

### Example

```javascript
import ApiEmpleados from 'api_empleados';

let apiInstance = new ApiEmpleados.EmpleadosApi();
apiInstance.empleadosGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Empleado]**](Empleado.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## empleadosPost

> empleadosPost(empleadoInput)

Crear un nuevo empleado

### Example

```javascript
import ApiEmpleados from 'api_empleados';

let apiInstance = new ApiEmpleados.EmpleadosApi();
let empleadoInput = new ApiEmpleados.EmpleadoInput(); // EmpleadoInput | 
apiInstance.empleadosPost(empleadoInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **empleadoInput** | [**EmpleadoInput**](EmpleadoInput.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## empleadosPut

> empleadosPut(empleadoUpdate)

Actualizar un empleado existente

### Example

```javascript
import ApiEmpleados from 'api_empleados';

let apiInstance = new ApiEmpleados.EmpleadosApi();
let empleadoUpdate = new ApiEmpleados.EmpleadoUpdate(); // EmpleadoUpdate | 
apiInstance.empleadosPut(empleadoUpdate, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **empleadoUpdate** | [**EmpleadoUpdate**](EmpleadoUpdate.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

