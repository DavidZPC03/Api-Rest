`PUT https://dummyjson.com/users/1`  
*accept*: */*  
*accept-encoding*: gzip, deflate, br  
*content-length*: 133  
*content-type*: application/json  
*user-agent*: httpyac  
  
```json  
{  
  "firstName": "Carlos",  
  "lastName": "Ramírez",  
  "age": 30,  
  "gender": "Male",  
  "email": "carlos.ramirez@example.com"  
}  
```  
  
`HTTP/1.1 200 - OK`  
*access-control-allow-origin*: *  
*connection*: close  
*content-length*: 975  
*content-type*: application/json; charset=utf-8  
*date*: Thu, 30 Jan 2025 02:01:09 GMT  
*etag*: W/"3cf-uabfYaznZC17Q8HGbk73LoRKe0I"  
*nel*: {"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}  
*report-to*: {"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1738202469&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=QxoJw1odONCFZBg7q3NfFKIAqCbm5ONSG51k3w0lflQ%3D"}]}  
*reporting-endpoints*: heroku-nel=https://nel.heroku.com/reports?ts=1738202469&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&s=QxoJw1odONCFZBg7q3NfFKIAqCbm5ONSG51k3w0lflQ%3D  
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
*x-ratelimit-reset*: 1738202475  
*x-xss-protection*: 1; mode=block  
  
  
`TestResults`  
  
  
  
`Timings`  
  
*Wait*: 11 ms  
*DNS*: 26 ms  
*TCP*: 82 ms  
*TLS*: 83 ms  
*Request*: 1 ms  
*First Byte*: 82 ms  
*Download*: 3 ms  
*Total*: 288 ms  
  
  
`Meta`  
  
*ip*: 15.197.246.237  
*size*: 1.98 kB