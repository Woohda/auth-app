/* 
Массив публичных маршрутов, не требующие аунтификации
@type {string[]}
*/

export const publicRoutes = ["/"];

/* 
Массив приватных маршрутов, не требующие аунтификации 
и будут перенапровлять авторизованных пользователей на профиль 
@type {string[]}
*/

export const protectedRoutes = ["/sign-in", "/sign-up"];

/* 
Дефолтный путь перенаправления после входа в систему
@type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/profile";
