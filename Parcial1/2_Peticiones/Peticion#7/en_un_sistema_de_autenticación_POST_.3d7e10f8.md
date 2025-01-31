`POST https://dummyjson.com/users/add`  
*accept*: */*  
*accept-encoding*: gzip, deflate, br  
*content-length*: 127  
*content-type*: application/json  
*user-agent*: httpyac  
  
```json  
{  
  "firstName": "David",  
  "lastName": "Pérez",  
  "age": 25,  
  "gender": "Male",  
  "email": "David.perez@example.com"  
}  
```  
  
`HTTP/1.1 201 - Created`  
*access-control-allow-origin*: *  
*connection*: close  
*content-length*: 691  
*content-type*: application/json; charset=utf-8  
*date*: Thu, 30 Jan 2025 01:35:35 GMT  
*etag*: W/"2b3-AjnvEnsdEfzADuavbfVJJj5KQIM"  
*nel*: {"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}  
*report-to*: {"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1738200935&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=YJsxM8T6X4o5h77MedrP5XHJJ%2FGwMTKR7DkvsgAaASs%3D"}]}  
*reporting-endpoints*: heroku-nel=https://nel.heroku.com/reports?ts=1738200935&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=YJsxM8T6X4o5h77MedrP5XHJJ%2FGwMTKR7DkvsgAaASs%3D  
*server*: BobTheBuilder  
*strict-transport-security*: max-age=15552000; includeSubDomains  
*vary*: Accept-Encoding  
*via*: 1.1 vegur  
*x-content-type-options*: nosniff  
*x-dns-prefetch-control*: off  
*x-download-options*: noopen  
*x-frame-options*: SAMEORIGIN  
*x-powered-by*: Cats on Keyboards  
*x-ratelimit-limit*: 100  
*x-ratelimit-remaining*: 99  
*x-ratelimit-reset*: 1738200945  
*x-xss-protection*: 1; mode=block  
  
  
`TestResults`  
  
  
  
`Timings`  
  
*Wait*: 5 ms  
*DNS*: 7 ms  
*TCP*: 76 ms  
*TLS*: 82 ms  
*First Byte*: 83 ms  
*Total*: 253 ms  
  
  
`Meta`  
  
*ip*: 52.223.46.195  
*size*: 1.7 kB