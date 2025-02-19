/* 
Массив публичных маршрутов, не требующие аунтификации
@type {string[]}
*/

export const publicRoutes = ["/"];

/* 
Массив приватных маршрутов, требующие аунтификации 
и будут перенапровлять авторизованных пользователей на профиль 
@type {string[]}
*/

export const authRoutes = ["/sing-in", "/sing-up"];

/* 
Дефолтный путь перенаправления после входа в систему
@type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/profile";
