import React from 'react';
import { FormGroup, FormItem, InputGroup, Button } from 'fundamental-react';

import { SearchWrapper } from './styled';

import { PLACEHOLDERS } from '../../../constants';

interface Props {
  searchField: any;
  configurationsExist: boolean;
  showSearchIcon: boolean;
  setShowSearchIcon: any;
  reference: any;
}

const SearchComponent: React.FunctionComponent<Props> = ({
  searchField,
  configurationsExist,
  showSearchIcon,
  setShowSearchIcon,
  reference,
}) => (
  <SearchWrapper>
    <div ref={reference}>
      {showSearchIcon ? (
        <Button
          glyph="search"
          option="light"
          disabled={!configurationsExist}
          compact={true}
          onClick={() => {
            setShowSearchIcon(false);
          }}
        />
      ) : (
        <FormGroup>
          <FormItem>
            <InputGroup
              compact={true}
              inputPlaceholder={PLACEHOLDERS.SEARCH_FIELD}
              inputType="search"
              {...searchField.bind}
            />
          </FormItem>
        </FormGroup>
      )}
    </div>
  </SearchWrapper>
);

export default SearchComponent;
