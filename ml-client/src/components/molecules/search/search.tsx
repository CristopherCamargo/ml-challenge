import React, { useCallback } from "react";
import { SearchTemplate } from "~/components/templates";
import { Input, Button, Icon } from "~/components/atoms";
import IconSearch from "~/assets/ic_Search.png";
import IconSearchX2 from "~/assets/ic_Search@2x.png";
import { Form } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const Search = ({ value, onChange, onSubmit }: Props) => {
  const handleChange = useCallback((value: string | number) => {
    onChange(value.toString());
  }, []);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <SearchTemplate
        input={
          <Input
            placeholder="Nunca dejes de buscar"
            {...(value && { value })}
            onChange={handleChange}
          />
        }
        button={
          <Button onClick={onSubmit}>
            <Icon srcSet={`${IconSearch}, ${IconSearchX2} 2x`} />
          </Button>
        }
      />
    </Form>
  );
};

export default Search;
