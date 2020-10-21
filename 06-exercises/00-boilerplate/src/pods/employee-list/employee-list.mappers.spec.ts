import * as apiModel from './api/employee-list.api-model';
import * as viewModel from './employee-list.vm';
import {mapEmployeeListFromApiToVm} from './employee-list.mappers';

describe('mapper specs', () => {
    it('should return empty array when it feeds undefined', () => {
      // Arrange
      const employee: apiModel.Employee[] = undefined;
  
      // Act
      const result: viewModel.Employee[] = mapEmployeeListFromApiToVm(employee);
  
      // Assert
      expect(result).toEqual([]);
    });
  
    it('should return empty array when it feeds null', () => {
      // Arrange
      const employee: apiModel.Employee[] = null;
  
      // Act
      const result: viewModel.Employee[] = mapEmployeeListFromApiToVm(employee);
  
      // Assert
      expect(result).toEqual([]);
    });
  
    it('should return empty array when it feeds empty array', () => {
      // Arrange
      const employee: apiModel.Employee[] = [];
  
      // Act
      const result: viewModel.Employee[] = mapEmployeeListFromApiToVm(employee);
  
      // Assert
      expect(result).toEqual([]);
    });
  
    it('should return array one mapped item when it feeds array with one item', () => {
      // Arrange
      const employee: apiModel.Employee[] = [
        { id: '1', isActive: true, name: 'Pepito', email:'pepito@gmail.com', lastDateIncurred:'2020-10-02' },

      ];
  
      // Act
      const result: viewModel.Employee[] = mapEmployeeListFromApiToVm(employee);
  
      // Assert
      const expectedResult: viewModel.Employee[] = [
        { id: '1', isActive: true, name: 'Pepito', email:'pepito@gmail.com', lastDateIncurred:'2020-10-02' },
      ];
      expect(result).toEqual(expectedResult);
    });
  });

