import { make } from 'redux-chill';


/**
 * Login
 */
 const setSidebarVisible = make('[general] setSidebarVisible').stage((payload): boolean => payload)

/**
 * Login
 */
const login = make('[general] login')
/**
 * Logout
 */
const logout = make('[general] logout')

export { login, logout, setSidebarVisible }