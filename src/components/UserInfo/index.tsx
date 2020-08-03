import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, FormGroup, Col, Label, Button } from 'reactstrap';

interface Props {
  name: string;
  email: string;
  isEditMode: boolean;
  onSubmit: (name: string, email: string) => void;
  onCancel: () => void;
}

const UserInfo = ({ name, email, isEditMode, onSubmit, onCancel }: Props) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);

  const onCancelEdit = () => {
    setUserEmail(email);
    setUserName(name);
    onCancel();
  };

  const onSubmitEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCancel();
    onSubmit(userName, userEmail);
  };
  return (
    <form onSubmit={onSubmitEdit}>
      <FormGroup row>
        <Label for="name" sm={2}>
          Name:
        </Label>
        <Col sm={10}>
          <Input
            value={userName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
            disabled={!isEditMode}
            id="name"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2}>
          Email:
        </Label>
        <Col sm={10}>
          <Input
            value={userEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserEmail(e.target.value)
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

export default UserInfo;
