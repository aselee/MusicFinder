import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { onFormSubmit } from '../actions';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function onSubmit(e) {
    e.preventDefault();
    const input = e.target.children[0].value;
    debugger;
    const formAction = onFormSubmit(input);
    formAction();
}

function Artist(props) {
  const { classes } = props;
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Events
          </Typography>
          <div className="input">
            <form onSubmit={onSubmit}>
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
          </div>
          <div>
            {
                props.events.map((event, index) => {
                    console.log(event);
                    return (
                        <div key={index}>
                            <p>{event.displayName}</p>
                        </div>
                    )
                })
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

Artist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Artist);
