import axios from 'axios';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/v1/users');
    console.log('API Response:', response.data); // Debugging hinzugefügt
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};