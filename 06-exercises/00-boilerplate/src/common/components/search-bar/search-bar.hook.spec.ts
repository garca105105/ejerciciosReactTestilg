import React, { Key } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import {useSearchBar} from './search-bar.hook';
import { Lookup } from 'common/models';


describe('useUser specs', () => {
    it('should return search', () => {
      // Arrange
      const itemLookup:Lookup[] = [{
        id: '1',
        name: 'name'
      },
      {
        id:'2',
        name:'name2'
      }];

      const field = [];
      
  
      // Act
      const { result } = renderHook(() => useSearchBar(itemLookup,['name']));

      //Asser
      expect(result.current.filteredList).toEqual(itemLookup);
      
    });
});