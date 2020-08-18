import React from 'react';
import './styles.css';
import { userI } from '../../App';
import Button from '../button';

interface Props {
  user: userI;
}

const Card: React.SFC<Props> = ({ user }) => (
  <div className="Card">
    <i>{user.gender}</i>
    <h3>
      {user.name.first} {user.name.last}
    </h3>
    <img src={user.picture.large} alt={user.name.title} /><br/>
    <Button text="Change" size="sm" />
  </div>
);

export default Card;