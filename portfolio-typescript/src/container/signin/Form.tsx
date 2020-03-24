import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, FormControl , ThemeProvider, TextField } from '@material-ui/core';

import { Settings } from 'settings';
import { Theme } from 'settings/material';

class FormContainer extends React.Component<RouteComponentProps> {

  onClickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.history.push(Settings.mapsin.survey);
  }

  render() {
    return (
      <form onSubmit={this.onClickSubmit}>
        <ThemeProvider theme={Theme}>
          <FormControl>
            <TextField
              className="id"
              variant="outlined"
              label="아이디"
              type="text"
              size="small"
              required
            />
            <TextField
              className="password"
              variant="outlined"
              label="비밀번호"
              type="password"
              size="small"
              required
            />
            <Button
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </ThemeProvider>
      </form>
    )
  }
}

export default withRouter(FormContainer);
