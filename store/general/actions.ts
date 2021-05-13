import { make } from 'redux-chill';
import { AuthData, SearchParams } from './model';

/**
 * Startup
 */
 const startup = make('[general] startup')

/**
 * Set sidebar visible
 */
const setSidebarVisible = make('[general] setSidebarVisible').stage((payload): boolean => payload)

/**
 * Set search parameters
 */
const setSearchParams = make('[general] setSearchParams').stage((payload): SearchParams => payload)

/**
 * Login
 */
const login = make('[general] login').stage((payload): AuthData => payload)
/**
 * Logout
 */
const logout = make('[general] logout')

export { login, logout, setSidebarVisible, setSearchParams, startup }