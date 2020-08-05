import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, FormGroup, Col, Label, Button } from 'reactstrap';

interface Props {
  fields: [string, string];
  isUser: boolean;
  isEditMode: boolean;
  onSubmit: (name: string, email: string) => void;
  onCancel: () => void;
}

const ItemInfo = ({
  fields,
  isUser,
  isEditMode,
  onSubmit,
  onCancel,
}: Props) => {
  const [field1, setField1] = useState(fields[0]);
  const [field2, setField2] = useState(fields[1]);

  const onCancelEdit = () => {
    setField2(fields[1]);
    setField1(fields[0]);
    onCancel();
  };

  const onSubmitEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(field1, field2);
  };
  return (
    <form onSubmit={onSubmitEdit}>
      <FormGroup row>
        {isUser && (
          <Label for="name" sm={2}>
            Name:
          </Label>
        )}
        <Col sm={isUser ? 10 : 12}>
          <Input
            value={field1}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setField1(e.target.value)
            }
            disabled={!isEditMode}
            id="name"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        {isUser && (
          <Label for="email" sm={2}>
            Email:
          </Label>
        )}

        <Col sm={isUser ? 10 : 12}>
          <Input
            type={isUser ? 'text' : 'textarea'}
            value={field2}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setField2(e.target.value)
            }
            disabled={!isEditMode}
          />
        </Col>
      </FormGroup>
      {isEditMode && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Button color="primary" style={{ width: '100%', marginRight: 5 }}>
            Submit
          </Button>
          <Button
            color="secondary"
            style={{ width: '100%', marginLeft: 5 }}
            onClick={onCancelEdit}
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  );
};

export default ItemInfo;
