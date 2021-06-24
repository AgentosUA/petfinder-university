import { make } from 'redux-chill';

/**
 * Get profile
 */
const getProfile = make('[profile] get profile').stage('success', (payload) => payload);

export { getProfile }