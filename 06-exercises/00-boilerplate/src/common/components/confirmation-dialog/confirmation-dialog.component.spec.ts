import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('should return isOpen=false and a setItemToDelete=empty loockup when it calls it', () => {
      //Arrange

      //Act
        const{result} = renderHook(()=> useConfirmationDialog())
      //Assert

      expect(result.current.isOpen).toEqual(false);
      expect(result.current.itemToDelete).toEqual({
        id: '',
        name: '',
      })
      //expect(result.current.onOpenDialog).toEqual({})
  });

  it('should update isOpen when it calls onOpenDialog', () => {
    // Arrange
    const itemLookup: Lookup = {
        id: '1',
        name:'name',
    }
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemLookup);
    });

    // Assert
    expect(result.current.isOpen).toEqual(true);
  });

  it('should update isOpen when it calls onClose', () => {
    // Arrange
    const itemLookup: Lookup = {
        id: '1',
        name:'name',
    }
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemLookup);
    })
    // Act
    

    // Assert
    expect(result.current.isOpen).toEqual(true);
  });

});