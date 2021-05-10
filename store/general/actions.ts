import { make } from 'redux-chill';
import { SearchParams } from './model';

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
const login = make('[general] login')
/**
 * Logout
 */
const logout = make('[general] logout')

export { login, logout, setSidebarVisible, setSearchParams }