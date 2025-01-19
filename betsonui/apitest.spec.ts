import { test, expect } from '@playwright/test';

const BASE_URL = 'https://petstore.swagger.io/v2';

test.describe('POST METHOD TO ADD PETS', () => {
    // Grouping tests for POST /pet endpoint
    test('POSITIVE TEST TO ADD PETS', async ({ request }) => {
      // Define a valid pet object with all required fields
      const pet = {
        id: 2,
        name: 'testing',
        status: 'available',
      };
  
      // Make a POST request to add the pet
      const response = await request.post(`${BASE_URL}/pet`, {
        data: pet,
      });
  
      // Verify the status code is 200 (success)
      expect(response.status()).toBe(200);
  
      // Parse the response body to verify the pet details were added correctly
      const responseBody = await response.json();
      expect(responseBody.id).toBe(pet.id);
      expect(responseBody.name).toBe(pet.name);
      expect(responseBody.status).toBe(pet.status);
    });
  
    test('should not add a pet with invalid data', async ({ request }) => {
      // Define an invalid pet object with incorrect data types
      const invalidPet = {
        id: 'invalid-id', // Invalid type for ID
        name: 12,          // Invalid type for name
      };
  
      // Make a POST request with the invalid data
      const response = await request.post(`${BASE_URL}/pet`, {
        data: invalidPet,
      });
  
      // Verify the status code is 500 (server error for invalid data)
      expect(response.status()).toBe(500);
    });
  });
  
  

  test.describe('GET - Test to Get Pet by ID', () => {
    // Grouping tests for GET /pet/{petId} endpoint
    test('should retrieve pet with valid ID', async ({ request }) => {
      // Define a valid pet ID that exists in the system
      const petId = 2; 
  
      // Make a GET request to fetch the pet by ID
      const response = await request.get(`${BASE_URL}/pet/${petId}`);
  
      // Verify the status code is 200 (success)
      expect(response.status()).toBe(200);
  
      // Parse the response body and validate the pet details
      const responseBody = await response.json();
      expect(responseBody.id).toBe(petId);            // Check if the ID matches
      expect(responseBody.name).toBe('testing');      // Check if the name matches
      expect(responseBody.status).toBe('available');  // Check if the status matches
    });
  
    test('should return 404 for non-existent pet ID', async ({ request }) => {
      // Define an invalid pet ID that does not exist
      const invalidPetId = 55;
  
      // Make a GET request with a non-existent pet ID
      const response = await request.get(`${BASE_URL}/pet/${invalidPetId}`);
  
      // Verify the status code is 404 (not found)
      expect(response.status()).toBe(404);
    });
  });
  
  
  