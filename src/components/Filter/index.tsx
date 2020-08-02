import React, { FormEvent, useState, ChangeEvent } from 'react';
import { Button, Form, Input } from 'reactstrap';

interface Props {
  onFilter: (filerText: string) => void;
}

const Filter = ({ onFilter }: Props) => {
  const styles = { display: 'flex', margin: '20px 0' };
  const [value, setValue] = useState<string>('');
  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onFilter(value);
  };
  return (
    <Form style={styles} onSubmit={onSubmit}>
      <Input
        type="text"
        name="filter"
        placeholder="Type to filter"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <Button>Filter</Button>
    </Form>
  );
};

export default Filter;
