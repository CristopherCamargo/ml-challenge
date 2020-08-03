import React, { useCallback } from "react";
import { SearchTemplate } from "~/components/templates";
import { Input, Button, Icon } from "~/components/atoms";
import IconSearch from "~/assets/ic_Search.png";
import IconSearchX2 from "~/assets/ic_Search@2x.png";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: Props) => {
  const handleChange = useCallback((value: string | number) => {
    onChange(value.toString());
  }, []);

  return (
    <SearchTemplate
      input={
        <Input
          placeholder="Nunca dejes de buscar"
          {...(value && { value })}
          onChange={handleChange}
        />
      }
      button={
        <Button>
          <Icon srcSet={`${IconSearch}, ${IconSearchX2} 2x`} />
        </Button>
      }
    />
  );
};

export default Search;
