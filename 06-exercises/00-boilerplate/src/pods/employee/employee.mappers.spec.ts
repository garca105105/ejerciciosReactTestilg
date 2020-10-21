import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';
import {mapEmployeeFromApiToVm} from './employee.mappers';


describe('mapper specs', () => {
  it('should return an empleyee with no project', () => {
    // Arrange
    const employee: apiModel.Employee = 
      { id: '1', isActive: true, name: 'Pepito', email:'pepito@gmail.com' };

    // Act
    const result: viewModel.Employee = mapEmployeeFromApiToVm(employee);

    // Assert
    const expectedResult: viewModel.Employee = 
      { id: '1', isActive: true, name: 'Pepito', email:'pepito@gmail.com', projects: []};
    expect(result).toEqual(expectedResult);
  });

  it('should return an empleyee with a project', () => {
    // Arrange
    const projects: apiModel.ProjectSummary[] = [{
      id: '1',
      isAssigned: true,
      projectName: 'Infinity'
    }];
    const employee: apiModel.Employee = 
      { id: '1', isActive: true, name: 'Pepito', email:'pepito@gmail.com', projects: projects  };

    // Act
    const result: viewModel.Employee = mapEmployeeFromApiToVm(employee);

    // Assert
    const expectedResult: viewModel.Employee = 
      { id: '1', isActive: true, name: 'Pepito', email:'pepito@gmail.com', projects: projects
    };
    expect(result).toEqual(expectedResult);
  });

}); 