import { Employee } from './employee-list.api-model';
import Axios from 'axios';
import { mockEmployeeList } from './employee-list.mock-data';
import { getEmployeeList } from './employee-list.api';
import { deleteEmployee } from './employee-list.api';

describe('api specs', () => {
    it('should return members when it resolves the request successfully', async () => {
      // Arrange
      const employee: Employee[] = [
        {
            id: string;
            isActive: boolean;
            name: string;
            email: string;
            lastDateIncurred: string;
        },
      ];
      const getStub = jest.spyOn(Axios, 'get').mockResolvedValue({
        data: employee,
      });
  
      // Act
      const result = await getEmployeeList();
  
      // Assert
      expect(getStub).toHaveBeenCalledWith(
        'https://api.github.com/orgs/lemoncode/members'
      );
      expect(result).toEqual(employee);
    });
  
    it('should throw an error with "Too many Github API calls!" when it rejects the request with 403 status code', async () => {
      // Arrange
      const getStub = jest.spyOn(Axios, 'get').mockRejectedValue({
        response: { status: 403 },
      });
  
      // Act
      try {
        const result = await getEmployeeList();
      } catch (error) {
        // Assert
        expect(getStub).toHaveBeenCalledWith(
          'https://api.github.com/orgs/lemoncode/members'
        );
        expect(error).toEqual('Too many Github API calls!');
      }
    });
  
    it('should throw an error with "Unavailable service" when it rejects the request with 503 status code', async () => {
      // Arrange
      const getStub = jest.spyOn(Axios, 'get').mockRejectedValue({
        response: { status: 503 },
      });
  
      // Act
      try {
        const result = await getEmployeeList();
      } catch (error) {
        // Assert
        expect(getStub).toHaveBeenCalledWith(
          'https://api.github.com/orgs/lemoncode/members'
        );
        expect(error).toEqual('Unavailable service');
      }
    });
  
    it('should return undefined when it rejects the request with different status code', async () => {
      // Arrange
      const getStub = jest.spyOn(Axios, 'get').mockRejectedValue({
        response: {
          status: 404,
        },
      });
  
      // Act
      const result = await getEmployeeList();
  
      // Assert
      expect(result).toBeUndefined();
    });
  });
  