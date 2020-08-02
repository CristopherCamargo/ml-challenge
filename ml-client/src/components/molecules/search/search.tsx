import React from "react";
import { SearchTemplate } from "~/components/templates";
import { Input, Button, Icon } from "~/components/atoms";
import IconSearch from "~/assets/ic_Search.png";
import IconSearchX2 from "~/assets/ic_Search@2x.png";

const Search = () => {
  return (
    <SearchTemplate
      input={<Input placeholder="Nunca dejes de buscar" />}
      button={
        <Button>
          <Icon srcSet={`${IconSearch}, ${IconSearchX2} 2x`} />
        </Button>
      }
    />
  );
};

export default Search;
